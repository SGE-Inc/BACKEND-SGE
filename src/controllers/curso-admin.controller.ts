import type { Request, Response, NextFunction } from "express";
import { CursoAdminService } from "../services/curso-admin.service.js";

const cursoAdminService = new CursoAdminService();

export class CursoAdminController {
  list = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cursoAdminService.list();
    res.json(result);
  };

  getById = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cursoAdminService.getById(req.params.id);
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cursoAdminService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cursoAdminService.update(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cursoAdminService.delete(req.params.id);
    res.json(result);
  };
}
