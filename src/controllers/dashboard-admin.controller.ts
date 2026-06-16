import type { Request, Response, NextFunction } from "express";
import { DashboardAdminService } from "../services/dashboard-admin.service.js";

const dashboardAdminService = new DashboardAdminService();

export class DashboardAdminController {
  getStats = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await dashboardAdminService.getStats();
    res.json(result);
  };

  getDistribuicaoCursos = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await dashboardAdminService.getDistribuicaoCursos();
    res.json(result);
  };

  getEvolucaoMatriculas = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await dashboardAdminService.getEvolucaoMatriculas(req.query.ano as string);
    res.json(result);
  };

  getMediaDisciplinas = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await dashboardAdminService.getMediaDisciplinas();
    res.json(result);
  };

  getUltimosLogs = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const limite = parseInt(req.query.limite as string) || 8;
    const result = await dashboardAdminService.getUltimosLogs(limite);
    res.json(result);
  };

  getProximosEventos = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await dashboardAdminService.getProximosEventos();
    res.json(result);
  };
}
