import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorDashboardRepository } from "../domain/IProfessorDashboard";

export const PrismaProfessorDashboardRepository = (client: PrismaClient): IProfessorDashboardRepository => ({
  async getStats(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) throw new Error("Professor não encontrado");

    const [totalDisciplinas, totalTurmas, totalMateriais, totalAvisos] = await Promise.all([
      client.professorDisciplina.count({ where: { professorId: professor.id } }),
      client.professorDisciplina.findMany({
        where: { professorId: professor.id },
        select: { turmaId: true },
        distinct: ["turmaId"],
      }),
      client.materialDidatico.count({ where: { professorId: professor.id } }),
      client.aviso.count({ where: { professorId: professor.id } }),
    ]);

    return {
      totalDisciplinas,
      totalTurmas: totalTurmas.length,
      totalMateriais,
      totalAvisos,
      totalEstudantes: 0,
    };
  },
  async getDisciplinas(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    const relacoes = await client.professorDisciplina.findMany({
      where: { professorId: professor.id },
      include: {
        disciplina: true,
        turma: { include: { curso: true } },
      },
    });
    return relacoes.map(r => ({
      id: r.disciplina.id,
      nome: r.disciplina.nome,
      sigla: r.disciplina.sigla,
      classe: r.disciplina.classe,
      cargaHoraria: r.disciplina.cargaHoraria,
      cor: r.disciplina.cor,
      turma: { id: r.turma.id, nome: r.turma.nome },
      curso: { id: r.turma.curso.id, nome: r.turma.curso.nome, sigla: r.turma.curso.sigla },
    }));
  },
  async getProximosEventos(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    const exames = await client.exame.findMany({
      where: {
        disciplina: {
          professores: { some: { professorId: professor.id } },
        },
        data: { gte: new Date() },
      },
      include: { disciplina: true, turma: true },
      orderBy: { data: "asc" },
      take: 5,
    });
    return exames.map(e => ({
      id: e.id,
      tipo: "exame",
      titulo: `${e.disciplina.nome} - ${e.tipo}`,
      turma: e.turma.nome,
      data: e.data,
      hora: e.hora,
      sala: e.sala,
    }));
  },
  async getHorarioSemanal(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    const aulas = await client.horarioAula.findMany({
      where: { professorId: professor.id },
      include: { disciplina: true, turma: { include: { curso: true } } },
      orderBy: [{ dia: "asc" }, { horaInicio: "asc" }],
    });
    return aulas.map(a => ({
      id: a.id,
      dia: a.dia,
      horaInicio: a.horaInicio,
      horaFim: a.horaFim,
      sala: a.sala,
      disciplina: { id: a.disciplina.id, nome: a.disciplina.nome, sigla: a.disciplina.sigla, cor: a.disciplina.cor },
      turma: { id: a.turma.id, nome: a.turma.nome },
      curso: { id: a.turma.curso.id, nome: a.turma.curso.nome },
    }));
  },
  async getTurmas(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    const relacoes = await client.professorDisciplina.findMany({
      where: { professorId: professor.id },
      include: {
        turma: { include: { curso: true, _count: { select: { alunos: true } } } },
      },
      distinct: ["turmaId"],
    });
    return relacoes.map(r => ({
      id: r.turma.id,
      nome: r.turma.nome,
      classe: r.turma.classe,
      turno: r.turma.turno,
      vagas: r.turma.vagas,
      totalEstudantes: r.turma._count.alunos,
      curso: { id: r.turma.curso.id, nome: r.turma.curso.nome, sigla: r.turma.curso.sigla },
    }));
  },
});
