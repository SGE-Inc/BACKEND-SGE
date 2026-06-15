import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class CursoAdminService {
  async list() {
    const cursos = await prisma.curso.findMany({
      include: {
        _count: { select: { turmas: true, disciplinas: true } },
      },
      orderBy: { nome: "asc" },
    });
    return cursos.map(c => ({
      id: c.id,
      nome: c.nome,
      sigla: c.sigla,
      numTurmas: c._count.turmas,
      numDisciplinas: c._count.disciplinas,
    }));
  }

  async getById(id: string) {
    const curso = await prisma.curso.findUnique({
      where: { id },
      include: {
        _count: { select: { turmas: true, disciplinas: true } },
      },
    });
    if (!curso) throw createError(404, "Curso não encontrado");
    return {
      id: curso.id,
      nome: curso.nome,
      sigla: curso.sigla,
      numTurmas: curso._count.turmas,
      numDisciplinas: curso._count.disciplinas,
    };
  }

  async create(data: { nome: string; sigla: string }) {
    const existing = await prisma.curso.findFirst({
      where: { OR: [{ nome: data.nome }, { sigla: data.sigla }] },
    });
    if (existing) {
      throw createError(409, "Já existe um curso com este nome ou sigla");
    }
    const curso = await prisma.curso.create({ data });
    return { id: curso.id, nome: curso.nome, sigla: curso.sigla, numTurmas: 0, numDisciplinas: 0, message: "Curso criado com sucesso" };
  }

  async update(id: string, data: { nome?: string; sigla?: string }) {
    const existing = await prisma.curso.findUnique({ where: { id } });
    if (!existing) throw createError(404, "Curso não encontrado");
    const curso = await prisma.curso.update({ where: { id }, data });
    const counts = await prisma.curso.findUnique({
      where: { id },
      include: { _count: { select: { turmas: true, disciplinas: true } } },
    });
    return {
      id: curso.id,
      nome: curso.nome,
      sigla: curso.sigla,
      numTurmas: counts!._count.turmas,
      numDisciplinas: counts!._count.disciplinas,
      message: "Curso actualizado com sucesso",
    };
  }

  async delete(id: string) {
    const curso = await prisma.curso.findUnique({
      where: { id },
      include: { _count: { select: { turmas: true, disciplinas: true } } },
    });
    if (!curso) throw createError(404, "Curso não encontrado");
    if (curso._count.turmas > 0 || curso._count.disciplinas > 0) {
      throw createError(409, "Não é permitido remover curso com turmas ou disciplinas associadas");
    }
    await prisma.curso.delete({ where: { id } });
    return { message: "Curso removido com sucesso" };
  }
}
