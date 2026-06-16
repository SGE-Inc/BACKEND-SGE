import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoDashboardRepository } from "./PrismaAlunoDashboardRepository";
import { GetAlunoDashboardStatsUseCase, GetAlunoRankingUseCase, GetAlunoMelhoresDisciplinasUseCase, GetAlunoDistribuicaoNotasUseCase } from "../application/AlunoDashboardUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoDashboardRepository(PrismaProvider);

export const AlunoDashboardContainer = {
  getStats: (req: Request, res: Response) => GetAlunoDashboardStatsUseCase(ResponseProvider(res), (id: string) => repository.getStats(id))(req),
  getRanking: (req: Request, res: Response) => GetAlunoRankingUseCase(ResponseProvider(res), (turmaId: string, alunoId: string) => repository.getRanking(turmaId, alunoId))(req),
  getMelhoresDisciplinas: (req: Request, res: Response) => GetAlunoMelhoresDisciplinasUseCase(ResponseProvider(res), (id: string) => repository.getMelhoresDisciplinas(id))(req),
  getDistribuicaoNotas: (req: Request, res: Response) => GetAlunoDistribuicaoNotasUseCase(ResponseProvider(res), (id: string) => repository.getDistribuicaoNotas(id))(req),
};
