import { z } from "zod";

export const createTurmaDto = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  curso: z.string().uuid("Curso inválido"),
  classe: z.string().min(1, "Classe é obrigatória"),
  vagas: z.number().int().positive("Vagas deve ser um número positivo"),
  turno: z.string().min(1, "Turno é obrigatório"),
  anoLectivo: z.string().min(1, "Ano lectivo é obrigatório"),
});

export const updateTurmaDto = z.object({
  nome: z.string().optional(),
  curso: z.string().uuid("Curso inválido").optional(),
  classe: z.string().optional(),
  vagas: z.number().int().positive("Vagas deve ser um número positivo").optional(),
  turno: z.string().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });
