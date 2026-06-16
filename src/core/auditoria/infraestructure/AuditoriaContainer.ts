import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAuditoriaRepository } from "./PrismaAuditoriaRepository";
import { ListAuditoriaUseCase, GetAuditoriaUseCase, GetAuditoriaEstatisticasUseCase } from "../application/AuditoriaUseCases";
import { Request, Response } from "express";

const repository = PrismaAuditoriaRepository(PrismaProvider);

export const AuditoriaContainer = {
  list: (req: Request, res: Response) => ListAuditoriaUseCase(ResponseProvider(res), (filters: any) => repository.findAll(filters))(req),
  getById: (req: Request, res: Response) => GetAuditoriaUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  getEstatisticas: (req: Request, res: Response) => GetAuditoriaEstatisticasUseCase(ResponseProvider(res), (periodo?: string) => repository.getEstatisticas(periodo))(req),
};
