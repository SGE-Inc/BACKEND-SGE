import { StatusCodes } from "http-status-codes";
import { TListCursosUseCase, TGetCursoUseCase, TCreateCursoUseCase, TUpdateCursoUseCase, TDeleteCursoUseCase } from "../domain/ICurso";
import { v4 as uuidv4 } from "uuid";

export const ListCursosUseCase: TListCursosUseCase = (ResponseProvider, findAll) => async (_req) => {
  try {
    const cursos = await findAll();
    return ResponseProvider(StatusCodes.OK, "Lista de cursos", cursos);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetCursoUseCase: TGetCursoUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const curso = await findById(req.params.id as string);
    if (!curso) return ResponseProvider(StatusCodes.NOT_FOUND, "Curso não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Curso encontrado", curso);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateCursoUseCase: TCreateCursoUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const curso = await save({ id: uuidv4(), ...req.body, ativo: true });
    return ResponseProvider(StatusCodes.CREATED, "Curso criado com sucesso", curso);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Curso já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateCursoUseCase: TUpdateCursoUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Curso não encontrado", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Curso actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteCursoUseCase: TDeleteCursoUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Curso não encontrado", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Curso removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
