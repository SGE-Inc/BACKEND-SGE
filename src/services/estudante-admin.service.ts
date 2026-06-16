import bcrypt from "bcryptjs";
import crypto from "crypto";
import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

function gerarSenha(): string {
  return crypto.randomBytes(4).toString("hex").toUpperCase();
}

export class EstudanteAdminService {
  async list(params: { curso?: string; turma?: string; status?: string; search?: string; page: number; limit: number }) {
    const where: Record<string, unknown> = { role: "ALUNO" };
    if (params.curso) where.curso = params.curso;
    if (params.status) where.status = params.status?.toUpperCase();
    if (params.search) {
      where.OR = [
        { nome: { contains: params.search, mode: "insensitive" } },
        { aluno: { numeroProcesso: { contains: params.search, mode: "insensitive" } } },
      ];
    }
    if (params.turma) {
      where.aluno = { ...(where.aluno as Record<string, unknown> || {}), turmaId: params.turma };
    }

    const [total, users] = await Promise.all([
      prisma.user.count({ where: where as any }),
      prisma.user.findMany({
        where: where as any,
        include: { aluno: { include: { turma: true } } },
        orderBy: { nome: "asc" },
        skip: (params.page - 1) * params.limit,
        take: params.limit,
      }),
    ]);

    const data = users.map((u) => ({
      id: u.aluno!.id,
      userId: u.id,
      nome: u.nome,
      numeroProcesso: u.aluno!.numeroProcesso,
      turma: u.aluno!.turma?.nome ?? "-",
      turmaId: u.aluno!.turmaId,
      curso: u.aluno!.curso ?? "-",
      classe: u.aluno!.classe ?? "-",
      contacto: u.telefone ?? "-",
      email: u.email ?? "-",
      dataNascimento: u.aluno!.dataNascimento.toISOString(),
      genero: u.aluno!.genero ?? "-",
      status: u.status.toLowerCase(),
      mediaGeral: 0,
    }));

    return {
      data,
      pagination: { page: params.page, limit: params.limit, total, totalPages: Math.ceil(total / params.limit) },
    };
  }

  async getById(id: string) {
    const aluno = await prisma.aluno.findUnique({
      where: { id },
      include: { user: true, turma: { include: { curso: true } } },
    });
    if (!aluno) throw createError(404, "Aluno não encontrado");
    return {
      id: aluno.id,
      userId: aluno.userId,
      nome: aluno.user.nome,
      email: aluno.user.email,
      telefone: aluno.user.telefone,
      numeroProcesso: aluno.numeroProcesso,
      turma: aluno.turma?.nome ?? null,
      turmaId: aluno.turmaId,
      curso: aluno.curso,
      classe: aluno.classe,
      dataNascimento: aluno.dataNascimento.toISOString(),
      tipoIdentificacao: aluno.tipoIdentificacao,
      numeroIdentificacao: aluno.numeroIdentificacao,
      genero: aluno.genero,
      turno: aluno.turno,
      estadoCivil: aluno.estadoCivil,
      nomePai: aluno.nomePai,
      nomeMae: aluno.nomeMae,
      naturalidade: aluno.naturalidade,
      provincia: aluno.provincia,
      municipio: aluno.municipio,
      comuna: aluno.comuna,
      encarregadoNome: aluno.encarregadoNome,
      encarregadoParentesco: aluno.encarregadoParentesco,
      encarregadoGenero: aluno.encarregadoGenero,
      encarregadoDataNascimento: aluno.encarregadoDataNascimento?.toISOString() ?? null,
      encarregadoTelefone: aluno.encarregadoTelefone,
      encarregadoEmail: aluno.encarregadoEmail,
      status: aluno.user.status.toLowerCase(),
    };
  }

  async getByProcesso(numeroProcesso: string) {
    const aluno = await prisma.aluno.findUnique({
      where: { numeroProcesso },
      include: { user: true, turma: true },
    });
    if (!aluno) throw createError(404, "Aluno não encontrado");
    return this.getById(aluno.id);
  }

