import { StatusCodes } from "http-status-codes";
import { TGetInstituicaoUseCase, TUpdateInstituicaoUseCase, TUploadLogotipoUseCase, TListAnosLectivosUseCase, TCreateAnoLectivoUseCase, TActivateAnoLectivoUseCase, TUpdateAnoLectivoUseCase } from "../domain/IConfiguracao";
import { v4 as uuidv4 } from "uuid";

export const GetInstituicaoUseCase: TGetInstituicaoUseCase = (ResponseProvider, getInstituicao) => async (_req) => {
  try {
    const instituicao = await getInstituicao();
    if (!instituicao) return ResponseProvider(StatusCodes.NOT_FOUND, "Instituição não encontrada", null);
    return ResponseProvider(StatusCodes.OK, "Instituição encontrada", instituicao);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateInstituicaoUseCase: TUpdateInstituicaoUseCase = (ResponseProvider, update) => async (req) => {
  try {
    const instituicao = await update(req.body);
    return ResponseProvider(StatusCodes.OK, "Instituição actualizada", instituicao);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UploadLogotipoUseCase: TUploadLogotipoUseCase = (ResponseProvider, uploadLogotipo) => async (req) => {
  try {
    const file = (req as any).file;
    if (!file) return ResponseProvider(StatusCodes.BAD_REQUEST, "Ficheiro não enviado", null);
    const instituicao = await uploadLogotipo(file.path);
    return ResponseProvider(StatusCodes.OK, "Logótipo actualizado", instituicao);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListAnosLectivosUseCase: TListAnosLectivosUseCase = (ResponseProvider, list) => async (_req) => {
  try {
    const anos = await list();
    return ResponseProvider(StatusCodes.OK, "Anos lectivos", anos);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateAnoLectivoUseCase: TCreateAnoLectivoUseCase = (ResponseProvider, create) => async (req) => {
  try {
    const ano = await create({ id: uuidv4(), ...req.body });
    return ResponseProvider(StatusCodes.CREATED, "Ano lectivo criado com sucesso", ano);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Ano lectivo já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ActivateAnoLectivoUseCase: TActivateAnoLectivoUseCase = (ResponseProvider, activate) => async (req) => {
  try {
    const ano = await activate(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Ano lectivo activado", ano);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateAnoLectivoUseCase: TUpdateAnoLectivoUseCase = (ResponseProvider, update) => async (req) => {
  try {
    const ano = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Ano lectivo actualizado", ano);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
