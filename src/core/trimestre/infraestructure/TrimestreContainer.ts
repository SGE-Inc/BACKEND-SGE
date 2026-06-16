import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaTrimestreRepository } from "./PrismaTrimestreRepository";
import { ListTrimestresUseCase, DefineTrimestresUseCase } from "../application/TrimestreUseCases";
import { Request, Response } from "express";

const repository = PrismaTrimestreRepository(PrismaProvider);

export const TrimestreContainer = {
  list: (req: Request, res: Response) => ListTrimestresUseCase(ResponseProvider(res), (anoLectivo?: string) => repository.findAll(anoLectivo))(req),
  define: (req: Request, res: Response) => DefineTrimestresUseCase(ResponseProvider(res), (anoLectivo: string, trimestres: any[]) => repository.define(anoLectivo, trimestres))(req),
};
