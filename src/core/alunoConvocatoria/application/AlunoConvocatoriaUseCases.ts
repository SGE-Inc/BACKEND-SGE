import { StatusCodes } from "http-status-codes";
import { TListAlunoConvocatoriasUseCase } from "../domain/IAlunoConvocatoria";

export const ListAlunoConvocatoriasUseCase: TListAlunoConvocatoriasUseCase = (ResponseProvider, listConvocatorias) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const convocatorias = await listConvocatorias(alunoId);
    return ResponseProvider(StatusCodes.OK, "Convocatórias do aluno", convocatorias);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
