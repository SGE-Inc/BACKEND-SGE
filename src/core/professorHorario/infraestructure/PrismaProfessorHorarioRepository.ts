import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorHorarioRepository } from "../domain/IProfessorHorario";

export const PrismaProfessorHorarioRepository = (client: PrismaClient): IProfessorHorarioRepository => ({
  async findByProfessorId(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    const aulas = await client.horarioAula.findMany({
      where: { professorId: professor.id },
      include: {
        disciplina: { select: { id: true, nome: true, sigla: true, cor: true } },
        turma: { select: { id: true, nome: true, classe: true } },
      },
      orderBy: [{ dia: "asc" }, { horaInicio: "asc" }],
    });
    return aulas.map(a => ({
      id: a.id,
      dia: a.dia,
      horaInicio: a.horaInicio,
      horaFim: a.horaFim,
      sala: a.sala,
      disciplina: { id: a.disciplina.id, nome: a.disciplina.nome, sigla: a.disciplina.sigla, cor: a.disciplina.cor || "#6366f1" },
      turma: { id: a.turma.id, nome: a.turma.nome, classe: a.turma.classe },
    }));
  },
});
