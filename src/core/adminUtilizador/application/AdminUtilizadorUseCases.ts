import { StatusCodes } from "http-status-codes";
import {
  TListAdminUtilizadoresUseCase, TCreateAdminUtilizadorUseCase, TUpdateAdminUtilizadorUseCase,
  TToggleAdminUtilizadorStatusUseCase, TDeleteAdminUtilizadorUseCase,
} from "../domain/IAdminUtilizador";

export const ListAdminUtilizadoresUseCase: TListAdminUtilizadoresUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll({
      search: req.query.search as string,
      role: req.query.role as string,
      status: req.query.status as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
    });
    return ResponseProvider(StatusCodes.OK, "Lista de utilizadores", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateAdminUtilizadorUseCase: TCreateAdminUtilizadorUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const utilizador = await save(req.body);
    return ResponseProvider(StatusCodes.CREATED, "Utilizador criado com sucesso", utilizador);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Email já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateAdminUtilizadorUseCase: TUpdateAdminUtilizadorUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Utilizador actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ToggleAdminUtilizadorStatusUseCase: TToggleAdminUtilizadorStatusUseCase = (ResponseProvider, findById, toggleStatus) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    const updated = await toggleStatus(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Estado do utilizador actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteAdminUtilizadorUseCase: TDeleteAdminUtilizadorUseCase = (ResponseProvider, findById, del, countSuperAdmins) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    if (existing.role === "SUPERADMIN") {
      const count = await countSuperAdmins();
      if (count <= 1) return ResponseProvider(StatusCodes.FORBIDDEN, "Não é possível remover o último superadmin", null);
    }
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Utilizador removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
