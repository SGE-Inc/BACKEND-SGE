import { z } from "zod";

const passwordSchema = z.string().min(8, "Password deve ter no mínimo 8 caracteres").optional();

export const createAdminUtilizadorDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().optional(),
  password: passwordSchema,
  role: z.enum(["ADMIN", "SUPERADMIN", "PROFESSOR", "ALUNO"]),
  status: z.enum(["ATIVO", "INATIVO"]).optional(),
});

export const updateAdminUtilizadorDto = z.object({
  nome: z.string().optional(),
  email: z.string().email("Email inválido").optional(),
  telefone: z.string().optional(),
  password: passwordSchema,
  role: z.enum(["ADMIN", "SUPERADMIN", "PROFESSOR", "ALUNO"]).optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
