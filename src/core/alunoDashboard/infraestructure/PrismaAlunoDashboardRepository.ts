import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoDashboardRepository } from "../domain/IAlunoDashboard";

export const PrismaAlunoDashboardRepository = (client: PrismaClient): IAlunoDashboardRepository => ({
  async getStats(alunoId) {
    const aluno = await client.aluno.findUnique({ where: { userId: alunoId } });
    if (!aluno) throw new Error("Aluno não encontrado");
    const [totalDisciplinas, totalMateriais, totalExames] = await Promise.all([
      client.professorDisciplina.count({ where: { turmaId: aluno.turmaId || "" } }),
      client.materialDidatico.count({
        where: { disciplina: { professores: { some: { turmaId: aluno.turmaId || "" } } } },
      }),
      client.exame.count({ where: { turmaId: aluno.turmaId || "" } }),
    ]);
    return {
      totalDisciplinas,
      totalMateriais,
      totalExames,
      turmaNome: aluno.turmaId || null,
    };
  },
  async getRanking(turmaId, alunoId) {
    const alunos = await client.aluno.findMany({
      where: { turmaId },
      include: {
        user: { select: { nome: true } },
        resultados: { select: { nota: true } },
      },
    });
    const ranked = alunos.map(a => {
      const media = a.resultados.length
        ? a.resultados.reduce((s, r) => s + r.nota, 0) / a.resultados.length
        : 0;
      return { nome: (a.user as any).nome, score: Math.round(media * 10) / 10 };
    });
    ranked.sort((a, b) => b.score - a.score);
    return ranked.map((r, i) => ({
      position: i + 1,
      name: r.nome,
      score: r.score,
      isCurrentUser: false,
    }));
  },
  async getMelhoresDisciplinas(alunoId) {
    const aluno = await client.aluno.findUnique({ where: { userId: alunoId } });
    if (!aluno) return [];
    const disciplinas = await client.professorDisciplina.findMany({
      where: { turmaId: aluno.turmaId || "" },
      include: { disciplina: true },
    });
    const result = await Promise.all(
      disciplinas.map(async pd => {
        const exames = await client.exame.findMany({
          where: { disciplinaId: pd.disciplinaId, turmaId: aluno.turmaId || "" },
          include: { resultados: { where: { alunoId: aluno.id } } },
        });
        const notas = exames.flatMap(e => e.resultados.map(r => r.nota));
        const media = notas.length ? notas.reduce((s, n) => s + n, 0) / notas.length : 0;
        return { disciplina: pd.disciplina.nome, valor: Math.round(media * 10) / 10 };
      })
    );
    result.sort((a, b) => b.valor - a.valor);
    return result.slice(0, 3);
  },
  async getDistribuicaoNotas(alunoId) {
    const aluno = await client.aluno.findUnique({ where: { userId: alunoId } });
    if (!aluno) return { positivas: 0, negativas: 0 };
    const resultados = await client.resultado.findMany({ where: { alunoId: aluno.id } });
    const positivas = resultados.filter(r => r.nota >= 10).length;
    const negativas = resultados.filter(r => r.nota < 10).length;
    return { positivas, negativas };
  },
});
