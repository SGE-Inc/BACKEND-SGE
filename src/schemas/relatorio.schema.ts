import { z } from "zod";

export const relatorioQuerySchema = z.object({
  anoLectivo: z.string().optional(),
  trimestre: z.string().optional(),
  curso: z.string().optional(),
  formato: z.enum(["pdf", "csv"]).default("csv"),
});
