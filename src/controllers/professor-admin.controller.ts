import type { Request, Response, NextFunction } from "express";
import { ProfessorAdminService } from "../services/professor-admin.service.js";

const professorAdminService = new ProfessorAdminService();

export class ProfessorAdminController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await professorAdminService.create(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await professorAdminService.list();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await professorAdminService.getById(req.params.id as string);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await professorAdminService.update(req.params.id as string, req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await professorAdminService.delete(req.params.id as string);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async toggleStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await professorAdminService.toggleStatus(req.params.id as string);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
