import { PrismaClient } from "@generated/prisma/index.js";
import { ITurmaRepository, ITurmaBase } from "../domain/ITurma";

export const PrismaTurmaRepository = (client: PrismaClient): ITurmaRepository => ({
  async findAll(curso) {
    const where: any = {};
    if (curso) {
      where.curso = { sigla: curso };
    }
    const turmas = await client.turma.findMany({
      where,
      include: { curso: true, _count: { select: { alunos: true } } },
      orderBy: [{ nome: "asc" }],
    });
    return turmas.map(t => ({
      id: t.id,
      nome: t.nome,
      cursoId: t.cursoId,
      classe: t.classe,
      vagas: t.vagas,
      turno: t.turno,
      anoLectivo: t.anoLectivo,
      cursoNome: t.curso.nome,
      cursoSigla: t.curso.sigla,
      numEstudantes: t._count.alunos,
    }));
  },
  async findById(id) {
    const t = await client.turma.findUnique({
      where: { id },
      include: { curso: true, _count: { select: { alunos: true } } },
    });
    if (!t) return null;
    return {
      id: t.id,
      nome: t.nome,
      cursoId: t.cursoId,
      classe: t.classe,
      vagas: t.vagas,
      turno: t.turno,
      anoLectivo: t.anoLectivo,
      cursoNome: t.curso.nome,
      cursoSigla: t.curso.sigla,
      numEstudantes: t._count.alunos,
    };
  },
  async save(data) {
    const t = await client.turma.create({
      data: { id: data.id, nome: data.nome, cursoId: data.curso, classe: data.classe, vagas: data.vagas, turno: data.turno, anoLectivo: data.anoLectivo },
      include: { curso: true },
    });
    return { id: t.id, nome: t.nome, cursoId: t.cursoId, classe: t.classe, vagas: t.vagas, turno: t.turno, anoLectivo: t.anoLectivo, cursoNome: t.curso.nome, cursoSigla: t.curso.sigla };
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.nome) updateData.nome = data.nome;
    if (data.classe) updateData.classe = data.classe;
    if (data.vagas !== undefined) updateData.vagas = data.vagas;
    if (data.turno) updateData.turno = data.turno;
    if (data.curso) updateData.cursoId = data.curso;
    const t = await client.turma.update({ where: { id }, data: updateData, include: { curso: true } });
    return { id: t.id, nome: t.nome, cursoId: t.cursoId, classe: t.classe, vagas: t.vagas, turno: t.turno, anoLectivo: t.anoLectivo, cursoNome: t.curso.nome, cursoSigla: t.curso.sigla };
  },
  async delete(id) {
    await client.turma.delete({ where: { id } });
  },
  async findEstudantes(turmaId) {
    const alunos = await client.aluno.findMany({
      where: { turmaId },
      include: { user: true },
      orderBy: { user: { nome: "asc" } },
    });
    return alunos.map(a => ({
      id: a.id,
      userId: a.userId,
      nome: a.user.nome,
      numeroProcesso: a.numeroProcesso,
      status: a.user.status,
    }));
  },
});
