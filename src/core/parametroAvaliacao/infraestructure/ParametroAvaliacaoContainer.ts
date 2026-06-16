import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaParametroAvaliacaoRepository } from "./PrismaParametroAvaliacaoRepository";
import { ListParametrosAvaliacaoUseCase, UpdateParametroAvaliacaoUseCase, UpsertParametroAvaliacaoUseCase } from "../application/ParametroAvaliacaoUseCases";
import { Request, Response } from "express";

const repository = PrismaParametroAvaliacaoRepository(PrismaProvider);

export const ParametroAvaliacaoContainer = {
  list: (req: Request, res: Response) => ListParametrosAvaliacaoUseCase(ResponseProvider(res), () => repository.findAll())(req),
  update: (req: Request, res: Response) => UpdateParametroAvaliacaoUseCase(ResponseProvider(res), () => repository.findAll(), (id: string, data: any) => repository.update(id, data))(req),
  upsert: (req: Request, res: Response) => UpsertParametroAvaliacaoUseCase(ResponseProvider(res), (data: any) => repository.upsertBySigla(data))(req),
};
