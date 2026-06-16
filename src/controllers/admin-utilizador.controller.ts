import type { Request, Response, NextFunction } from "express";
import { AdminUtilizadorService } from "../services/admin-utilizador.service.js";

const adminUtilizadorService = new AdminUtilizadorService();

export class AdminUtilizadorController {
  list = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await adminUtilizadorService.list();
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await adminUtilizadorService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await adminUtilizadorService.update(req.params.id as string, req.body);
    res.json(result);
  };

  toggleStatus = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { ativo } = req.body;
    const result = await adminUtilizadorService.toggleStatus(req.params.id as string, ativo);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await adminUtilizadorService.delete(req.params.id as string);
    res.json(result);
  };
}
