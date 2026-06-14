import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";
import type { DisciplinaResponse } from "../types/index.js";

export class DisciplinaAdminService {
  async list(curso?: string, classe?: string): Promise<DisciplinaResponse[]> {
    const where: Record<string, unknown> = {};
    if (curso) where.curso = { sigla: curso };
    if (classe) where.classe = classe;

    const disciplinas = await prisma.disciplina.findMany({
      where,
      include: { curso: true },
      orderBy: [{ classe: "asc" }, { nome: "asc" }],
    });
    return disciplinas.map(d => ({
      id: d.id,
      nome: d.nome,
      sigla: d.sigla,
      cursoId: d.cursoId,
      cursoNome: d.curso.nome,
      classe: d.classe,
      cargaHoraria: d.cargaHoraria,
      cor: d.cor,
    }));
  }

  async create(data: {
    nome: string;
    sigla: string;
    curso: string;
    classe: string;
    cargaHoraria: number;
    cor?: string;
  }): Promise<DisciplinaResponse> {
    const existing = await prisma.disciplina.findUnique({
      where: { nome_cursoId_classe: { nome: data.nome, cursoId: data.curso, classe: data.classe } },
    });
    if (existing) {
      throw createError(409, "Já existe uma disciplina com este nome no curso e classe");
    }
    const disciplina = await prisma.disciplina.create({
      data: {
        nome: data.nome,
        sigla: data.sigla,
        cursoId: data.curso,
        classe: data.classe,
        cargaHoraria: data.cargaHoraria,
        cor: data.cor,
      },
      include: { curso: true },
    });
    return {
      id: disciplina.id,
      nome: disciplina.nome,
      sigla: disciplina.sigla,
      cursoId: disciplina.cursoId,
      cursoNome: disciplina.curso.nome,
      classe: disciplina.classe,
      cargaHoraria: disciplina.cargaHoraria,
      cor: disciplina.cor,
    };
  }

  async update(id: string, data: Record<string, unknown>): Promise<DisciplinaResponse> {
    const existing = await prisma.disciplina.findUnique({ where: { id } });
    if (!existing) throw createError(404, "Disciplina não encontrada");

    const disciplina = await prisma.disciplina.update({
      where: { id },
      data,
      include: { curso: true },
    });
    return {
      id: disciplina.id,
      nome: disciplina.nome,
      sigla: disciplina.sigla,
      cursoId: disciplina.cursoId,
      cursoNome: disciplina.curso.nome,
      classe: disciplina.classe,
      cargaHoraria: disciplina.cargaHoraria,
      cor: disciplina.cor,
    };
  }

  async delete(id: string): Promise<{ message: string }> {
    const disciplina = await prisma.disciplina.findUnique({
      where: { id },
      include: { _count: { select: { professores: true } } },
    });
    if (!disciplina) throw createError(404, "Disciplina não encontrada");
    if (disciplina._count.professores > 0) {
      throw createError(409, "Não é permitido remover disciplina com professores atribuídos");
    }
    await prisma.disciplina.delete({ where: { id } });
    return { message: "Disciplina removida com sucesso" };
  }
}
