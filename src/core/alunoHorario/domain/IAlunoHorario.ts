import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoHorarioRepository {
  findByTurmaId(turmaId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetAlunoHorarioUseCase = EndpointHandler<[(turmaId: string) => Promise<any[]>]>;
