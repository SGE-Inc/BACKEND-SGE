import { z } from "zod";

export const createMaterialDto = z.object({
  titulo: z.string().min(1, "Título é obrigatório"),
  descricao: z.string().optional(),
  tipo: z.string().default("pdf"),
  url: z.string().optional(),
  ficheiro: z.string().optional(),
  tamanho: z.number().optional(),
  visivel: z.boolean().default(true),
  disciplinaId: z.string().min(1, "Disciplina é obrigatória"),
});

export const updateMaterialDto = z.object({
  titulo: z.string().optional(),
  descricao: z.string().optional(),
  tipo: z.string().optional(),
  url: z.string().optional(),
  ficheiro: z.string().optional(),
  tamanho: z.number().optional(),
  visivel: z.boolean().optional(),
}).refine(data => Object.keys(data).length > 0, { message: "Pelo menos um campo deve ser enviado" });

export const createAvisoDto = z.object({
  texto: z.string().min(1, "Texto é obrigatório"),
  disciplinaId: z.string().min(1, "Disciplina é obrigatória"),
  autor: z.string().min(1, "Autor é obrigatório"),
});
