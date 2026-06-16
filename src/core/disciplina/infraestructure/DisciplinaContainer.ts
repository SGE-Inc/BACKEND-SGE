import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaDisciplinaRepository } from "./PrismaDisciplinaRepository";
import { ListDisciplinasUseCase, GetDisciplinaUseCase, CreateDisciplinaUseCase, UpdateDisciplinaUseCase, DeleteDisciplinaUseCase } from "../application/DisciplinaUseCases";
import { Request, Response } from "express";

const repository = PrismaDisciplinaRepository(PrismaProvider);

export const DisciplinaContainer = {
  list: (req: Request, res: Response) => ListDisciplinasUseCase(ResponseProvider(res), (curso?: string, classe?: string) => repository.findAll(curso, classe))(req),
  getById: (req: Request, res: Response) => GetDisciplinaUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  create: (req: Request, res: Response) => CreateDisciplinaUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateDisciplinaUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteDisciplinaUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id))(req),
};
