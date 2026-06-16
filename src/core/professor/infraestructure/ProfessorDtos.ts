import { z } from "zod";

export const createProfessorDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  cargo: z.string().min(1, "Cargo é obrigatório"),
  contacto: z.string().optional(),
});

export const updateProfessorDto = z.object({
  nome: z.string().optional(),
  email: z.string().email("Email inválido").optional(),
  cargo: z.string().optional(),
  contacto: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
