import type { Request, Response, NextFunction } from "express";
import { ExameAdminService } from "../services/exame-admin.service.js";

const exameAdminService = new ExameAdminService();

export class ExameAdminController {
  list = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { curso, turma, estado, trimestre, tipo, search, page = "1", limit = "20" } = req.query as Record<string, string>;
    const result = await exameAdminService.list({ curso, turma, estado, trimestre, tipo, search, page: parseInt(page), limit: parseInt(limit) });
    res.json(result);
  };

  getById = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.getById(req.params.id as string);
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.update(req.params.id as string, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.delete(req.params.id as string);
    res.json(result);
  };

  changeEstado = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { estado } = req.body;
    const result = await exameAdminService.changeEstado(req.params.id as string, estado);
    res.json(result);
  };

  lancarResultados = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { resultados } = req.body;
    const result = await exameAdminService.lancarResultados(req.params.id as string, resultados);
    res.json(result);
  };

  getResultados = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.getResultados(req.params.id as string);
    res.json(result);
  };

  getCalendario = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.getCalendario(req.query.curso as string, req.query.trimestre as string);
    res.json(result);
  };

  listEpocas = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.listEpocas();
    res.json(result);
  };

  createEpoca = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.createEpoca(req.body);
    res.status(201).json(result);
  };

  getHistorico = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await exameAdminService.getHistorico(req.query.curso as string, req.query.ano as string);
    res.json(result);
  };
}
