import { StatusCodes } from "http-status-codes";
import { TGetAlunoCalendarioProvasUseCase, TGetAlunoEpocasProvaUseCase } from "../domain/IAlunoProva";

export const GetAlunoCalendarioProvasUseCase: TGetAlunoCalendarioProvasUseCase = (ResponseProvider, getCalendario) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const trimestre = req.query.trimestre as string | undefined;
    const calendario = req.query.calendario as string | undefined;
    const provas = await getCalendario(alunoId, trimestre, calendario);
    return ResponseProvider(StatusCodes.OK, "Calendário de provas", provas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAlunoEpocasProvaUseCase: TGetAlunoEpocasProvaUseCase = (ResponseProvider, getEpocas) => async (_req) => {
  try {
    const epocas = await getEpocas();
    return ResponseProvider(StatusCodes.OK, "Épocas de prova", epocas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
