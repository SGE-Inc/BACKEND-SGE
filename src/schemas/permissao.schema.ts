import { z } from "zod";

export const updatePermissoesSchema = z.object({
  permissoes: z.array(z.object({
    modulo: z.string().min(1),
    admin: z.boolean(),
    professor: z.boolean(),
    aluno: z.boolean(),
  })),
});
