import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IPermissaoBase {
  id: string;
  modulo: string;
  descricao?: string | null;
  admin: boolean;
  professor: boolean;
  aluno: boolean;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export interface PermissaoFilters {
  modulo?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface IPermissaoRepository {
  findAll(filters: PermissaoFilters): Promise<PaginatedResult<IPermissaoBase>>;
  findById(id: string): Promise<Nullable<IPermissaoBase>>;
  update(id: string, data: any): Promise<IPermissaoBase>;
  getMeuPerfil(userId: string): Promise<any>;
}

type FindAllPermissoes = (filters: PermissaoFilters) => Promise<PaginatedResult<IPermissaoBase>>;
type FindPermissaoById = (id: string) => Promise<Nullable<IPermissaoBase>>;
type UpdatePermissao = (id: string, data: any) => Promise<IPermissaoBase>;
type GetMeuPerfil = (userId: string) => Promise<any>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListPermissoesUseCase = EndpointHandler<[FindAllPermissoes]>;
export type TUpdatePermissaoUseCase = EndpointHandler<[FindPermissaoById, UpdatePermissao]>;
export type TGetMeuPerfilUseCase = EndpointHandler<[GetMeuPerfil]>;
