import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoHorarioRepository } from "../domain/IAlunoHorario";

export const PrismaAlunoHorarioRepository = (client: PrismaClient): IAlunoHorarioRepository => ({
  async findByTurmaId(turmaId) {
    const aulas = await client.horarioAula.findMany({
      where: { turmaId },
      include: {
        disciplina: { select: { id: true, nome: true, sigla: true, cor: true } },
        professor: { include: { user: { select: { nome: true } } } },
      },
      orderBy: [{ dia: "asc" }, { horaInicio: "asc" }],
    }) as any[];
    return aulas.map(a => ({
      id: a.id,
      dia: a.dia,
      horaInicio: a.horaInicio,
      horaFim: a.horaFim,
      sala: a.sala,
      disciplina: { id: a.disciplina.id, nome: a.disciplina.nome, sigla: a.disciplina.sigla, cor: a.disciplina.cor || "#6366f1" },
      professor: a.professor.user.nome,
    }));
  },
});
