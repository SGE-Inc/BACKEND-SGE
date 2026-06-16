import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface ICursoBase {
  id: string;
  nome: string;
  sigla: string;
  descricao?: string | null;
  ativo: boolean;
}

export interface ICursoRepository {
  findAll(): Promise<ICursoBase[]>;
  findById(id: string): Promise<Nullable<ICursoBase>>;
  findBySigla(sigla: string): Promise<Nullable<ICursoBase>>;
  save(curso: ICursoBase): Promise<ICursoBase>;
  update(id: string, data: Partial<ICursoBase>): Promise<ICursoBase>;
  delete(id: string): Promise<void>;
}

export type FindAllCursos = () => Promise<ICursoBase[]>;
export type FindCursoById = (id: string) => Promise<Nullable<ICursoBase>>;
export type SaveCurso = (data: ICursoBase) => Promise<ICursoBase>;
export type UpdateCurso = (id: string, data: Partial<ICursoBase>) => Promise<ICursoBase>;
export type DeleteCurso = (id: string) => Promise<void>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListCursosUseCase = EndpointHandler<[FindAllCursos]>;
export type TGetCursoUseCase = EndpointHandler<[FindCursoById]>;
export type TCreateCursoUseCase = EndpointHandler<[SaveCurso]>;
export type TUpdateCursoUseCase = EndpointHandler<[FindCursoById, UpdateCurso]>;
export type TDeleteCursoUseCase = EndpointHandler<[FindCursoById, DeleteCurso]>;
