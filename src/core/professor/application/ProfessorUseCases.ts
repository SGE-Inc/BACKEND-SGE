import { StatusCodes } from "http-status-codes";
import { TListProfessoresUseCase, TGetProfessorUseCase, TCreateProfessorUseCase, TUpdateProfessorUseCase, TDeleteProfessorUseCase, TToggleProfessorStatusUseCase } from "../domain/IProfessor";
import { v4 as uuidv4 } from "uuid";

export const ListProfessoresUseCase: TListProfessoresUseCase = (ResponseProvider, findAll) => async (_req) => {
  try {
    const professores = await findAll();
    return ResponseProvider(StatusCodes.OK, "Lista de professores", professores);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProfessorUseCase: TGetProfessorUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const professor = await findById(req.params.id as string);
    if (!professor) return ResponseProvider(StatusCodes.NOT_FOUND, "Professor não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Professor encontrado", professor);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateProfessorUseCase: TCreateProfessorUseCase = (ResponseProvider, hash, save) => async (req) => {
  try {
    const hashedPassword = await hash(req.body.senha);
    const userId = uuidv4();
    const professorId = uuidv4();
    const professor = await save({
      id: professorId,
      userId,
      nome: req.body.nome,
      email: req.body.email,
      cargo: req.body.cargo,
      contacto: req.body.contacto,
      senhaHash: hashedPassword,
    });
    return ResponseProvider(StatusCodes.CREATED, "Professor criado com sucesso", professor);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Email já registado", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateProfessorUseCase: TUpdateProfessorUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Professor não encontrado", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Professor actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteProfessorUseCase: TDeleteProfessorUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Professor não encontrado", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Professor removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ToggleProfessorStatusUseCase: TToggleProfessorStatusUseCase = (ResponseProvider, findById, toggle) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Professor não encontrado", null);
    const updated = await toggle(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Estado actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
