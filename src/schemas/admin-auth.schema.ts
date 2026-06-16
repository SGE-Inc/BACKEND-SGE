import { z } from "zod";

export const adminRegisterSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const adminLoginSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export const adminResetSenhaSchema = z.object({
  senhaActual: z.string().min(1, "Senha actual é obrigatória"),
  novaSenha: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres"),
});
