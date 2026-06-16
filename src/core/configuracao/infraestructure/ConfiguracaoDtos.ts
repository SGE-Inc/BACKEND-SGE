import { z } from "zod";

export const updateInstituicaoDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
  endereco: z.string().optional().or(z.literal("")),
  telefone: z.string().optional().or(z.literal("")),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  website: z.string().optional().or(z.literal("")),
  diretor: z.string().optional().or(z.literal("")),
});

export const createAnoLectivoDto = z.object({
  ano: z.string().min(1, "Ano é obrigatório"),
  dataInicio: z.string().min(1, "Data de início é obrigatória"),
  dataFim: z.string().min(1, "Data de fim é obrigatória"),
});

export const updateAnoLectivoDto = z.object({
  ano: z.string().optional(),
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
