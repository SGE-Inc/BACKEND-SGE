import { PrismaClient } from "@generated/prisma/index.js";
import { ICursoRepository, ICursoBase } from "../domain/ICurso";

export const PrismaCursoRepository = (client: PrismaClient): ICursoRepository => ({
  async findAll() {
    return client.curso.findMany({ orderBy: { nome: "asc" } });
  },
  async findById(id) {
    return client.curso.findUnique({ where: { id } });
  },
  async findBySigla(sigla) {
    return client.curso.findFirst({ where: { sigla } });
  },
  async save(data) {
    return client.curso.create({ data: { id: data.id, nome: data.nome, sigla: data.sigla, descricao: data.descricao, ativo: data.ativo ?? true } });
  },
  async update(id, data) {
    return client.curso.update({ where: { id }, data });
  },
  async delete(id) {
    await client.curso.delete({ where: { id } });
  },
});
