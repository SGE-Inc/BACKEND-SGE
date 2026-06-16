import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoProvaRepository } from "./PrismaAlunoProvaRepository";
import { GetAlunoCalendarioProvasUseCase, GetAlunoEpocasProvaUseCase } from "../application/AlunoProvaUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoProvaRepository(PrismaProvider);

export const AlunoProvaContainer = {
  getCalendario: (req: Request, res: Response) => GetAlunoCalendarioProvasUseCase(ResponseProvider(res), (id: string, trimestre?: string, calendario?: string) => repository.getCalendario(id, trimestre, calendario))(req),
  getEpocas: (req: Request, res: Response) => GetAlunoEpocasProvaUseCase(ResponseProvider(res), () => repository.getEpocas())(req),
};
