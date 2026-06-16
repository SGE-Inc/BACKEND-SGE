import { StatusCodes } from "http-status-codes";
import { TListCargosUseCase, TGetCargoUseCase, TCreateCargoUseCase, TUpdateCargoUseCase, TDeleteCargoUseCase } from "../domain/ICargo";

export const ListCargosUseCase: TListCargosUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll({
      search: req.query.search as string,
      tipo: req.query.tipo as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
    });
    return ResponseProvider(StatusCodes.OK, "Lista de cargos", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetCargoUseCase: TGetCargoUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const cargo = await findById(req.params.id as string);
    if (!cargo) return ResponseProvider(StatusCodes.NOT_FOUND, "Cargo não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Cargo encontrado", cargo);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateCargoUseCase: TCreateCargoUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const cargo = await save(req.body);
    return ResponseProvider(StatusCodes.CREATED, "Cargo criado com sucesso", cargo);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Cargo já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateCargoUseCase: TUpdateCargoUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Cargo não encontrado", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Cargo actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteCargoUseCase: TDeleteCargoUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Cargo não encontrado", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Cargo removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
