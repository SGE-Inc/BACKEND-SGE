import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaCursoRepository } from "./PrismaCursoRepository";
import { ListCursosUseCase, GetCursoUseCase, CreateCursoUseCase, UpdateCursoUseCase, DeleteCursoUseCase } from "../application/CursoUseCases";
import { Request, Response } from "express";

const repository = PrismaCursoRepository(PrismaProvider);

export const CursoContainer = {
  list: (req: Request, res: Response) => ListCursosUseCase(ResponseProvider(res), () => repository.findAll())(req),
  getById: (req: Request, res: Response) => GetCursoUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  create: (req: Request, res: Response) => CreateCursoUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateCursoUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteCursoUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id))(req),
};
