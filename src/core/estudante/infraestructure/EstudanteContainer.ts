import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaEstudanteRepository } from "./PrismaEstudanteRepository";
import { ListEstudantesUseCase, GetEstudanteUseCase, GetEstudanteByProcessoUseCase, CreateEstudanteUseCase, UpdateEstudanteUseCase, DeleteEstudanteUseCase, ChangeEstudanteStatusUseCase, TransferEstudanteUseCase, GetEstudanteHistoricoUseCase } from "../application/EstudanteUseCases";
import { Request, Response } from "express";

const repository = PrismaEstudanteRepository(PrismaProvider);

export const EstudanteContainer = {
  list: (req: Request, res: Response) => ListEstudantesUseCase(ResponseProvider(res), (filters: any) => repository.findAll(filters))(req),
  getById: (req: Request, res: Response) => GetEstudanteUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  getByProcesso: (req: Request, res: Response) => GetEstudanteByProcessoUseCase(ResponseProvider(res), (processo: string) => repository.findByProcesso(processo))(req),
  create: (req: Request, res: Response) => CreateEstudanteUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateEstudanteUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteEstudanteUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id))(req),
  changeStatus: (req: Request, res: Response) => ChangeEstudanteStatusUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, status: string, motivo?: string) => repository.changeStatus(id, status, motivo))(req),
  transfer: (req: Request, res: Response) => TransferEstudanteUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, novaTurmaId: string, motivo?: string) => repository.transfer(id, novaTurmaId, motivo))(req),
  getHistorico: (req: Request, res: Response) => GetEstudanteHistoricoUseCase(ResponseProvider(res), (id: string) => repository.getHistorico(id))(req),
};
