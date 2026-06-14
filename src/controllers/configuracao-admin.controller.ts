import type { Request, Response, NextFunction } from "express";
import { ConfiguracaoAdminService } from "../services/configuracao-admin.service.js";

const configuracaoAdminService = new ConfiguracaoAdminService();

export class ConfiguracaoAdminController {
  getInstituicao = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await configuracaoAdminService.getInstituicao();
    res.json(result);
  };

  updateInstituicao = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const adminId = req.user!.sub;
    const result = await configuracaoAdminService.updateInstituicao(adminId, req.body);
    res.json(result);
  };

  uploadLogotipo = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const adminId = req.user!.sub;
    if (!req.file) {
      res.status(400).json({ message: "Ficheiro não enviado" });
      return;
    }
    const result = await configuracaoAdminService.uploadLogotipo(adminId, req.file.path);
    res.json(result);
  };

  listAnosLectivos = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await configuracaoAdminService.listAnosLectivos();
    res.json(result);
  };

  createAnoLectivo = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const adminId = req.user!.sub;
    const result = await configuracaoAdminService.createAnoLectivo(adminId, req.body);
    res.status(201).json(result);
  };

  activateAnoLectivo = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await configuracaoAdminService.activateAnoLectivo(req.params.id);
    res.json(result);
  };

  updateAnoLectivo = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await configuracaoAdminService.updateAnoLectivo(req.params.id, req.body);
    res.json(result);
  };
}
