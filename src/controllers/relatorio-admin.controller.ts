import type { Request, Response, NextFunction } from "express";
import { RelatorioAdminService } from "../services/relatorio-admin.service.js";

const relatorioAdminService = new RelatorioAdminService();

export class RelatorioAdminController {
  estudantesPorCurso = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await relatorioAdminService.estudantesPorCurso(req.query.anoLectivo as string);
    res.json(result);
  };

  aprovacaoPorTurma = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await relatorioAdminService.aprovacaoPorTurma(req.query.trimestre as string, req.query.anoLectivo as string);
    res.json(result);
  };

  desempenhoDisciplinas = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await relatorioAdminService.desempenhoDisciplinas(req.query.curso as string, req.query.trimestre as string);
    res.json(result);
  };

  professoresCargaHoraria = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await relatorioAdminService.professoresCargaHoraria();
    res.json(result);
  };
}
