import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoBoletimRepository {
  getBoletins(alunoId: string): Promise<any>;
  getBoletimByTrimestre(alunoId: string, trimestre: string): Promise<any>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetAlunoBoletinsUseCase = EndpointHandler<[(alunoId: string) => Promise<any>]>;
export type TGetAlunoBoletimTrimestreUseCase = EndpointHandler<[(alunoId: string, trimestre: string) => Promise<any>]>;
