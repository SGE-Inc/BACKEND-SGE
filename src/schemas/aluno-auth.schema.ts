import { z } from "zod";

export const registerAlunoSchema = z.object({
  nome: z.string().min(1, "Nome completo é obrigatório"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  tipoIdentificacao: z.enum(["BI", "PASSAPORTE"], {
    errorMap: () => ({ message: "Tipo de identificação deve ser BI ou PASSAPORTE" }),
  }),
  numeroIdentificacao: z.string().min(1, "Nº de identificação é obrigatório"),
  numeroProcesso: z.string().min(1, "Nº de processo é obrigatório"),
  ultimaClasseFrequentada: z.string().min(1, "Última classe frequentada é obrigatória"),
  classe: z.string().min(1, "Classe é obrigatória"),
  curso: z.string().min(1, "Curso é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
});

export const alunoLoginSchema = z.object({
  utilizador: z.string().min(1, "Utilizador é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export const resetSenhaSchema = z.object({
  senhaActual: z.string().min(1, "Senha actual é obrigatória"),
  novaSenha: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres"),
});
