import { StatusCodes } from "http-status-codes";
import { TGetProfessorStatsUseCase, TGetProfessorDisciplinasUseCase, TGetProfessorProximosEventosUseCase, TGetProfessorHorarioSemanalUseCase, TGetProfessorTurmasUseCase } from "../domain/IProfessorDashboard";

export const GetProfessorStatsUseCase: TGetProfessorStatsUseCase = (ResponseProvider, getStats) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const stats = await getStats(professorId);
    return ResponseProvider(StatusCodes.OK, "Estatísticas do professor", stats);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProfessorDisciplinasUseCase: TGetProfessorDisciplinasUseCase = (ResponseProvider, getDisciplinas) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const disciplinas = await getDisciplinas(professorId);
    return ResponseProvider(StatusCodes.OK, "Disciplinas do professor", disciplinas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProfessorProximosEventosUseCase: TGetProfessorProximosEventosUseCase = (ResponseProvider, getEventos) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const eventos = await getEventos(professorId);
    return ResponseProvider(StatusCodes.OK, "Próximos eventos", eventos);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProfessorHorarioSemanalUseCase: TGetProfessorHorarioSemanalUseCase = (ResponseProvider, getHorario) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const horario = await getHorario(professorId);
    return ResponseProvider(StatusCodes.OK, "Horário semanal", horario);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProfessorTurmasUseCase: TGetProfessorTurmasUseCase = (ResponseProvider, getTurmas) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const turmas = await getTurmas(professorId);
    return ResponseProvider(StatusCodes.OK, "Turmas do professor", turmas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
