import { StatusCodes } from "http-status-codes";
import { TGetAlunoHorarioUseCase } from "../domain/IAlunoHorario";

export const GetAlunoHorarioUseCase: TGetAlunoHorarioUseCase = (ResponseProvider, getHorario) => async (req) => {
  try {
    const turmaId = req.query.turmaId as string;
    if (!turmaId) return ResponseProvider(StatusCodes.BAD_REQUEST, "turmaId é obrigatório", null);
    const horario = await getHorario(turmaId);
    return ResponseProvider(StatusCodes.OK, "Horário da turma", horario);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
