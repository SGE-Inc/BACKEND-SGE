import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAdminUtilizadorRepository } from "./PrismaAdminUtilizadorRepository";
import {
  ListAdminUtilizadoresUseCase, CreateAdminUtilizadorUseCase, UpdateAdminUtilizadorUseCase,
  ToggleAdminUtilizadorStatusUseCase, DeleteAdminUtilizadorUseCase,
} from "../application/AdminUtilizadorUseCases";
import { Request, Response } from "express";

const repository = PrismaAdminUtilizadorRepository(PrismaProvider);

export const AdminUtilizadorContainer = {
  list: (req: Request, res: Response) => ListAdminUtilizadoresUseCase(ResponseProvider(res), (filters: any) => repository.findAll(filters))(req),
  create: (req: Request, res: Response) => CreateAdminUtilizadorUseCase(ResponseProvider(res), (data: any) => repository.save(data))(req),
  update: (req: Request, res: Response) => UpdateAdminUtilizadorUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  toggleStatus: (req: Request, res: Response) => ToggleAdminUtilizadorStatusUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.toggleStatus(id))(req),
  delete: (req: Request, res: Response) => DeleteAdminUtilizadorUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string) => repository.delete(id), () => repository.countSuperAdmins())(req),
};
