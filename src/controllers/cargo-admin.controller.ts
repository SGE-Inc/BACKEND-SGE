import type { Request, Response, NextFunction } from "express";
import { CargoAdminService } from "../services/cargo-admin.service.js";

const cargoAdminService = new CargoAdminService();

export class CargoAdminController {
  list = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cargoAdminService.list();
    res.json(result);
  };

  create = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cargoAdminService.create(req.body);
    res.status(201).json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cargoAdminService.update(req.params.id as string, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await cargoAdminService.delete(req.params.id as string);
    res.json(result);
  };
}
