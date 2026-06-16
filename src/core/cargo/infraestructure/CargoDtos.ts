import { z } from "zod";

export const createCargoDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  descricao: z.string().optional(),
  tipo: z.enum(["ADMIN", "PROFESSOR", "ALUNO", "GERAL"]),
});

export const updateCargoDto = z.object({
  nome: z.string().optional(),
  descricao: z.string().optional(),
  tipo: z.enum(["ADMIN", "PROFESSOR", "ALUNO", "GERAL"]).optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
