import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoProvaRepository {
  getCalendario(alunoId: string, trimestre?: string, calendario?: string): Promise<any[]>;
  getEpocas(): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetAlunoCalendarioProvasUseCase = EndpointHandler<[(alunoId: string, trimestre?: string, calendario?: string) => Promise<any[]>]>;
export type TGetAlunoEpocasProvaUseCase = EndpointHandler<[() => Promise<any[]>]>;
