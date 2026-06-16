import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorEstudanteRepository } from "../domain/IProfessorEstudante";

export const PrismaProfessorEstudanteRepository = (client: PrismaClient): IProfessorEstudanteRepository => ({
  async findByTurma(turmaId) {
    const alunos = await client.aluno.findMany({
      where: { turmaId },
      include: {
        user: { select: { nome: true, email: true, status: true } },
        _count: { select: { faltas: true } },
      },
      orderBy: { user: { nome: "asc" } },
    });
    return alunos.map(a => ({
      id: a.id,
      nome: (a.user as any).nome,
      email: (a.user as any).email,
      numeroProcesso: a.numeroProcesso,
      status: (a.user as any).status,
      totalFaltas: a._count.faltas,
    }));
  },
  async findByDisciplina(disciplinaId) {
    const relacoes = await client.professorDisciplina.findMany({
      where: { disciplinaId },
      select: { turmaId: true },
    });
    const turmaIds = [...new Set(relacoes.map(r => r.turmaId))];
    const alunos = await client.aluno.findMany({
      where: { turmaId: { in: turmaIds } },
      include: {
        user: { select: { nome: true, email: true, status: true } },
        _count: { select: { faltas: true } },
      },
      orderBy: { user: { nome: "asc" } },
    });
    return alunos.map(a => ({
      id: a.id,
      nome: (a.user as any).nome,
      email: (a.user as any).email,
      numeroProcesso: a.numeroProcesso,
      status: (a.user as any).status,
      turmaId: a.turmaId,
      totalFaltas: a._count.faltas,
    }));
  },
  async findNotas(alunoId, disciplinaId) {
    const exames = await client.exame.findMany({
      where: { disciplinaId },
      include: {
        resultados: { where: { alunoId } },
      },
      orderBy: { data: "asc" },
    });
    return exames
      .filter(e => e.resultados.length > 0)
      .map(e => ({
        exameId: e.id,
        tipo: e.tipo,
        trimestre: e.trimestre,
        data: e.data,
        nota: e.resultados[0].nota,
      }));
  },
  async findFaltas(alunoId, disciplinaId) {
    return client.falta.findMany({
      where: { alunoId, disciplinaId },
      orderBy: { data: "desc" },
    });
  },
});
