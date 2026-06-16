import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IAdminUtilizadorBase {
  id: string;
  nome: string;
  email: string;
  telefone?: string | null;
  role: string;
  status: string;
  cargo?: string | null;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export interface AdminUtilizadorFilters {
  search?: string;
  role?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export interface IAdminUtilizadorRepository {
  findAll(filters: AdminUtilizadorFilters): Promise<PaginatedResult<IAdminUtilizadorBase>>;
  findById(id: string): Promise<Nullable<IAdminUtilizadorBase>>;
  save(data: any): Promise<IAdminUtilizadorBase>;
  update(id: string, data: any): Promise<IAdminUtilizadorBase>;
  toggleStatus(id: string): Promise<IAdminUtilizadorBase>;
  delete(id: string): Promise<void>;
  countSuperAdmins(): Promise<number>;
}

type FindAllAdminUtilizadores = (filters: AdminUtilizadorFilters) => Promise<PaginatedResult<IAdminUtilizadorBase>>;
type FindAdminUtilizadorById = (id: string) => Promise<Nullable<IAdminUtilizadorBase>>;
type SaveAdminUtilizador = (data: any) => Promise<IAdminUtilizadorBase>;
type UpdateAdminUtilizador = (id: string, data: any) => Promise<IAdminUtilizadorBase>;
type ToggleAdminUtilizadorStatus = (id: string) => Promise<IAdminUtilizadorBase>;
type DeleteAdminUtilizador = (id: string) => Promise<void>;
type CountSuperAdmins = () => Promise<number>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListAdminUtilizadoresUseCase = EndpointHandler<[FindAllAdminUtilizadores]>;
export type TCreateAdminUtilizadorUseCase = EndpointHandler<[SaveAdminUtilizador]>;
export type TUpdateAdminUtilizadorUseCase = EndpointHandler<[FindAdminUtilizadorById, UpdateAdminUtilizador]>;
export type TToggleAdminUtilizadorStatusUseCase = EndpointHandler<[FindAdminUtilizadorById, ToggleAdminUtilizadorStatus]>;
export type TDeleteAdminUtilizadorUseCase = EndpointHandler<[FindAdminUtilizadorById, DeleteAdminUtilizador, CountSuperAdmins]>;
