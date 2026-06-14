import type { Request, Response, NextFunction } from "express";
import { DisciplinaAdminService } from "../services/disciplina-admin.service.js";

const disciplinaAdminService = new DisciplinaAdminService();

export class DisciplinaAdminController {
  list = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const curso = req.query.curso as string | undefined;
    const classe = req.query.classe as string | undefined;
    const result = await disciplinaAdminService.list(curso, classe);
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await disciplinaAdminService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await disciplinaAdminService.update(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await disciplinaAdminService.delete(req.params.id);
    res.json(result);
  };
}
