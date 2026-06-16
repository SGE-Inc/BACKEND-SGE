import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IRelatorioRepository {
  estudantesPorCurso(anoLectivo?: string): Promise<any[]>;
  aprovacaoPorTurma(trimestre?: string, anoLectivo?: string): Promise<any[]>;
  desempenhoDisciplinas(curso?: string, trimestre?: string): Promise<any[]>;
  professoresCargaHoraria(): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TEstudantesPorCursoUseCase = EndpointHandler<[(anoLectivo?: string) => Promise<any[]>]>;
export type TAprovacaoPorTurmaUseCase = EndpointHandler<[(trimestre?: string, anoLectivo?: string) => Promise<any[]>]>;
export type TDesempenhoDisciplinasUseCase = EndpointHandler<[(curso?: string, trimestre?: string) => Promise<any[]>]>;
export type TProfessoresCargaHorariaUseCase = EndpointHandler<[() => Promise<any[]>]>;
