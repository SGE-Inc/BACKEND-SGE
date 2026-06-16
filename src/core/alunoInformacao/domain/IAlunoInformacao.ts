import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoInformacaoRepository {
  findAll(): Promise<any[]>;
  findById(id: string): Promise<any>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListAlunoInformacoesUseCase = EndpointHandler<[() => Promise<any[]>]>;
export type TGetAlunoInformacaoUseCase = EndpointHandler<[(id: string) => Promise<any>]>;
