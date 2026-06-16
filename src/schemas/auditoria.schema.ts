import { z } from "zod";

export const auditoriaQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  tipo: z.string().optional(),
  role: z.string().optional(),
  utilizador: z.string().optional(),
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
});
