import { PrismaClient } from "@generated/prisma/index.js";
import { IParametroAvaliacaoRepository, IParametroAvaliacaoBase } from "../domain/IParametroAvaliacao";
import { v4 as uuidv4 } from "uuid";

export const PrismaParametroAvaliacaoRepository = (client: PrismaClient): IParametroAvaliacaoRepository => ({
  async findAll() {
    const params = await client.parametroAvaliacao.findMany({ orderBy: { peso: "desc" } });
    return params.map(p => mapToParametro(p));
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.sigla) updateData.sigla = data.sigla;
    if (data.nome) updateData.nome = data.nome;
    if (data.peso !== undefined) updateData.peso = data.peso;
    if (data.ordem !== undefined) updateData.ordem = data.ordem;
    if (data.descricao !== undefined) updateData.descricao = data.descricao;
    const updated = await client.parametroAvaliacao.update({
      where: { id },
      data: updateData,
    });
    return mapToParametro(updated);
  },
  async upsertBySigla(data) {
    const existing = await client.parametroAvaliacao.findUnique({ where: { sigla: data.sigla } });
    if (existing) {
      const updated = await client.parametroAvaliacao.update({
        where: { sigla: data.sigla },
        data: {
          nome: data.nome,
          peso: data.peso,
          ordem: data.ordem,
          descricao: data.descricao,
        },
      });
      return mapToParametro(updated);
    }
    const created = await client.parametroAvaliacao.create({
      data: {
        id: uuidv4(),
        sigla: data.sigla,
        nome: data.nome,
        peso: data.peso,
        ordem: data.ordem,
        descricao: data.descricao,
      },
    });
    return mapToParametro(created);
  },
});

function mapToParametro(p: any): IParametroAvaliacaoBase {
  return {
    id: p.id,
    sigla: p.sigla,
    nome: p.nome,
    peso: p.peso,
    ordem: p.ordem,
    descricao: p.descricao,
  };
}
