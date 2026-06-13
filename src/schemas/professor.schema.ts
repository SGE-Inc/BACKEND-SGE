import { z } from "zod";

export const createProfessorSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  cargo: z.string().min(1, "Cargo é obrigatório"),
  contacto: z.string().optional(),
});

export const updateProfessorSchema = z.object({
  nome: z.string().min(1).optional(),
  email: z.string().email().optional(),
  cargo: z.string().min(1).optional(),
  contacto: z.string().optional(),
});
