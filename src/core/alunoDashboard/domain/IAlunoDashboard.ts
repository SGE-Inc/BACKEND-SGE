import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoDashboardRepository {
  getStats(alunoId: string): Promise<any>;
  getRanking(turmaId: string, alunoId: string): Promise<any[]>;
  getMelhoresDisciplinas(alunoId: string): Promise<any[]>;
  getDistribuicaoNotas(alunoId: string): Promise<any>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetAlunoDashboardStatsUseCase = EndpointHandler<[(alunoId: string) => Promise<any>]>;
export type TGetAlunoRankingUseCase = EndpointHandler<[(turmaId: string, alunoId: string) => Promise<any[]>]>;
export type TGetAlunoMelhoresDisciplinasUseCase = EndpointHandler<[(alunoId: string) => Promise<any[]>]>;
export type TGetAlunoDistribuicaoNotasUseCase = EndpointHandler<[(alunoId: string) => Promise<any>]>;
