import { StatusCodes } from "http-status-codes";
import { TListEstudantesByTurmaUseCase, TListEstudantesByDisciplinaUseCase, TGetNotasEstudanteUseCase, TGetFaltasEstudanteUseCase } from "../domain/IProfessorEstudante";

export const ListEstudantesByTurmaUseCase: TListEstudantesByTurmaUseCase = (ResponseProvider, listByTurma) => async (req) => {
  try {
    const estudantes = await listByTurma(req.params.turmaId as string);
    return ResponseProvider(StatusCodes.OK, "Estudantes da turma", estudantes);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListEstudantesByDisciplinaUseCase: TListEstudantesByDisciplinaUseCase = (ResponseProvider, listByDisciplina) => async (req) => {
  try {
    const estudantes = await listByDisciplina(req.params.disciplinaId as string);
    return ResponseProvider(StatusCodes.OK, "Estudantes da disciplina", estudantes);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetNotasEstudanteUseCase: TGetNotasEstudanteUseCase = (ResponseProvider, getNotas) => async (req) => {
  try {
    const notas = await getNotas(req.params.alunoId as string, req.params.disciplinaId as string);
    return ResponseProvider(StatusCodes.OK, "Notas do estudante", notas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetFaltasEstudanteUseCase: TGetFaltasEstudanteUseCase = (ResponseProvider, getFaltas) => async (req) => {
  try {
    const faltas = await getFaltas(req.params.alunoId as string, req.params.disciplinaId as string);
    return ResponseProvider(StatusCodes.OK, "Faltas do estudante", faltas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
