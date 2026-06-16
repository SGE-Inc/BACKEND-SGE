import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaCargoRepository } from "./PrismaCargoRepository";
import { ListCargosUseCase, GetCargoUseCase, CreateCargoUseCase, UpdateCargoUseCase, DeleteCargoUseCase } from "../application/CargoUseCases";
import { Request, Response } from "express";

const repository = PrismaCargoRepository(PrismaProvider);

export const CargoContainer = {
  list: (req: Request, res: Response) => ListCargosUseCase(ResponseProvider(res), (filters: any) => repository.findAll(filters))(req),
  getById: (req: Request, res: Response) => GetCargoUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
  create: (req: Request, res: Response) => CreateCargoUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateCargoUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  delete: (req: Request, res: Response) => DeleteCargoUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id))(req),
};
