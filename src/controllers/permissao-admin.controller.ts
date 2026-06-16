import type { Request, Response, NextFunction } from "express";
import { PermissaoAdminService } from "../services/permissao-admin.service.js";

const permissaoAdminService = new PermissaoAdminService();

export class PermissaoAdminController {
  list = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await permissaoAdminService.list();
    res.json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await permissaoAdminService.update(req.body.permissoes);
    res.json(result);
  };

  getMeuPerfil = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const role = req.user?.role ?? "ALUNO";
    const result = await permissaoAdminService.getMeuPerfil(role);
    res.json(result);
  };
}
