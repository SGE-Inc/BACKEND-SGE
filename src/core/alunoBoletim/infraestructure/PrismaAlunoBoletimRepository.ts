import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoBoletimRepository } from "../domain/IAlunoBoletim";

export const PrismaAlunoBoletimRepository = (client: PrismaClient): IAlunoBoletimRepository => ({
  async getBoletins(alunoId) {
    const aluno = await client.aluno.findUnique({ where: { userId: alunoId } });
    if (!aluno) throw new Error("Aluno não encontrado");
    const disciplinas = await client.professorDisciplina.findMany({
      where: { turmaId: aluno.turmaId || "" },
      include: { disciplina: true },
    });
    const trimestres = ["I TRIMESTRE", "II TRIMESTRE", "III TRIMESTRE"];
    const boletins = await Promise.all(
      trimestres.map(async trimestre => {
        const rows = await Promise.all(
          disciplinas.map(async (pd, idx) => {
            const exames = await client.exame.findMany({
              where: { disciplinaId: pd.disciplinaId, turmaId: aluno.turmaId || "", trimestre },
              include: { resultados: { where: { alunoId: aluno.id } } },
            });
            const pp = exames.find(e => e.tipo === "1ª PROVA")?.resultados[0]?.nota || null;
            const pt = exames.find(e => e.tipo === "2ª PROVA")?.resultados[0]?.nota || null;
            const mt = pp && pt ? Math.round(((pp + pt) / 2) * 10) / 10 : pp || pt || null;
            const faltas = await client.falta.count({
              where: { alunoId: aluno.id, disciplinaId: pd.disciplinaId },
            });
            const faltasJ = await client.falta.count({
              where: { alunoId: aluno.id, disciplinaId: pd.disciplinaId, justificada: true },
            });
            return {
              n: idx + 1,
              nome: pd.disciplina.nome,
              faltasJ,
              faltasI: faltas - faltasJ,
              pp,
              pt,
              mt,
            };
          })
        );
        const medias = rows.filter(r => r.mt !== null).map(r => r.mt as number);
        const media = medias.length ? Math.round((medias.reduce((s, m) => s + m, 0) / medias.length) * 10) / 10 : 0;
        return { trimestre, disciplinas: rows, media };
      })
    );
    return { boletins };
  },
  async getBoletimByTrimestre(alunoId, trimestre) {
    const boletins = await this.getBoletins(alunoId);
    const found = (boletins as any).boletins.find((b: any) => b.trimestre === trimestre);
    return found || null;
  },
});
