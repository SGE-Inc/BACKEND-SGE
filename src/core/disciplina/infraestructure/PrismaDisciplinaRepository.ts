import { PrismaClient } from "@generated/prisma/index.js";
import { IDisciplinaRepository, IDisciplinaBase } from "../domain/IDisciplina";

export const PrismaDisciplinaRepository = (client: PrismaClient): IDisciplinaRepository => ({
  async findAll(curso, classe) {
    const where: any = {};
    if (curso) where.cursoId = curso;
    if (classe) where.classe = classe;
    const disciplinas = await client.disciplina.findMany({
      where,
      include: { curso: true },
      orderBy: [{ nome: "asc" }],
    });
    return disciplinas.map(d => ({
      id: d.id,
      nome: d.nome,
      sigla: d.sigla,
      cursoId: d.cursoId,
      classe: d.classe,
      cargaHoraria: d.cargaHoraria,
      cor: d.cor,
      cursoNome: d.curso.nome,
    }));
  },
  async findById(id) {
    const d = await client.disciplina.findUnique({
      where: { id },
      include: { curso: true },
    });
    if (!d) return null;
    return {
      id: d.id,
      nome: d.nome,
      sigla: d.sigla,
      cursoId: d.cursoId,
      classe: d.classe,
      cargaHoraria: d.cargaHoraria,
      cor: d.cor,
      cursoNome: d.curso.nome,
    };
  },
  async save(data) {
    const d = await client.disciplina.create({
      data: {
        id: data.id,
        nome: data.nome,
        sigla: data.sigla,
        cursoId: data.cursoId,
        classe: data.classe,
        cargaHoraria: data.cargaHoraria,
        cor: data.cor,
      },
      include: { curso: true },
    });
    return {
      id: d.id,
      nome: d.nome,
      sigla: d.sigla,
      cursoId: d.cursoId,
      classe: d.classe,
      cargaHoraria: d.cargaHoraria,
      cor: d.cor,
      cursoNome: d.curso.nome,
    };
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.nome) updateData.nome = data.nome;
    if (data.sigla) updateData.sigla = data.sigla;
    if (data.cursoId) updateData.cursoId = data.cursoId;
    if (data.classe) updateData.classe = data.classe;
    if (data.cargaHoraria !== undefined) updateData.cargaHoraria = data.cargaHoraria;
    if (data.cor !== undefined) updateData.cor = data.cor;
    const d = await client.disciplina.update({
      where: { id },
      data: updateData,
      include: { curso: true },
    });
    return {
      id: d.id,
      nome: d.nome,
      sigla: d.sigla,
      cursoId: d.cursoId,
      classe: d.classe,
      cargaHoraria: d.cargaHoraria,
      cor: d.cor,
      cursoNome: d.curso.nome,
    };
  },
  async delete(id) {
    await client.disciplina.delete({ where: { id } });
  },
});
