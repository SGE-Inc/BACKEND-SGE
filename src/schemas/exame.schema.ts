import { z } from "zod";

export const createExameSchema = z.object({
  disciplinaId: z.string().min(1, "Disciplina é obrigatória"),
  turmaId: z.string().min(1, "Turma é obrigatória"),
  data: z.string().min(1, "Data é obrigatória"),
  hora: z.string().min(1, "Hora é obrigatória"),
  sala: z.string().min(1, "Sala é obrigatória"),
  tipo: z.string().min(1, "Tipo é obrigatório"),
  trimestre: z.string().min(1, "Trimestre é obrigatório"),
  curso: z.string().min(1, "Curso é obrigatório"),
  observacoes: z.string().optional(),
});

export const updateExameSchema = z.object({
  disciplinaId: z.string().min(1).optional(),
  turmaId: z.string().min(1).optional(),
  data: z.string().optional(),
  hora: z.string().optional(),
  sala: z.string().optional(),
  tipo: z.string().optional(),
  trimestre: z.string().optional(),
  curso: z.string().optional(),
  observacoes: z.string().optional(),
});

export const changeExameEstadoSchema = z.object({
  estado: z.enum(["AGENDADO", "REALIZADO", "CANCELADO"]),
});

export const lancarResultadosSchema = z.object({
  resultados: z.array(z.object({
    alunoId: z.string().min(1),
    nota: z.number().min(0).max(20),
  })).min(1, "Pelo menos um resultado é obrigatório"),
});

export const createEpocaExameSchema = z.object({
  label: z.string().min(1, "Label é obrigatória"),
  trimestre: z.string().min(1, "Trimestre é obrigatório"),
  dataInicio: z.string().min(1, "Data de início é obrigatória"),
  dataFim: z.string().min(1, "Data de fim é obrigatória"),
  tipo: z.string().min(1, "Tipo é obrigatório"),
});
