import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaDashboardRepository } from "./PrismaDashboardRepository";
import { GetStatsUseCase, GetDistribuicaoCursosUseCase, GetEvolucaoMatriculasUseCase, GetMediaDisciplinasUseCase, GetUltimosLogsUseCase, GetProximosEventosUseCase } from "../application/DashboardUseCases";
import { Request, Response } from "express";

const repository = PrismaDashboardRepository(PrismaProvider);

export const DashboardContainer = {
  getStats: (req: Request, res: Response) => GetStatsUseCase(ResponseProvider(res), () => repository.getStats())(req),
  getDistribuicaoCursos: (req: Request, res: Response) => GetDistribuicaoCursosUseCase(ResponseProvider(res), () => repository.getDistribuicaoCursos())(req),
  getEvolucaoMatriculas: (req: Request, res: Response) => GetEvolucaoMatriculasUseCase(ResponseProvider(res), (ano?: string) => repository.getEvolucaoMatriculas(ano))(req),
  getMediaDisciplinas: (req: Request, res: Response) => GetMediaDisciplinasUseCase(ResponseProvider(res), () => repository.getMediaDisciplinas())(req),
  getUltimosLogs: (req: Request, res: Response) => GetUltimosLogsUseCase(ResponseProvider(res), (limite?: number) => repository.getUltimosLogs(limite))(req),
  getProximosEventos: (req: Request, res: Response) => GetProximosEventosUseCase(ResponseProvider(res), () => repository.getProximosEventos())(req),
};
