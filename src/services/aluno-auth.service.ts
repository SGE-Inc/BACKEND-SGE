import bcrypt from "bcryptjs";
import crypto from "crypto";
import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";
import type { User } from "@generated/prisma/index.js";

function gerarSenha(): string {
  return crypto.randomBytes(4).toString("hex").toUpperCase();
}

async function resolveTurma(cursoNome: string, classe: string): Promise<string | undefined> {
  const curso = await prisma.curso.findFirst({
    where: {
      OR: [
        { nome: { equals: cursoNome, mode: "insensitive" } },
        { sigla: { equals: cursoNome, mode: "insensitive" } },
      ],
    },
  });
  if (!curso) return undefined;

  const turma = await prisma.turma.findFirst({
    where: { cursoId: curso.id, classe },
  });
  return turma?.id;
}

export class AlunoAuthService {
  async register(data: {
    nome: string;
    dataNascimento: string;
    tipoIdentificacao: string;
    numeroIdentificacao: string;
    numeroProcesso: string;
    ultimaClasseFrequentada: string;
    classe: string;
    curso: string;
    telefone: string;
    email?: string;
  }) {
    const existingProcesso = await prisma.aluno.findUnique({
      where: { numeroProcesso: data.numeroProcesso },
    });
    if (existingProcesso) {
      throw createError(409, "Nº de processo já registado");
    }

    const utilizador = `${data.numeroProcesso}-${data.numeroIdentificacao}`;
    const existingUser = await prisma.user.findUnique({
      where: { numeroUtilizador: utilizador },
    });
    if (existingUser) {
      throw createError(409, "Credenciais já geradas para este aluno");
    }

    const turmaId = await resolveTurma(data.curso, data.classe);

    const senha = gerarSenha();
    const senhaHash = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome: data.nome,
        email: data.email || null,
        telefone: data.telefone,
        numeroUtilizador: utilizador,
        senhaHash,
        role: "ALUNO",
        aluno: {
          create: {
            dataNascimento: new Date(data.dataNascimento),
            tipoIdentificacao: data.tipoIdentificacao,
            numeroIdentificacao: data.numeroIdentificacao,
            numeroProcesso: data.numeroProcesso,
            ultimaClasseFrequentada: data.ultimaClasseFrequentada,
            classe: data.classe,
            curso: data.curso,
            turmaId: turmaId ?? null,
          },
        },
      },
    });

    return {
      id: user.id,
      nome: user.nome,
      utilizador,
      senha,
      message: "Aluno registado com sucesso. Guarde as credenciais abaixo.",
    };
  }

  async login(utilizador: string, senha: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { numeroUtilizador: utilizador },
    });

    if (!user || user.role !== "ALUNO") {
      throw createError(401, "Credenciais inválidas");
    }

    const valid = await bcrypt.compare(senha, user.senhaHash);
    if (!valid) {
      throw createError(401, "Credenciais inválidas");
    }

    return user;
  }

  async me(userId: string) {
    const aluno = await prisma.aluno.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, nome: true, email: true, telefone: true, numeroUtilizador: true } },
      },
    });
    if (!aluno) throw createError(404, "Aluno não encontrado");

    return {
      id: aluno.id,
      userId: aluno.userId,
      nome: aluno.user.nome,
      email: aluno.user.email,
      telefone: aluno.user.telefone,
      utilizador: aluno.user.numeroUtilizador,
      dataNascimento: aluno.dataNascimento.toISOString(),
      tipoIdentificacao: aluno.tipoIdentificacao,
      numeroIdentificacao: aluno.numeroIdentificacao,
      numeroProcesso: aluno.numeroProcesso,
      ultimaClasseFrequentada: aluno.ultimaClasseFrequentada,
      classe: aluno.classe,
      curso: aluno.curso,
      turmaId: aluno.turmaId,
    };
  }

  async resetSenha(userId: string, senhaActual: string, novaSenha: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw createError(404, "Utilizador não encontrado");

    const valid = await bcrypt.compare(senhaActual, user.senhaHash);
    if (!valid) throw createError(401, "Senha actual incorrecta");

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { senhaHash: novaSenhaHash },
    });

    return { message: "Senha alterada com sucesso" };
  }
}
