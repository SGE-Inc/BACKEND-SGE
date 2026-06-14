import type { Request, Response, NextFunction } from "express";
import { ProfessorAdminService } from "../services/professor-admin.service.js";

const professorAdminService = new ProfessorAdminService();

export class ProfessorAdminController {
  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await professorAdminService.create(req.body);
    res.status(201).json(result);
  };

  list = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await professorAdminService.list();
    res.json(result);
  };

  getById = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await professorAdminService.getById(req.params.id);
    res.json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await professorAdminService.update(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await professorAdminService.delete(req.params.id);
    res.json(result);
  };

  toggleStatus = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await professorAdminService.toggleStatus(req.params.id);
    res.json(result);
  };
}
