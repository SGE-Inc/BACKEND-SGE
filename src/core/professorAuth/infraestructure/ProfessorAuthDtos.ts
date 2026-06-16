import { z } from "zod";

export const professorLoginDto = z.object({
  utilizador: z.string().min(1, "Utilizador é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export const professorResetSenhaDto = z.object({
  senhaActual: z.string().min(1, "Senha actual é obrigatória"),
  novaSenha: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres"),
});
