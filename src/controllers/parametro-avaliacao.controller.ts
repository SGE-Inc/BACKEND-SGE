import type { Request, Response, NextFunction } from "express";
import { ParametroAvaliacaoService } from "../services/parametro-avaliacao.service.js";

const parametroAvaliacaoService = new ParametroAvaliacaoService();

export class ParametroAvaliacaoController {
  list = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await parametroAvaliacaoService.list();
    res.json(result);
  };

  update = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await parametroAvaliacaoService.update(req.body.parametros);
    res.json(result);
  };
}
