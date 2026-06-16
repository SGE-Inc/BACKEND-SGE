import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaPermissaoRepository } from "./PrismaPermissaoRepository";
import { ListPermissoesUseCase, UpdatePermissaoUseCase, GetMeuPerfilUseCase } from "../application/PermissaoUseCases";
import { Request, Response } from "express";

const repository = PrismaPermissaoRepository(PrismaProvider);

export const PermissaoContainer = {
  list: (req: Request, res: Response) => ListPermissoesUseCase(ResponseProvider(res), (filters: any) => repository.findAll(filters))(req),
  update: (req: Request, res: Response) => UpdatePermissaoUseCase(ResponseProvider(res), (id: string) => repository.findById(id), (id: string, data: any) => repository.update(id, data))(req),
  getMeuPerfil: (req: Request, res: Response) => GetMeuPerfilUseCase(ResponseProvider(res), (userId: string) => repository.getMeuPerfil(userId))(req),
};
