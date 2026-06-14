import type { Request, Response, NextFunction } from "express";
import { TurmaAdminService } from "../services/turma-admin.service.js";

const turmaAdminService = new TurmaAdminService();

export class TurmaAdminController {
  list = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const curso = req.query.curso as string | undefined;
    const result = await turmaAdminService.list(curso);
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await turmaAdminService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await turmaAdminService.update(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await turmaAdminService.delete(req.params.id);
    res.json(result);
  };

  listEstudantes = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await turmaAdminService.listEstudantes(req.params.id);
    res.json(result);
  };
}
