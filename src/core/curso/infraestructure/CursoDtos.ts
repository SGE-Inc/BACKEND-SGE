import { z } from "zod";

export const createCursoDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
  descricao: z.string().optional(),
});

export const updateCursoDto = z.object({
  nome: z.string().optional(),
  sigla: z.string().optional(),
  descricao: z.string().optional(),
  ativo: z.boolean().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
