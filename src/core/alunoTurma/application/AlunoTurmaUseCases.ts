import { StatusCodes } from "http-status-codes";
import { TListAlunoDisciplinasUseCase, TListAlunoMateriaisUseCase, TSubmitAlunoMaterialUseCase } from "../domain/IAlunoTurma";

export const ListAlunoDisciplinasUseCase: TListAlunoDisciplinasUseCase = (ResponseProvider, listDisciplinas) => async (req) => {
  try {
    const turmaId = req.query.turmaId as string;
    if (!turmaId) return ResponseProvider(StatusCodes.BAD_REQUEST, "turmaId é obrigatório", null);
    const disciplinas = await listDisciplinas(turmaId);
    return ResponseProvider(StatusCodes.OK, "Disciplinas da turma", disciplinas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListAlunoMateriaisUseCase: TListAlunoMateriaisUseCase = (ResponseProvider, listMateriais) => async (req) => {
  try {
    const materiais = await listMateriais(req.params.disciplinaId as string);
    return ResponseProvider(StatusCodes.OK, "Materiais da disciplina", materiais);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const SubmitAlunoMaterialUseCase: TSubmitAlunoMaterialUseCase = (ResponseProvider, submitMaterial) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const material = await submitMaterial({ ...req.body, submittedBy: userId });
    return ResponseProvider(StatusCodes.CREATED, "Material submetido com sucesso", material);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
