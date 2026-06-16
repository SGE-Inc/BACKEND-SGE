import { StatusCodes } from "http-status-codes";
import { TEstudantesPorCursoUseCase, TAprovacaoPorTurmaUseCase, TDesempenhoDisciplinasUseCase, TProfessoresCargaHorariaUseCase } from "../domain/IRelatorio";

export const EstudantesPorCursoUseCase: TEstudantesPorCursoUseCase = (ResponseProvider, query) => async (req) => {
  try {
    const data = await query(req.query.anoLectivo as string);
    return ResponseProvider(StatusCodes.OK, "Estudantes por curso", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const AprovacaoPorTurmaUseCase: TAprovacaoPorTurmaUseCase = (ResponseProvider, query) => async (req) => {
  try {
    const data = await query(req.query.trimestre as string, req.query.anoLectivo as string);
    return ResponseProvider(StatusCodes.OK, "Aprovação por turma", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DesempenhoDisciplinasUseCase: TDesempenhoDisciplinasUseCase = (ResponseProvider, query) => async (req) => {
  try {
    const data = await query(req.query.curso as string, req.query.trimestre as string);
    return ResponseProvider(StatusCodes.OK, "Desempenho por disciplina", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ProfessoresCargaHorariaUseCase: TProfessoresCargaHorariaUseCase = (ResponseProvider, query) => async (_req) => {
  try {
    const data = await query();
    return ResponseProvider(StatusCodes.OK, "Carga horária dos professores", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
