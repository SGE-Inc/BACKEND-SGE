import { StatusCodes } from "http-status-codes";
import { TGetAlunoBoletinsUseCase, TGetAlunoBoletimTrimestreUseCase } from "../domain/IAlunoBoletim";

export const GetAlunoBoletinsUseCase: TGetAlunoBoletinsUseCase = (ResponseProvider, getBoletins) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const boletins = await getBoletins(alunoId);
    return ResponseProvider(StatusCodes.OK, "Boletins do aluno", boletins);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAlunoBoletimTrimestreUseCase: TGetAlunoBoletimTrimestreUseCase = (ResponseProvider, getBoletim) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const trimestre = (req.params.trimestre as string) || (req.query.trimestre as string);
    if (!trimestre) return ResponseProvider(StatusCodes.BAD_REQUEST, "Trimestre é obrigatório", null);
    const boletim = await getBoletim(alunoId, trimestre);
    return ResponseProvider(StatusCodes.OK, "Boletim do trimestre", boletim);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
