import { z } from "zod";

export const registerAlunoDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  tipoIdentificacao: z.enum(["BI", "PASSAPORTE"]),
  numeroIdentificacao: z.string().min(1, "Número de identificação é obrigatório"),
  numeroProcesso: z.string().min(1, "Número de processo é obrigatório"),
  curso: z.string().min(1, "Curso é obrigatório"),
  classe: z.string().min(1, "Classe é obrigatória"),
  telefone: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  encarregadoNome: z.string().optional(),
  encarregadoParentesco: z.string().optional(),
  encarregadoTelefone: z.string().optional(),
});

export const alunoLoginDto = z.object({
  utilizador: z.string().min(1, "Utilizador é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export const alunoResetSenhaDto = z.object({
  senhaActual: z.string().min(1, "Senha actual é obrigatória"),
  novaSenha: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres"),
});
