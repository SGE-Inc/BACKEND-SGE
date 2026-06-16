import { z } from "zod";

export const createDisciplinaDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sigla: z.string().min(1, "Sigla é obrigatória"),
  cursoId: z.string().uuid("Curso inválido"),
  classe: z.string().min(1, "Classe é obrigatória"),
  cargaHoraria: z.number().int().positive("Carga horária deve ser um número positivo"),
  cor: z.string().optional(),
});

export const updateDisciplinaDto = z.object({
  nome: z.string().optional(),
  sigla: z.string().optional(),
  cursoId: z.string().uuid("Curso inválido").optional(),
  classe: z.string().optional(),
  cargaHoraria: z.number().int().positive("Carga horária deve ser um número positivo").optional(),
  cor: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
