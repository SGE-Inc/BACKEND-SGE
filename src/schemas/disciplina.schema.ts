import { z } from "zod";

export const createDisciplinaSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
  curso: z.string().uuid("Curso inválido"),
  classe: z.string().min(1, "Classe é obrigatória"),
  cargaHoraria: z.number().int().positive("Carga horária deve ser um número positivo"),
  cor: z.string().optional(),
});

export const updateDisciplinaSchema = z.object({
  nome: z.string().min(1).optional(),
  sigla: z.string().min(1).optional(),
  classe: z.string().min(1).optional(),
  cargaHoraria: z.number().int().positive().optional(),
  cor: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: "Pelo menos um campo deve ser enviado",
});
