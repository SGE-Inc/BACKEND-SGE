import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IDisciplinaBase {
  id: string;
  nome: string;
  sigla: string;
  cursoId: string;
  classe: string;
  cargaHoraria: number;
  cor?: string | null;
  cursoNome?: string;
}

export interface IDisciplinaRepository {
  findAll(curso?: string, classe?: string): Promise<IDisciplinaBase[]>;
  findById(id: string): Promise<Nullable<IDisciplinaBase>>;
  save(data: any): Promise<IDisciplinaBase>;
  update(id: string, data: any): Promise<IDisciplinaBase>;
  delete(id: string): Promise<void>;
}

export type FindAllDisciplinas = (curso?: string, classe?: string) => Promise<IDisciplinaBase[]>;
export type FindDisciplinaById = (id: string) => Promise<Nullable<IDisciplinaBase>>;
export type SaveDisciplina = (data: any) => Promise<IDisciplinaBase>;
export type UpdateDisciplina = (id: string, data: any) => Promise<IDisciplinaBase>;
export type DeleteDisciplina = (id: string) => Promise<void>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListDisciplinasUseCase = EndpointHandler<[FindAllDisciplinas]>;
export type TGetDisciplinaUseCase = EndpointHandler<[FindDisciplinaById]>;
export type TCreateDisciplinaUseCase = EndpointHandler<[SaveDisciplina]>;
export type TUpdateDisciplinaUseCase = EndpointHandler<[FindDisciplinaById, UpdateDisciplina]>;
export type TDeleteDisciplinaUseCase = EndpointHandler<[FindDisciplinaById, DeleteDisciplina]>;
