import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IParametroAvaliacaoBase {
  id: string;
  sigla: string;
  nome: string;
  peso: number;
  ordem: number;
  descricao?: string | null;
}

export interface IParametroAvaliacaoRepository {
  findAll(): Promise<IParametroAvaliacaoBase[]>;
  update(id: string, data: any): Promise<IParametroAvaliacaoBase>;
  upsertBySigla(data: any): Promise<IParametroAvaliacaoBase>;
}

type FindAllParametros = () => Promise<IParametroAvaliacaoBase[]>;
type UpdateParametro = (id: string, data: any) => Promise<IParametroAvaliacaoBase>;
type UpsertParametroBySigla = (data: any) => Promise<IParametroAvaliacaoBase>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListParametrosAvaliacaoUseCase = EndpointHandler<[FindAllParametros]>;
export type TUpdateParametroAvaliacaoUseCase = EndpointHandler<[FindAllParametros, UpdateParametro]>;
export type TUpsertParametroAvaliacaoUseCase = EndpointHandler<[UpsertParametroBySigla]>;
