import { z } from "zod";

export const defineTrimestreDto = z.object({
  anoLectivo: z.string().min(1, "Ano lectivo é obrigatório"),
  trimestres: z.array(z.object({
    trimestre: z.number().int().min(1).max(3),
    dataInicio: z.string().min(1, "Data de início é obrigatória"),
    dataFim: z.string().min(1, "Data de fim é obrigatória"),
    label: z.string().min(1, "Label é obrigatório"),
  })).length(3, "Devem ser definidos exatamente 3 trimestres"),
});
