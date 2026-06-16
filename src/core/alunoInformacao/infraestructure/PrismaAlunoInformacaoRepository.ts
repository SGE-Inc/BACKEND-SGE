import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoInformacaoRepository } from "../domain/IAlunoInformacao";

export const PrismaAlunoInformacaoRepository = (client: PrismaClient): IAlunoInformacaoRepository => ({
  async findAll() {
    return client.informacao.findMany({ orderBy: { dataPublicacao: "desc" } });
  },
  async findById(id) {
    return client.informacao.findUnique({ where: { id } });
  },
});
