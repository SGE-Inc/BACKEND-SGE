import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaTurmaRepository } from "./PrismaTurmaRepository";
import { ListTurmasUseCase, GetTurmaUseCase, CreateTurmaUseCase, UpdateTurmaUseCase, DeleteTurmaUseCase, ListTurmaEstudantesUseCase } from "../application/TurmaUseCases";
import { Request, Response } from "express";

const repository = PrismaTurmaRepository(PrismaProvider);

export const TurmaContainer = {
  list: (req: Request, res: Response) => ListTurmasUseCase(ResponseProvider(res), (curso?: string) => repository.findAll(curso))(req),
  getById: (req: Request, res: Response) => GetTurmaUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  create: (req: Request, res: Response) => CreateTurmaUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateTurmaUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteTurmaUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id))(req),
  listEstudantes: (req: Request, res: Response) => ListTurmaEstudantesUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (turmaId: string) => repository.findEstudantes(turmaId))(req),
};
