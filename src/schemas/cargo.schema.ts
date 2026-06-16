import { z } from "zod";

export const createCargoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  descricao: z.string().optional(),
  tipo: z.enum(["academico", "administrativo", "suporte"]),
});

export const updateCargoSchema = z.object({
  nome: z.string().min(1).optional(),
  descricao: z.string().optional(),
  tipo: z.enum(["academico", "administrativo", "suporte"]).optional(),
});
