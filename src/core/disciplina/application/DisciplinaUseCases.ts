import { StatusCodes } from "http-status-codes";
import { TListDisciplinasUseCase, TGetDisciplinaUseCase, TCreateDisciplinaUseCase, TUpdateDisciplinaUseCase, TDeleteDisciplinaUseCase } from "../domain/IDisciplina";
import { v4 as uuidv4 } from "uuid";

export const ListDisciplinasUseCase: TListDisciplinasUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const disciplinas = await findAll(req.query.curso as string, req.query.classe as string);
    return ResponseProvider(StatusCodes.OK, "Lista de disciplinas", disciplinas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetDisciplinaUseCase: TGetDisciplinaUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const disciplina = await findById(req.params.id as string);
    if (!disciplina) return ResponseProvider(StatusCodes.NOT_FOUND, "Disciplina não encontrada", null);
    return ResponseProvider(StatusCodes.OK, "Disciplina encontrada", disciplina);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateDisciplinaUseCase: TCreateDisciplinaUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const disciplina = await save({ id: uuidv4(), ...req.body });
    return ResponseProvider(StatusCodes.CREATED, "Disciplina criada com sucesso", disciplina);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Disciplina já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateDisciplinaUseCase: TUpdateDisciplinaUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Disciplina não encontrada", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Disciplina actualizada", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteDisciplinaUseCase: TDeleteDisciplinaUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Disciplina não encontrada", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Disciplina removida com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
