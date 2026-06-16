import { z } from "zod";

export const createAdminUtilizadorSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  username: z.string().min(1, "Username é obrigatório"),
  cargo: z.string().optional(),
  role: z.enum(["admin", "superadmin"]).default("admin"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const updateAdminUtilizadorSchema = z.object({
  nome: z.string().min(1).optional(),
  email: z.string().email().optional(),
  username: z.string().min(1).optional(),
  cargo: z.string().optional(),
  role: z.enum(["admin", "superadmin"]).optional(),
  ativo: z.boolean().optional(),
});

export const toggleAdminUtilizadorStatusSchema = z.object({
  ativo: z.boolean(),
});
