import { StatusCodes } from "http-status-codes";
import { TGetAlunoPerfilUseCase } from "../domain/IAlunoPerfil";

export const GetAlunoPerfilUseCase: TGetAlunoPerfilUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const perfil = await findById(userId);
    if (!perfil) return ResponseProvider(StatusCodes.NOT_FOUND, "Aluno não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Perfil do aluno", perfil);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
