import { z } from "zod";

export const registerDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  role: z.enum(["ADMIN", "PROFESSOR", "ALUNO"], { message: "Role deve ser ADMIN, PROFESSOR ou ALUNO" }),
  telefone: z.string().optional(),
});

export const loginDto = z.object({
  identificador: z.string().min(1, "Identificador é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export const resetSenhaDto = z.object({
  senhaActual: z.string().min(1, "Senha actual é obrigatória"),
  novaSenha: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres"),
});
