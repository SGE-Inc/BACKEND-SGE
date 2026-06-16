import { StatusCodes } from "http-status-codes";
import {
  TListExamesUseCase, TGetExameUseCase, TCreateExameUseCase, TUpdateExameUseCase,
  TDeleteExameUseCase, TChangeExameEstadoUseCase, TLancarExameResultadosUseCase,
  TGetExameResultadosUseCase, TGetExameCalendarioUseCase, TGetExameHistoricoUseCase,
  TListEpocasExameUseCase, TCreateEpocaExameUseCase,
} from "../domain/IExame";

export const ListExamesUseCase: TListExamesUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll({
      disciplinaId: req.query.disciplinaId as string,
      turmaId: req.query.turmaId as string,
      tipo: req.query.tipo as string,
      trimestre: req.query.trimestre as string | undefined,
      estado: req.query.estado as string,
      curso: req.query.curso as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
    });
    return ResponseProvider(StatusCodes.OK, "Lista de exames", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetExameUseCase: TGetExameUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const exame = await findById(req.params.id as string);
    if (!exame) return ResponseProvider(StatusCodes.NOT_FOUND, "Exame não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Exame encontrado", exame);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateExameUseCase: TCreateExameUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const exame = await save(req.body);
    return ResponseProvider(StatusCodes.CREATED, "Exame criado com sucesso", exame);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Exame já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateExameUseCase: TUpdateExameUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Exame não encontrado", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Exame actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteExameUseCase: TDeleteExameUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Exame não encontrado", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Exame removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ChangeExameEstadoUseCase: TChangeExameEstadoUseCase = (ResponseProvider, findById, changeEstado) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Exame não encontrado", null);
    const updated = await changeEstado(req.params.id as string, req.body.estado);
    return ResponseProvider(StatusCodes.OK, "Estado do exame actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const LancarExameResultadosUseCase: TLancarExameResultadosUseCase = (ResponseProvider, findById, lancarResultados) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Exame não encontrado", null);
    const result = await lancarResultados(req.params.id as string, req.body.resultados);
    return ResponseProvider(StatusCodes.CREATED, "Resultados lançados com sucesso", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetExameResultadosUseCase: TGetExameResultadosUseCase = (ResponseProvider, getResultados) => async (req) => {
  try {
    const result = await getResultados(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Resultados do exame", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetExameCalendarioUseCase: TGetExameCalendarioUseCase = (ResponseProvider, getCalendario) => async (req) => {
  try {
    const result = await getCalendario({
      turmaId: req.query.turmaId as string,
      disciplinaId: req.query.disciplinaId as string,
      trimestre: req.query.trimestre as string | undefined,
    });
    return ResponseProvider(StatusCodes.OK, "Calendário de exames", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetExameHistoricoUseCase: TGetExameHistoricoUseCase = (ResponseProvider, getHistorico) => async (req) => {
  try {
    const result = await getHistorico(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Histórico do exame", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListEpocasExameUseCase: TListEpocasExameUseCase = (ResponseProvider, listEpocas) => async (req) => {
  try {
    const result = await listEpocas();
    return ResponseProvider(StatusCodes.OK, "Lista de épocas de exame", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateEpocaExameUseCase: TCreateEpocaExameUseCase = (ResponseProvider, createEpoca) => async (req) => {
  try {
    const epoca = await createEpoca(req.body);
    return ResponseProvider(StatusCodes.CREATED, "Época de exame criada com sucesso", epoca);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Época já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
