import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorDashboardRepository } from "./PrismaProfessorDashboardRepository";
import { GetProfessorStatsUseCase, GetProfessorDisciplinasUseCase, GetProfessorProximosEventosUseCase, GetProfessorHorarioSemanalUseCase, GetProfessorTurmasUseCase } from "../application/ProfessorDashboardUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorDashboardRepository(PrismaProvider);

export const ProfessorDashboardContainer = {
  getStats: (req: Request, res: Response) => GetProfessorStatsUseCase(ResponseProvider(res), (id: string) => repository.getStats(id))(req),
  getDisciplinas: (req: Request, res: Response) => GetProfessorDisciplinasUseCase(ResponseProvider(res), (id: string) => repository.getDisciplinas(id))(req),
  getProximosEventos: (req: Request, res: Response) => GetProfessorProximosEventosUseCase(ResponseProvider(res), (id: string) => repository.getProximosEventos(id))(req),
  getHorarioSemanal: (req: Request, res: Response) => GetProfessorHorarioSemanalUseCase(ResponseProvider(res), (id: string) => repository.getHorarioSemanal(id))(req),
  getTurmas: (req: Request, res: Response) => GetProfessorTurmasUseCase(ResponseProvider(res), (id: string) => repository.getTurmas(id))(req),
};
