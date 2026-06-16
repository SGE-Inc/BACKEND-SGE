import { z } from "zod";

export const updatePermissaoDto = z.object({
  admin: z.boolean().optional(),
  professor: z.boolean().optional(),
  aluno: z.boolean().optional(),
  descricao: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
