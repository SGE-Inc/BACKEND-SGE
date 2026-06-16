import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class TrimestreAdminService {
  async list(anoLectivo?: string) {
    const where: Record<string, unknown> = {};
    if (anoLectivo) where.anoLectivo = anoLectivo;
    const trimestres = await prisma.trimestre.findMany({ where: where as any, orderBy: { dataInicio: "asc" } });
    return trimestres.map((t) => ({
      id: t.id,
      nome: t.nome,
      anoLectivo: t.anoLectivo,
      dataInicio: t.dataInicio.toISOString().split("T")[0],
      dataFim: t.dataFim.toISOString().split("T")[0],
    }));
  }

  async define(anoLectivo: string, trimestres: { nome: string; dataInicio: string; dataFim: string }[]) {
    await prisma.trimestre.deleteMany({ where: { anoLectivo } });
    for (const t of trimestres) {
      await prisma.trimestre.create({
        data: {
          nome: t.nome,
          anoLectivo,
          dataInicio: new Date(t.dataInicio),
          dataFim: new Date(t.dataFim),
        },
      });
    }
    return { message: "Trimestres definidos com sucesso" };
  }
}
