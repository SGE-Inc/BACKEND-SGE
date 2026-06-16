import { z } from "zod";

export const updateParametrosAvaliacaoSchema = z.object({
  parametros: z.array(z.object({
    id: z.string().optional(),
    nome: z.string().min(1),
    sigla: z.string().min(1),
    descricao: z.string().optional(),
    peso: z.number().int().min(0).max(100),
    ordem: z.number().int().min(1),
  })).refine(
    (params) => params.reduce((sum, p) => sum + p.peso, 0) === 100,
    { message: "A soma dos pesos deve ser exactamente 100%" },
  ),
});
