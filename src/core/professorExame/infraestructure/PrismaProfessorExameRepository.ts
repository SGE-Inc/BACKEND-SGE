import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorExameRepository } from "../domain/IProfessorExame";

export const PrismaProfessorExameRepository = (client: PrismaClient): IProfessorExameRepository => ({
  async findByProfessorId(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    return client.exame.findMany({
      where: {
        disciplina: {
          professores: { some: { professorId: professor.id } },
        },
      },
      include: {
        disciplina: { select: { id: true, nome: true, sigla: true } },
        turma: { select: { id: true, nome: true } },
        _count: { select: { resultados: true } },
      },
      orderBy: { data: "desc" },
    });
  },
  async findById(id) {
    return client.exame.findUnique({
      where: { id },
      include: {
        disciplina: { select: { id: true, nome: true, sigla: true } },
        turma: { select: { id: true, nome: true } },
      },
    });
  },
  async create(data) {
    return client.exame.create({
      data: {
        disciplinaId: data.disciplinaId,
        turmaId: data.turmaId,
        data: new Date(data.data),
        hora: data.hora,
        sala: data.sala,
        tipo: data.tipo,
        trimestre: data.trimestre,
        curso: data.curso,
        estado: "AGENDADO",
        observacoes: data.observacoes,
      },
      include: {
        disciplina: { select: { id: true, nome: true, sigla: true } },
        turma: { select: { id: true, nome: true } },
      },
    });
  },
  async update(id, data) {
    return client.exame.update({
      where: { id },
      data: {
        ...(data.data && { data: new Date(data.data) }),
        ...(data.hora && { hora: data.hora }),
        ...(data.sala && { sala: data.sala }),
        ...(data.tipo && { tipo: data.tipo }),
        ...(data.estado && { estado: data.estado }),
        ...(data.observacoes !== undefined && { observacoes: data.observacoes }),
      },
      include: {
        disciplina: { select: { id: true, nome: true, sigla: true } },
        turma: { select: { id: true, nome: true } },
      },
    });
  },
  async delete(id) {
    await client.exame.delete({ where: { id } });
  },
  async findResultados(exameId) {
    return client.resultado.findMany({
      where: { exameId },
      include: {
        aluno: {
          include: { user: { select: { nome: true, email: true } } },
        },
      },
      orderBy: { aluno: { user: { nome: "asc" } } },
    });
  },
});
