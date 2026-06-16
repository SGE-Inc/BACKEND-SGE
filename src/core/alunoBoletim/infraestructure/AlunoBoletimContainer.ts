import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoBoletimRepository } from "./PrismaAlunoBoletimRepository";
import { GetAlunoBoletinsUseCase, GetAlunoBoletimTrimestreUseCase } from "../application/AlunoBoletimUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoBoletimRepository(PrismaProvider);

export const AlunoBoletimContainer = {
  list: (req: Request, res: Response) => GetAlunoBoletinsUseCase(ResponseProvider(res), (id: string) => repository.getBoletins(id))(req),
  getByTrimestre: (req: Request, res: Response) => GetAlunoBoletimTrimestreUseCase(ResponseProvider(res), (id: string, trimestre: string) => repository.getBoletimByTrimestre(id, trimestre))(req),
};
