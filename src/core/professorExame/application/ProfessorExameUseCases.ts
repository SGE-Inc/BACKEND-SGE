import { StatusCodes } from "http-status-codes";
import { TListProfessorExamesUseCase, TGetProfessorExameUseCase, TCreateProfessorExameUseCase, TUpdateProfessorExameUseCase, TDeleteProfessorExameUseCase, TGetResultadosExameUseCase } from "../domain/IProfessorExame";

export const ListProfessorExamesUseCase: TListProfessorExamesUseCase = (ResponseProvider, listExames) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const exames = await listExames(professorId);
    return ResponseProvider(StatusCodes.OK, "Lista de exames", exames);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProfessorExameUseCase: TGetProfessorExameUseCase = (ResponseProvider, getExame) => async (req) => {
  try {
    const exame = await getExame(req.params.id as string);
    if (!exame) return ResponseProvider(StatusCodes.NOT_FOUND, "Exame não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Exame encontrado", exame);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateProfessorExameUseCase: TCreateProfessorExameUseCase = (ResponseProvider, createExame) => async (req) => {
  try {
    const exame = await createExame(req.body);
    return ResponseProvider(StatusCodes.CREATED, "Exame criado com sucesso", exame);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateProfessorExameUseCase: TUpdateProfessorExameUseCase = (ResponseProvider, updateExame) => async (req) => {
  try {
    const exame = await updateExame(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Exame actualizado", exame);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteProfessorExameUseCase: TDeleteProfessorExameUseCase = (ResponseProvider, deleteExame) => async (req) => {
  try {
    await deleteExame(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Exame removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetResultadosExameUseCase: TGetResultadosExameUseCase = (ResponseProvider, getResultados) => async (req) => {
  try {
    const resultados = await getResultados(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Resultados do exame", resultados);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
