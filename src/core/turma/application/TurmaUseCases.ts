import { StatusCodes } from "http-status-codes";
import { TListTurmasUseCase, TGetTurmaUseCase, TCreateTurmaUseCase, TUpdateTurmaUseCase, TDeleteTurmaUseCase, TListTurmaEstudantesUseCase } from "../domain/ITurma";
import { v4 as uuidv4 } from "uuid";

export const ListTurmasUseCase: TListTurmasUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const turmas = await findAll(req.query.curso as string);
    return ResponseProvider(StatusCodes.OK, "Lista de turmas", turmas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetTurmaUseCase: TGetTurmaUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const turma = await findById(req.params.id as string);
    if (!turma) return ResponseProvider(StatusCodes.NOT_FOUND, "Turma não encontrada", null);
    return ResponseProvider(StatusCodes.OK, "Turma encontrada", turma);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateTurmaUseCase: TCreateTurmaUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const turma = await save({ id: uuidv4(), ...req.body });
    return ResponseProvider(StatusCodes.CREATED, "Turma criada com sucesso", turma);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Turma já existente neste curso", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateTurmaUseCase: TUpdateTurmaUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Turma não encontrada", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Turma actualizada", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteTurmaUseCase: TDeleteTurmaUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Turma não encontrada", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Turma removida com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListTurmaEstudantesUseCase: TListTurmaEstudantesUseCase = (ResponseProvider, findById, findEstudantes) => async (req) => {
  try {
    const turma = await findById(req.params.id as string);
    if (!turma) return ResponseProvider(StatusCodes.NOT_FOUND, "Turma não encontrada", null);
    const estudantes = await findEstudantes(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Estudantes da turma", estudantes);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
