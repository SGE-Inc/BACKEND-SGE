import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IProfessorDashboardRepository {
  getStats(professorId: string): Promise<any>;
  getDisciplinas(professorId: string): Promise<any[]>;
  getProximosEventos(professorId: string): Promise<any[]>;
  getHorarioSemanal(professorId: string): Promise<any[]>;
  getTurmas(professorId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetProfessorStatsUseCase = EndpointHandler<[(professorId: string) => Promise<any>]>;
export type TGetProfessorDisciplinasUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
export type TGetProfessorProximosEventosUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
export type TGetProfessorHorarioSemanalUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
export type TGetProfessorTurmasUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
