import { z } from "zod";

export const createCursoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
});

export const updateCursoSchema = z.object({
  nome: z.string().min(1).optional(),
  sigla: z.string().min(1).optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: "Pelo menos um campo deve ser enviado",
});
