import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoProvaRepository } from "../domain/IAlunoProva";

export const PrismaAlunoProvaRepository = (client: PrismaClient): IAlunoProvaRepository => ({
  async getCalendario(alunoId, trimestre, calendario) {
    const aluno = await client.aluno.findUnique({ where: { userId: alunoId } });
    if (!aluno) return [];
    const where: any = { turmaId: aluno.turmaId || "" };
    if (trimestre) where.trimestre = trimestre;
    if (calendario) where.tipo = calendario;
    const exames = await client.exame.findMany({
      where,
      include: { disciplina: { select: { nome: true, sigla: true } } },
      orderBy: [{ data: "asc" }, { hora: "asc" }],
    });
    return exames.map(e => ({
      id: e.id,
      data: e.data,
      hora: e.hora,
      sala: e.sala,
      tipo: e.tipo,
      trimestre: e.trimestre,
      disciplina: e.disciplina.nome,
      sigla: e.disciplina.sigla,
      estado: e.estado,
    }));
  },
  async getEpocas() {
    return client.epocaExame.findMany({ orderBy: { dataInicio: "asc" } });
  },
});
