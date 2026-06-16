import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoHorarioRepository } from "./PrismaAlunoHorarioRepository";
import { GetAlunoHorarioUseCase } from "../application/AlunoHorarioUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoHorarioRepository(PrismaProvider);

export const AlunoHorarioContainer = {
  get: (req: Request, res: Response) => GetAlunoHorarioUseCase(ResponseProvider(res), (turmaId: string) => repository.findByTurmaId(turmaId))(req),
};
