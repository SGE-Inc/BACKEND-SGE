import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface ITrimestreBase {
  id: string;
  nome: string;
  anoLectivo: string;
  dataInicio: Date;
  dataFim: Date;
}

export interface ITrimestreRepository {
  findAll(anoLectivo?: string): Promise<ITrimestreBase[]>;
  define(anoLectivo: string, trimestres: any[]): Promise<ITrimestreBase[]>;
}

type FindAllTrimestres = (anoLectivo?: string) => Promise<ITrimestreBase[]>;
type DefineTrimestres = (anoLectivo: string, trimestres: any[]) => Promise<ITrimestreBase[]>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListTrimestresUseCase = EndpointHandler<[FindAllTrimestres]>;
export type TDefineTrimestresUseCase = EndpointHandler<[DefineTrimestres]>;
