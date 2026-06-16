import type { Request, Response, NextFunction } from "express";
import { AuditoriaAdminService } from "../services/auditoria-admin.service.js";

const auditoriaAdminService = new AuditoriaAdminService();

export class AuditoriaAdminController {
  list = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { page = "1", limit = "20", tipo, role, utilizador, dataInicio, dataFim } = req.query as Record<string, string>;
    const result = await auditoriaAdminService.list({ page: parseInt(page), limit: parseInt(limit), tipo, role, utilizador, dataInicio, dataFim });
    res.json(result);
  };

  getById = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await auditoriaAdminService.getById(req.params.id as string);
    res.json(result);
  };

  getEstatisticas = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await auditoriaAdminService.getEstatisticas(req.query.periodo as string);
    res.json(result);
  };
}
