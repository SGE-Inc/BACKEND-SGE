import { StatusCodes } from "http-status-codes";
import { TListTrimestresUseCase, TDefineTrimestresUseCase } from "../domain/ITrimestre";

export const ListTrimestresUseCase: TListTrimestresUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll(req.query.anoLectivo as string);
    return ResponseProvider(StatusCodes.OK, "Lista de trimestres", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DefineTrimestresUseCase: TDefineTrimestresUseCase = (ResponseProvider, define) => async (req) => {
  try {
    const result = await define(req.body.anoLectivo, req.body.trimestres);
    return ResponseProvider(StatusCodes.CREATED, "Trimestres definidos com sucesso", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
