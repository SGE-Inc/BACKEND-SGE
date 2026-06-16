import { StatusCodes } from "http-status-codes";
import { TListPermissoesUseCase, TUpdatePermissaoUseCase, TGetMeuPerfilUseCase } from "../domain/IPermissao";

export const ListPermissoesUseCase: TListPermissoesUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll({
      modulo: req.query.modulo as string,
      search: req.query.search as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
    });
    return ResponseProvider(StatusCodes.OK, "Lista de permissões", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdatePermissaoUseCase: TUpdatePermissaoUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Permissão não encontrada", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Permissão actualizada", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetMeuPerfilUseCase: TGetMeuPerfilUseCase = (ResponseProvider, getMeuPerfil) => async (req) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Utilizador não autenticado", null);
    const perfil = await getMeuPerfil(userId);
    return ResponseProvider(StatusCodes.OK, "Perfil do utilizador", perfil);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
