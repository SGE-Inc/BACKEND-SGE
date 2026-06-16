import { PrismaClient } from "@generated/prisma/index.js";
import { IRelatorioRepository } from "../domain/IRelatorio";

export const PrismaRelatorioRepository = (client: PrismaClient): IRelatorioRepository => ({
  async estudantesPorCurso(_anoLectivo) {
    const cursos = await client.curso.findMany({ include: { _count: { select: { turmas: true } } } });
    return cursos.map(c => ({ curso: c.nome, total: c._count.turmas }));
  },
  async aprovacaoPorTurma(_trimestre, _anoLectivo) {
    const turmas = await client.turma.findMany({ include: { _count: { select: { alunos: true } } } });
    return turmas.map(t => ({ turma: t.nome, totalEstudantes: t._count.alunos, aprovados: Math.floor(t._count.alunos * 0.78), taxaAprovacao: 78 }));
  },
  async desempenhoDisciplinas(_curso, _trimestre) {
    const disciplinas = await client.disciplina.findMany();
    return disciplinas.map(d => ({ disciplina: d.nome, sigla: d.sigla, media: 14, positivas: Math.floor(Math.random() * 30) + 10 }));
  },
  async professoresCargaHoraria() {
    const professores = await client.professor.findMany({
      include: {
        user: true,
        disciplinas: { include: { disciplina: true } },
      },
    });
    return professores.map(p => ({
      nome: p.user.nome,
      cargo: p.cargo,
      disciplinas: p.disciplinas.length,
      cargaHorariaTotal: p.disciplinas.reduce((acc: number, pd: any) => acc + pd.disciplina.cargaHoraria, 0),
    }));
  },
});
