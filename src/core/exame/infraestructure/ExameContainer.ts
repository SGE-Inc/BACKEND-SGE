import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaExameRepository } from "./PrismaExameRepository";
import {
  ListExamesUseCase, GetExameUseCase, CreateExameUseCase, UpdateExameUseCase,
  DeleteExameUseCase, ChangeExameEstadoUseCase, LancarExameResultadosUseCase,
  GetExameResultadosUseCase, GetExameCalendarioUseCase, GetExameHistoricoUseCase,
  ListEpocasExameUseCase, CreateEpocaExameUseCase,
} from "../application/ExameUseCases";
import { Request, Response } from "express";

const repository = PrismaExameRepository(PrismaProvider);

export const ExameContainer = {
  list: (req: Request, res: Response) => ListExamesUseCase(ResponseProvider(res), (filters: any) => repository.findAll(filters))(req),
  getById: (req: Request, res: Response) => GetExameUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  create: (req: Request, res: Response) => CreateExameUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateExameUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteExameUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id))(req),
  changeEstado: (req: Request, res: Response) => ChangeExameEstadoUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, estado: string) => repository.changeEstado(id, estado))(req),
  lancarResultados: (req: Request, res: Response) => LancarExameResultadosUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, resultados: any[]) => repository.lancarResultados(id, resultados))(req),
  getResultados: (req: Request, res: Response) => GetExameResultadosUseCase(ResponseProvider(res), (id: string) => repository.getResultados(id))(req),
  getCalendario: (req: Request, res: Response) => GetExameCalendarioUseCase(ResponseProvider(res), (filters: any) => repository.getCalendario(filters))(req),
  getHistorico: (req: Request, res: Response) => GetExameHistoricoUseCase(ResponseProvider(res), (id: string) => repository.getHistorico(id))(req),
  listEpocas: (req: Request, res: Response) => ListEpocasExameUseCase(ResponseProvider(res), () => repository.listEpocas())(req),
  createEpoca: (req: Request, res: Response) => CreateEpocaExameUseCase(ResponseProvider(res), (data: any) => repository.createEpoca(data))(req),
};
