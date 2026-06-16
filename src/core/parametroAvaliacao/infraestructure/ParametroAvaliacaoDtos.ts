import { z } from "zod";

export const updateParametroAvaliacaoDto = z.object({
  sigla: z.string().optional(),
  nome: z.string().optional(),
  peso: z.number().min(0).max(100, "Peso deve estar entre 0 e 100").optional(),
  tipo: z.string().optional(),
  descricao: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });

export const upsertParametroAvaliacaoDto = z.object({
  sigla: z.string().min(1, "Sigla é obrigatória"),
  nome: z.string().min(1, "Nome é obrigatório"),
  peso: z.number().min(0).max(100, "Peso deve estar entre 0 e 100"),
  tipo: z.string().min(1, "Tipo é obrigatório"),
  descricao: z.string().optional(),
});
