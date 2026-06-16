import { z } from "zod";

export const createEstudanteSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  tipoIdentificacao: z.enum(["BI", "PASSAPORTE"]),
  numeroIdentificacao: z.string().min(1, "Nº de identificação é obrigatório"),
  numeroProcesso: z.string().min(1, "Nº de processo é obrigatório"),
  turmaId: z.string().optional(),
  curso: z.string().min(1, "Curso é obrigatório"),
  classe: z.string().optional(),
  genero: z.string().optional(),
  turno: z.string().optional(),
  estadoCivil: z.string().optional(),
  nomePai: z.string().optional(),
  nomeMae: z.string().optional(),
  naturalidade: z.string().optional(),
  provincia: z.string().optional(),
  municipio: z.string().optional(),
  comuna: z.string().optional(),
  encarregadoNome: z.string().optional(),
  encarregadoParentesco: z.string().optional(),
  encarregadoGenero: z.string().optional(),
  encarregadoDataNascimento: z.string().optional(),
  encarregadoTelefone: z.string().optional(),
  encarregadoEmail: z.string().email().optional().or(z.literal("")),
  telefone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});

export const updateEstudanteSchema = z.object({
  nome: z.string().min(1).optional(),
  dataNascimento: z.string().optional(),
  tipoIdentificacao: z.enum(["BI", "PASSAPORTE"]).optional(),
  numeroIdentificacao: z.string().min(1).optional(),
  turmaId: z.string().optional(),
  curso: z.string().min(1).optional(),
  classe: z.string().optional(),
  genero: z.string().optional(),
  turno: z.string().optional(),
  estadoCivil: z.string().optional(),
  nomePai: z.string().optional(),
  nomeMae: z.string().optional(),
  naturalidade: z.string().optional(),
  provincia: z.string().optional(),
  municipio: z.string().optional(),
  comuna: z.string().optional(),
  encarregadoNome: z.string().optional(),
  encarregadoParentesco: z.string().optional(),
  encarregadoGenero: z.string().optional(),
  encarregadoDataNascimento: z.string().optional(),
  encarregadoTelefone: z.string().optional(),
  encarregadoEmail: z.string().email().optional().or(z.literal("")),
  telefone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});

export const transferirEstudanteSchema = z.object({
  novaTurmaId: z.string().min(1, "Nova turma é obrigatória"),
  motivo: z.string().optional(),
});

export const changeEstudanteStatusSchema = z.object({
  status: z.enum(["ATIVO", "INATIVO", "TRANSFERIDO"]),
  motivo: z.string().optional(),
});
