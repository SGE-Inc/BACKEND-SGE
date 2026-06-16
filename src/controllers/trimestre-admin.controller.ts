import type { Request, Response, NextFunction } from "express";
import { TrimestreAdminService } from "../services/trimestre-admin.service.js";

const trimestreAdminService = new TrimestreAdminService();

export class TrimestreAdminController {
  list = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await trimestreAdminService.list(req.query.anoLectivo as string);
    res.json(result);
  };

  define = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { anoLectivo, trimestres } = req.body;
    const result = await trimestreAdminService.define(anoLectivo, trimestres);
    res.json(result);
  };
}
