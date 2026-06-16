import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoPerfilRepository } from "./PrismaAlunoPerfilRepository";
import { GetAlunoPerfilUseCase } from "../application/AlunoPerfilUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoPerfilRepository(PrismaProvider);

export const AlunoPerfilContainer = {
  me: (req: Request, res: Response) => GetAlunoPerfilUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
};
