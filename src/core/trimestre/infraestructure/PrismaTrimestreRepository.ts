import { PrismaClient } from "@generated/prisma/index.js";
import { ITrimestreRepository, ITrimestreBase } from "../domain/ITrimestre";
import { v4 as uuidv4 } from "uuid";

export const PrismaTrimestreRepository = (client: PrismaClient): ITrimestreRepository => ({
  async findAll(anoLectivo?: string) {
    const where: any = {};
    if (anoLectivo) where.anoLectivo = anoLectivo;
    const trimestres = await client.trimestre.findMany({
      where,
      orderBy: [{ anoLectivo: "desc" }, { nome: "asc" }],
    });
    return trimestres.map(t => mapToTrimestre(t));
  },
  async define(anoLectivo, trimestres) {
    await client.trimestre.deleteMany({ where: { anoLectivo } });
    const created = await Promise.all(
      trimestres.map((t: any) =>
        client.trimestre.create({
          data: {
            id: uuidv4(),
            anoLectivo,
            nome: t.nome,
            dataInicio: new Date(t.dataInicio),
            dataFim: new Date(t.dataFim),
          },
        })
      )
    );
    return created.map(t => mapToTrimestre(t));
  },
});

function mapToTrimestre(t: any): ITrimestreBase {
  return {
    id: t.id,
    anoLectivo: t.anoLectivo,
    nome: t.nome,
    dataInicio: t.dataInicio,
    dataFim: t.dataFim,
  };
}
