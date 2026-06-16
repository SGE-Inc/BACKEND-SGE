import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface ITurmaBase {
  id: string;
  nome: string;
  cursoId: string;
  classe: string;
  vagas: number;
  turno: string;
  anoLectivo: string;
  cursoNome?: string;
  cursoSigla?: string;
  numEstudantes?: number;
}

export interface ITurmaRepository {
  findAll(curso?: string): Promise<ITurmaBase[]>;
  findById(id: string): Promise<Nullable<ITurmaBase>>;
  save(data: any): Promise<ITurmaBase>;
  update(id: string, data: any): Promise<ITurmaBase>;
  delete(id: string): Promise<void>;
  findEstudantes(turmaId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListTurmasUseCase = EndpointHandler<[(curso?: string) => Promise<ITurmaBase[]>]>;
export type TGetTurmaUseCase = EndpointHandler<[(id: string) => Promise<Nullable<ITurmaBase>>]>;
export type TCreateTurmaUseCase = EndpointHandler<[(data: any) => Promise<ITurmaBase>]>;
export type TUpdateTurmaUseCase = EndpointHandler<[(id: string) => Promise<Nullable<ITurmaBase>>, (id: string, data: any) => Promise<ITurmaBase>]>;
export type TDeleteTurmaUseCase = EndpointHandler<[(id: string) => Promise<Nullable<ITurmaBase>>, (id: string) => Promise<void>]>;
export type TListTurmaEstudantesUseCase = EndpointHandler<[(id: string) => Promise<Nullable<ITurmaBase>>, (turmaId: string) => Promise<any[]>]>;
