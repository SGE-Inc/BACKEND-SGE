import { z } from "zod";

export const defineTrimestresSchema = z.object({
  anoLectivo: z.string().min(1, "Ano lectivo é obrigatório"),
  trimestres: z.array(z.object({
    nome: z.string().min(1),
    dataInicio: z.string().min(1),
    dataFim: z.string().min(1),
  })).length(3, "Devem ser definidos exactamente 3 trimestres"),
});
