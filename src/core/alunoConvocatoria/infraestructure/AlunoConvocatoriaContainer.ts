import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoConvocatoriaRepository } from "./PrismaAlunoConvocatoriaRepository";
import { ListAlunoConvocatoriasUseCase } from "../application/AlunoConvocatoriaUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoConvocatoriaRepository(PrismaProvider);

export const AlunoConvocatoriaContainer = {
  list: (req: Request, res: Response) => ListAlunoConvocatoriasUseCase(ResponseProvider(res), (id: string) => repository.findByAlunoId(id))(req),
};
