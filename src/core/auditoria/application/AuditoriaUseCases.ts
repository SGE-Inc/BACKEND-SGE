import { StatusCodes } from "http-status-codes";
import { TListAuditoriaUseCase, TGetAuditoriaUseCase, TGetAuditoriaEstatisticasUseCase } from "../domain/IAuditoria";

export const ListAuditoriaUseCase: TListAuditoriaUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll({
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
      tipo: req.query.tipo as string,
      role: req.query.role as string,
      utilizador: req.query.utilizador as string,
      dataInicio: req.query.dataInicio as string,
      dataFim: req.query.dataFim as string,
    });
    return ResponseProvider(StatusCodes.OK, "Logs de auditoria", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAuditoriaUseCase: TGetAuditoriaUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const log = await findById(req.params.id as string);
    if (!log) return ResponseProvider(StatusCodes.NOT_FOUND, "Registo não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Registo de auditoria", log);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAuditoriaEstatisticasUseCase: TGetAuditoriaEstatisticasUseCase = (ResponseProvider, getEstatisticas) => async (req) => {
  try {
    const stats = await getEstatisticas(req.query.periodo as string);
    return ResponseProvider(StatusCodes.OK, "Estatísticas de auditoria", stats);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
