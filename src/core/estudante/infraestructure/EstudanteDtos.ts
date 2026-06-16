import { z } from "zod";

export const createEstudanteDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  tipoIdentificacao: z.enum(["BI", "PASSAPORTE"]),
  numeroIdentificacao: z.string().min(1, "Número de identificação é obrigatório"),
  numeroProcesso: z.string().min(1, "Número de processo é obrigatório"),
  turmaId: z.string().uuid("Turma inválida").optional(),
  curso: z.string().min(1, "Curso é obrigatório"),
  classe: z.string().optional(),
  genero: z.string().optional(),
  turno: z.string().optional(),
  telefone: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  encarregadoNome: z.string().optional(),
  encarregadoParentesco: z.string().optional(),
  encarregadoTelefone: z.string().optional(),
  nomePai: z.string().optional(),
  nomeMae: z.string().optional(),
});

export const updateEstudanteDto = z.object({
  nome: z.string().optional(),
  dataNascimento: z.string().optional(),
  tipoIdentificacao: z.enum(["BI", "PASSAPORTE"]).optional(),
  numeroIdentificacao: z.string().optional(),
  numeroProcesso: z.string().optional(),
  turmaId: z.string().uuid("Turma inválida").optional(),
  curso: z.string().optional(),
  classe: z.string().optional(),
  genero: z.string().optional(),
  turno: z.string().optional(),
  telefone: z.string().optional(),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  encarregadoNome: z.string().optional(),
  encarregadoParentesco: z.string().optional(),
  encarregadoTelefone: z.string().optional(),
  nomePai: z.string().optional(),
  nomeMae: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });

export const changeEstudanteStatusDto = z.object({
  status: z.enum(["ATIVO", "INATIVO", "TRANSFERIDO"]),
  motivo: z.string().optional(),
});

export const transferirEstudanteDto = z.object({
  novaTurmaId: z.string().uuid("Turma inválida"),
  motivo: z.string().optional(),
});
