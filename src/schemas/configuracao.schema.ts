import { z } from "zod";

export const updateInstituicaoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
  endereco: z.string().optional(),
  telefone: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  website: z.string().optional(),
  diretor: z.string().optional(),
});

export const createAnoLectivoSchema = z.object({
  ano: z.string().min(1, "Ano é obrigatório"),
  dataInicio: z.string().min(1, "Data de início é obrigatória"),
  dataFim: z.string().min(1, "Data de fim é obrigatória"),
});

export const updateAnoLectivoSchema = z.object({
  ano: z.string().min(1).optional(),
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: "Pelo menos um campo deve ser enviado",
});
