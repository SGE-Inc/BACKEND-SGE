import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorDisciplinaRepository } from "../domain/IProfessorDisciplina";

export const PrismaProfessorDisciplinaRepository = (client: PrismaClient): IProfessorDisciplinaRepository => ({
  async findByProfessorId(professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    const relacoes = await client.professorDisciplina.findMany({
      where: { professorId: professor.id },
      include: {
        disciplina: true,
        turma: { include: { curso: true, _count: { select: { alunos: true } } } },
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
      totalAlunos: r.turma._count.alunos,
    }));
  },
  async findMateriaisByDisciplina(disciplinaId, professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    return client.materialDidatico.findMany({
      where: { disciplinaId, professorId: professor.id },
      orderBy: { createdAt: "desc" },
    });
  },
  async createMaterial(data) {
    return client.materialDidatico.create({ data });
  },
  async updateMaterial(id, data) {
    return client.materialDidatico.update({ where: { id }, data });
  },
  async deleteMaterial(id) {
    await client.materialDidatico.delete({ where: { id } });
  },
  async findAvisosByDisciplina(disciplinaId, professorId) {
    const professor = await client.professor.findUnique({ where: { userId: professorId } });
    if (!professor) return [];
    return client.aviso.findMany({
      where: { disciplinaId, professorId: professor.id },
      orderBy: { createdAt: "desc" },
    });
  },
  async createAviso(data) {
    return client.aviso.create({ data });
  },
  async deleteAviso(id) {
    await client.aviso.delete({ where: { id } });
  },
  async findAlunosByDisciplinaTurma(disciplinaId) {
    const relacoes = await client.professorDisciplina.findMany({
      where: { disciplinaId },
      select: { turmaId: true },
    });
    const turmaIds = [...new Set(relacoes.map(r => r.turmaId))];
    const alunos = await client.aluno.findMany({
      where: { turmaId: { in: turmaIds } },
      include: { user: { select: { nome: true, email: true } } },
      orderBy: { user: { nome: "asc" } },
    });
    return alunos.map(a => ({
      id: a.id,
      nome: (a.user as any).nome,
      email: (a.user as any).email,
      numeroProcesso: a.numeroProcesso,
      turmaId: a.turmaId,
    }));
  },
});
