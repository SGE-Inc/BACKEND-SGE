import { StatusCodes } from "http-status-codes";
import { TGetStatsUseCase, TGetDistribuicaoCursosUseCase, TGetEvolucaoMatriculasUseCase, TGetMediaDisciplinasUseCase, TGetUltimosLogsUseCase, TGetProximosEventosUseCase } from "../domain/IDashboard";

export const GetStatsUseCase: TGetStatsUseCase = (ResponseProvider, getStats) => async (_req) => {
  try {
    const stats = await getStats();
    return ResponseProvider(StatusCodes.OK, "Estatísticas do dashboard", stats);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetDistribuicaoCursosUseCase: TGetDistribuicaoCursosUseCase = (ResponseProvider, getDistribuicao) => async (_req) => {
  try {
    const data = await getDistribuicao();
    return ResponseProvider(StatusCodes.OK, "Distribuição por curso", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetEvolucaoMatriculasUseCase: TGetEvolucaoMatriculasUseCase = (ResponseProvider, getEvolucao) => async (req) => {
  try {
    const data = await getEvolucao(req.query.ano as string);
    return ResponseProvider(StatusCodes.OK, "Evolução de matrículas", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetMediaDisciplinasUseCase: TGetMediaDisciplinasUseCase = (ResponseProvider, getMedias) => async (_req) => {
  try {
    const data = await getMedias();
    return ResponseProvider(StatusCodes.OK, "Média por disciplina", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetUltimosLogsUseCase: TGetUltimosLogsUseCase = (ResponseProvider, getLogs) => async (req) => {
  try {
    const limite = req.query.limite ? parseInt(req.query.limite as string) : 8;
    const data = await getLogs(limite);
    return ResponseProvider(StatusCodes.OK, "Últimos logs", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetProximosEventosUseCase: TGetProximosEventosUseCase = (ResponseProvider, getEventos) => async (_req) => {
  try {
    const data = await getEventos();
    return ResponseProvider(StatusCodes.OK, "Próximos eventos", data);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
