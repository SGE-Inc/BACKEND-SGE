import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IDashboardRepository {
  getStats(): Promise<any>;
  getDistribuicaoCursos(): Promise<any[]>;
  getEvolucaoMatriculas(ano?: string): Promise<any[]>;
  getMediaDisciplinas(): Promise<any[]>;
  getUltimosLogs(limite?: number): Promise<any[]>;
  getProximosEventos(): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetStatsUseCase = EndpointHandler<[() => Promise<any>]>;
export type TGetDistribuicaoCursosUseCase = EndpointHandler<[() => Promise<any[]>]>;
export type TGetEvolucaoMatriculasUseCase = EndpointHandler<[(ano?: string) => Promise<any[]>]>;
export type TGetMediaDisciplinasUseCase = EndpointHandler<[() => Promise<any[]>]>;
export type TGetUltimosLogsUseCase = EndpointHandler<[(limite?: number) => Promise<any[]>]>;
export type TGetProximosEventosUseCase = EndpointHandler<[() => Promise<any[]>]>;
