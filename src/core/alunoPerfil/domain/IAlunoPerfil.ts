import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoPerfilRepository {
  findById(userId: string): Promise<any>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetAlunoPerfilUseCase = EndpointHandler<[(userId: string) => Promise<any>]>;
