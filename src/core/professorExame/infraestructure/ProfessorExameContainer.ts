import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorExameRepository } from "./PrismaProfessorExameRepository";
import { ListProfessorExamesUseCase, GetProfessorExameUseCase, CreateProfessorExameUseCase, UpdateProfessorExameUseCase, DeleteProfessorExameUseCase, GetResultadosExameUseCase } from "../application/ProfessorExameUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorExameRepository(PrismaProvider);

export const ProfessorExameContainer = {
  list: (req: Request, res: Response) => ListProfessorExamesUseCase(ResponseProvider(res), (id: string) => repository.findByProfessorId(id))(req),
  getById: (req: Request, res: Response) => GetProfessorExameUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  create: (req: Request, res: Response) => CreateProfessorExameUseCase(ResponseProvider(res), (data: any) => repository.create(data))(req),
  update: (req: Request, res: Response) => UpdateProfessorExameUseCase(ResponseProvider(res), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteProfessorExameUseCase(ResponseProvider(res), (id: string) => repository.delete(id))(req),
  getResultados: (req: Request, res: Response) => GetResultadosExameUseCase(ResponseProvider(res), (exameId: string) => repository.findResultados(exameId))(req),
};