  async create(data: Record<string, unknown>) {
    const existing = await prisma.aluno.findUnique({ where: { numeroProcesso: data.numeroProcesso as string } });
    if (existing) throw createError(409, "Nº de processo já registado");

    const senha = gerarSenha();
    const senhaHash = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome: data.nome as string,
        email: (data.email as string) || null,
        telefone: (data.telefone as string) || null,
        senhaHash,
        role: "ALUNO",
        aluno: {
          create: {
            dataNascimento: new Date(data.dataNascimento as string),
            tipoIdentificacao: data.tipoIdentificacao as string,
            numeroIdentificacao: data.numeroIdentificacao as string,
            numeroProcesso: data.numeroProcesso as string,
            curso: (data.curso as string) || null,
            classe: (data.classe as string) || null,
            turmaId: (data.turmaId as string) || null,
            genero: (data.genero as string) || null,
            turno: (data.turno as string) || null,
            estadoCivil: (data.estadoCivil as string) || null,
            nomePai: (data.nomePai as string) || null,
            nomeMae: (data.nomeMae as string) || null,
            naturalidade: (data.naturalidade as string) || null,
            provincia: (data.provincia as string) || null,
            municipio: (data.municipio as string) || null,
            comuna: (data.comuna as string) || null,
            encarregadoNome: (data.encarregadoNome as string) || null,
            encarregadoParentesco: (data.encarregadoParentesco as string) || null,
            encarregadoGenero: (data.encarregadoGenero as string) || null,
            encarregadoDataNascimento: data.encarregadoDataNascimento ? new Date(data.encarregadoDataNascimento as string) : null,
            encarregadoTelefone: (data.encarregadoTelefone as string) || null,
            encarregadoEmail: (data.encarregadoEmail as string) || null,
          },
        },
      },
      include: { aluno: true },
    });

    return {
      id: user.aluno!.id,
      userId: user.id,
      nome: user.nome,
      numeroProcesso: user.aluno!.numeroProcesso,
      password: senha,
      message: "Aluno matriculado com sucesso",
    };
  }

  async update(id: string, data: Record<string, unknown>) {
    const aluno = await prisma.aluno.findUnique({ where: { id }, include: { user: true } });
    if (!aluno) throw createError(404, "Aluno não encontrado");

    const alunoData: Record<string, unknown> = {};
    const userData: Record<string, unknown> = {};

    if (data.nome) userData.nome = data.nome;
    if (data.email !== undefined) userData.email = data.email || null;
    if (data.telefone !== undefined) userData.telefone = data.telefone || null;

    const dateFields = ["dataNascimento", "encarregadoDataNascimento"];
    for (const key of Object.keys(data)) {
      if (dateFields.includes(key)) {
        if (data[key]) alunoData[key] = new Date(data[key] as string);
      } else if (key !== "nome" && key !== "email" && key !== "telefone") {
        alunoData[key] = data[key] || null;
      }
    }

    if (Object.keys(userData).length > 0) {
      await prisma.user.update({ where: { id: aluno.userId }, data: userData as any });
    }
    if (Object.keys(alunoData).length > 0) {
      await prisma.aluno.update({ where: { id }, data: alunoData as any });
    }

    return this.getById(id);
  }

  async delete(id: string) {
    const aluno = await prisma.aluno.findUnique({ where: { id } });
    if (!aluno) throw createError(404, "Aluno não encontrado");
    await prisma.user.update({ where: { id: aluno.userId }, data: { status: "INATIVO" } });
    return { message: "Aluno removido com sucesso" };
  }

  async changeStatus(id: string, status: string, motivo?: string) {
    const aluno = await prisma.aluno.findUnique({ where: { id }, include: { user: true } });
    if (!aluno) throw createError(404, "Aluno não encontrado");
    await prisma.user.update({ where: { id: aluno.userId }, data: { status: status as any } });

    await prisma.auditoriaLog.create({
      data: {
        tipo: "TRANSFERIR",
        descricao: `Estado do aluno ${aluno.user.nome} alterado para ${status}${motivo ? ` (${motivo})` : ""}`,
        utilizador: "Admin",
        utilizadorId: aluno.userId,
        role: "admin",
        entidade: "Aluno",
        entidadeId: id,
      },
    });

    return { message: `Estado do aluno alterado para ${status.toLowerCase()}`, status: status.toLowerCase() };
  }

  async transfer(id: string, novaTurmaId: string, motivo?: string) {
    const aluno = await prisma.aluno.findUnique({ where: { id }, include: { user: true } });
    if (!aluno) throw createError(404, "Aluno não encontrado");

    const turma = await prisma.turma.findUnique({ where: { id: novaTurmaId } });
    if (!turma) throw createError(404, "Turma não encontrada");

    await prisma.aluno.update({
      where: { id },
      data: { turmaId: novaTurmaId, classe: turma.classe },
    });

    await prisma.auditoriaLog.create({
      data: {
        tipo: "TRANSFERIR",
        descricao: `Aluno ${aluno.user.nome} transferido para ${turma.nome}${motivo ? ` (${motivo})` : ""}`,
        utilizador: "Admin",
        utilizadorId: aluno.userId,
        role: "admin",
        entidade: "Aluno",
        entidadeId: id,
      },
    });

    return { message: "Aluno transferido com sucesso", novaTurma: turma.nome };
  }

  async getHistorico(id: string) {
    const aluno = await prisma.aluno.findUnique({
      where: { id },
      include: { user: true, turma: true, resultados: { include: { exame: true } } },
    });
    if (!aluno) throw createError(404, "Aluno não encontrado");
    return {
      id: aluno.id,
      nome: aluno.user.nome,
      numeroProcesso: aluno.numeroProcesso,
      turma: aluno.turma?.nome ?? null,
      resultados: aluno.resultados.map((r) => ({
        exameId: r.exameId,
        disciplina: r.exame.tipo,
        nota: r.nota,
        data: r.exame.data.toISOString(),
      })),
    };
  }
}
