import { StatusCodes } from "http-status-codes";
import { TListParametrosAvaliacaoUseCase, TUpdateParametroAvaliacaoUseCase, TUpsertParametroAvaliacaoUseCase } from "../domain/IParametroAvaliacao";

export const ListParametrosAvaliacaoUseCase: TListParametrosAvaliacaoUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll();
    return ResponseProvider(StatusCodes.OK, "Parâmetros de avaliação", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateParametroAvaliacaoUseCase: TUpdateParametroAvaliacaoUseCase = (ResponseProvider, findAll, update) => async (req) => {
  try {
    const all = await findAll();
    const existing = all.find(p => p.id === req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Parâmetro não encontrado", null);
    let newPeso = req.body.peso;
    if (newPeso !== undefined) {
      const otherSum = all.filter(p => p.id !== req.params.id as string).reduce((acc, p) => acc + p.peso, 0);
      if (otherSum + newPeso > 100) {
        return ResponseProvider(StatusCodes.BAD_REQUEST, "A soma total dos pesos não pode exceder 100%", null);
      }
    }
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Parâmetro actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpsertParametroAvaliacaoUseCase: TUpsertParametroAvaliacaoUseCase = (ResponseProvider, upsertBySigla) => async (req) => {
  try {
    const result = await upsertBySigla(req.body);
    return ResponseProvider(StatusCodes.OK, "Parâmetro salvo com sucesso", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
