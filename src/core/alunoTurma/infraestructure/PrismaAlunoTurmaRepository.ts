import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoTurmaRepository } from "../domain/IAlunoTurma";

export const PrismaAlunoTurmaRepository = (client: PrismaClient): IAlunoTurmaRepository => ({
  async findDisciplinas(turmaId) {
    const relacoes = await client.professorDisciplina.findMany({
      where: { turmaId },
      include: {
        disciplina: true,
        professor: { include: { user: { select: { nome: true } } } },
      },
    }) as any[];
    return relacoes.map(r => ({
      id: r.disciplina.id,
      nome: r.disciplina.nome,
      sigla: r.disciplina.sigla,
      cor: r.disciplina.cor || "#6366f1",
      professorNome: r.professor.user.nome,
      totalMateriais: 0,
    }));
  },
  async findMateriais(disciplinaId) {
    const materiais = await client.materialDidatico.findMany({
      where: { disciplinaId, visivel: true },
      include: {
        professor: { include: { user: { select: { nome: true } } } },
      },
      orderBy: { createdAt: "desc" },
    }) as any[];
    return materiais.map(m => ({
      id: m.id,
      titulo: m.titulo,
      descricao: m.descricao,
      tipo: m.tipo,
      ficheiro: m.ficheiro,
      tamanho: m.tamanho,
      visivel: m.visivel,
      professor: m.professor?.user?.nome || null,
      data: m.createdAt,
      nota: null,
    }));
  },
  async submitMaterial(data) {
    return client.materialDidatico.create({ data });
  },
});
