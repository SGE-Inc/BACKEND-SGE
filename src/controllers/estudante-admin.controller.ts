import type { Request, Response, NextFunction } from "express";
import { EstudanteAdminService } from "../services/estudante-admin.service.js";

const estudanteAdminService = new EstudanteAdminService();

export class EstudanteAdminController {
  list = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { curso, turma, status, search, page = "1", limit = "20" } = req.query as Record<string, string>;
    const result = await estudanteAdminService.list({ curso, turma, status, search, page: parseInt(page), limit: parseInt(limit) });
    res.json(result);
  };

  getById = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await estudanteAdminService.getById(req.params.id as string);
    res.json(result);
  };

  getByProcesso = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await estudanteAdminService.getByProcesso(req.params.numeroProcesso as string);
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await estudanteAdminService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await estudanteAdminService.update(req.params.id as string, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await estudanteAdminService.delete(req.params.id as string);
    res.json(result);
  };

  changeStatus = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { status, motivo } = req.body;
    const result = await estudanteAdminService.changeStatus(req.params.id as string, status, motivo);
    res.json(result);
  };

  transfer = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { novaTurmaId, motivo } = req.body;
    const result = await estudanteAdminService.transfer(req.params.id as string, novaTurmaId, motivo);
    res.json(result);
  };

  getHistorico = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await estudanteAdminService.getHistorico(req.params.id as string);
    res.json(result);
  };
}
