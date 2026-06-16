import { z } from "zod";

export const createExameDto = z.object({
  disciplinaId: z.string().uuid("Disciplina inválida"),
  turmaId: z.string().uuid("Turma inválida"),
  data: z.string().min(1, "Data é obrigatória"),
  hora: z.string().min(1, "Hora é obrigatória"),
  sala: z.string().min(1, "Sala é obrigatória"),
  tipo: z.enum(["NORMAL", "RECURSO", "EXAME_FINAL", "TESTE"]),
  trimestre: z.number().int().min(1).max(3),
  curso: z.string().optional(),
  observacoes: z.string().optional(),
});

export const updateExameDto = z.object({
  disciplinaId: z.string().uuid("Disciplina inválida").optional(),
  turmaId: z.string().uuid("Turma inválida").optional(),
  data: z.string().optional(),
  hora: z.string().optional(),
  sala: z.string().optional(),
  tipo: z.enum(["NORMAL", "RECURSO", "EXAME_FINAL", "TESTE"]).optional(),
  trimestre: z.number().int().min(1).max(3).optional(),
  curso: z.string().optional(),
  observacoes: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });

export const changeExameEstadoDto = z.object({
  estado: z.enum(["AGENDADO", "REALIZADO", "CANCELADO", "PENDENTE"]),
});

export const lancarResultadosDto = z.object({
  resultados: z.array(z.object({
    alunoId: z.string().uuid("Aluno inválido"),
    nota: z.number().min(0).max(20, "Nota deve estar entre 0 e 20"),
    observacoes: z.string().optional(),
  })).min(1, "Pelo menos um resultado deve ser enviado"),
});

export const createEpocaExameDto = z.object({
  label: z.string().min(1, "Label é obrigatório"),
  trimestre: z.number().int().min(1).max(3),
  dataInicio: z.string().min(1, "Data de início é obrigatória"),
  dataFim: z.string().min(1, "Data de fim é obrigatória"),
  tipo: z.enum(["NORMAL", "RECURSO", "EXAME_FINAL"]),
});
