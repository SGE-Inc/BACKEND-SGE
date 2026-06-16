import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorHorarioRepository } from "./PrismaProfessorHorarioRepository";
import { GetHorarioUseCase } from "../application/ProfessorHorarioUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorHorarioRepository(PrismaProvider);

export const ProfessorHorarioContainer = {
  get: (req: Request, res: Response) => GetHorarioUseCase(ResponseProvider(res), (id: string) => repository.findByProfessorId(id))(req),
};
