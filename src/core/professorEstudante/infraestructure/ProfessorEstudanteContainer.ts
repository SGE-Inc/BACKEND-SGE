import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorEstudanteRepository } from "./PrismaProfessorEstudanteRepository";
import { ListEstudantesByTurmaUseCase, ListEstudantesByDisciplinaUseCase, GetNotasEstudanteUseCase, GetFaltasEstudanteUseCase } from "../application/ProfessorEstudanteUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorEstudanteRepository(PrismaProvider);

export const ProfessorEstudanteContainer = {
  listByTurma: (req: Request, res: Response) => ListEstudantesByTurmaUseCase(ResponseProvider(res), (turmaId: string) => repository.findByTurma(turmaId))(req),
  listByDisciplina: (req: Request, res: Response) => ListEstudantesByDisciplinaUseCase(ResponseProvider(res), (disciplinaId: string) => repository.findByDisciplina(disciplinaId))(req),
  getNotas: (req: Request, res: Response) => GetNotasEstudanteUseCase(ResponseProvider(res), (alunoId: string, disciplinaId: string) => repository.findNotas(alunoId, disciplinaId))(req),
  getFaltas: (req: Request, res: Response) => GetFaltasEstudanteUseCase(ResponseProvider(res), (alunoId: string, disciplinaId: string) => repository.findFaltas(alunoId, disciplinaId))(req),
};
