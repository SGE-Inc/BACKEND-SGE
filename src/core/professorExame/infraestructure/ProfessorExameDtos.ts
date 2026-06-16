import { z } from "zod";

export const createProfessorExameDto = z.object({
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

export const updateProfessorExameDto = z.object({
  data: z.string().optional(),
  hora: z.string().optional(),
  sala: z.string().optional(),
  tipo: z.string().optional(),
  estado: z.enum(["AGENDADO", "REALIZADO", "CANCELADO"]).optional(),
  observacoes: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
