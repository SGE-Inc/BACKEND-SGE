import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";
import type { TurmaResponse } from "../types/index.js";

export class TurmaAdminService {
  async list(curso?: string): Promise<TurmaResponse[]> {
    const where = curso ? { curso: { sigla: curso } } : {};
    const turmas = await prisma.turma.findMany({
      where,
      include: {
        curso: true,
        _count: { select: { alunos: true } },
      },
      orderBy: { nome: "asc" },
    });
    return turmas.map(t => ({
      id: t.id,
      nome: t.nome,
      cursoId: t.cursoId,
      cursoNome: t.curso.nome,
      cursoSigla: t.curso.sigla,
      classe: t.classe,
      vagas: t.vagas,
      turno: t.turno,
      anoLectivo: t.anoLectivo,
      numEstudantes: t._count.alunos,
    }));
  }

  async create(data: {
    nome: string;
    curso: string;
    classe: string;
    vagas: number;
    turno: string;
    anoLectivo: string;
  }): Promise<TurmaResponse> {
    const existing = await prisma.turma.findUnique({
      where: { nome_cursoId: { nome: data.nome, cursoId: data.curso } },
    });
    if (existing) {
      throw createError(409, "Já existe uma turma com este nome no curso");
    }
    const turma = await prisma.turma.create({
      data: {
        nome: data.nome,
        cursoId: data.curso,
        classe: data.classe,
        vagas: data.vagas,
        turno: data.turno,
        anoLectivo: data.anoLectivo,
      },
      include: {
        curso: true,
        _count: { select: { alunos: true } },
      },
    });
    return {
      id: turma.id,
      nome: turma.nome,
      cursoId: turma.cursoId,
      cursoNome: turma.curso.nome,
      cursoSigla: turma.curso.sigla,
      classe: turma.classe,
      vagas: turma.vagas,
      turno: turma.turno,
      anoLectivo: turma.anoLectivo,
      numEstudantes: turma._count.alunos,
    };
  }

  async update(id: string, data: Record<string, unknown>): Promise<TurmaResponse> {
    const existing = await prisma.turma.findUnique({ where: { id } });
    if (!existing) throw createError(404, "Turma não encontrada");

    const turma = await prisma.turma.update({
      where: { id },
      data,
      include: {
        curso: true,
        _count: { select: { alunos: true } },
      },
    });
    return {
      id: turma.id,
      nome: turma.nome,
      cursoId: turma.cursoId,
      cursoNome: turma.curso.nome,
      cursoSigla: turma.curso.sigla,
      classe: turma.classe,
      vagas: turma.vagas,
      turno: turma.turno,
      anoLectivo: turma.anoLectivo,
      numEstudantes: turma._count.alunos,
    };
  }

  async delete(id: string): Promise<{ message: string }> {
    const turma = await prisma.turma.findUnique({
      where: { id },
      include: { _count: { select: { alunos: true } } },
    });
    if (!turma) throw createError(404, "Turma não encontrada");
    if (turma._count.alunos > 0) {
      throw createError(409, "Não é permitido remover turma com estudantes activos");
    }
    await prisma.turma.delete({ where: { id } });
    return { message: "Turma removida com sucesso" };
  }

  async listEstudantes(id: string) {
    const turma = await prisma.turma.findUnique({ where: { id } });
    if (!turma) throw createError(404, "Turma não encontrada");

    const alunos = await prisma.aluno.findMany({
      where: { turmaId: id },
      include: { user: { select: { id: true, nome: true, email: true, status: true } } },
      orderBy: { user: { nome: "asc" } },
    });
    return alunos.map(a => ({
      id: a.id,
      userId: a.userId,
      nome: a.user.nome,
      email: a.user.email,
      numeroProcesso: a.numeroProcesso,
      status: a.user.status.toLowerCase(),
    }));
  }
}
