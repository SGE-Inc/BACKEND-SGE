import { StatusCodes } from "http-status-codes";
import { TGetHorarioUseCase } from "../domain/IProfessorHorario";

export const GetHorarioUseCase: TGetHorarioUseCase = (ResponseProvider, getHorario) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const horario = await getHorario(professorId);
    return ResponseProvider(StatusCodes.OK, "Horário do professor", horario);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
