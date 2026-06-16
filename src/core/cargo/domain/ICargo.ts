import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface ICargoBase {
  id: string;
  nome: string;
  descricao?: string | null;
  tipo: string;
  membros?: any[] | null;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export interface CargoFilters {
  search?: string;
  tipo?: string;
  page?: number;
  limit?: number;
}

export interface ICargoRepository {
  findAll(filters: CargoFilters): Promise<PaginatedResult<ICargoBase>>;
  findById(id: string): Promise<Nullable<ICargoBase>>;
  save(data: any): Promise<ICargoBase>;
  update(id: string, data: any): Promise<ICargoBase>;
  delete(id: string): Promise<void>;
}

type FindAllCargos = (filters: CargoFilters) => Promise<PaginatedResult<ICargoBase>>;
type FindCargoById = (id: string) => Promise<Nullable<ICargoBase>>;
type SaveCargo = (data: any) => Promise<ICargoBase>;
type UpdateCargo = (id: string, data: any) => Promise<ICargoBase>;
type DeleteCargo = (id: string) => Promise<void>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListCargosUseCase = EndpointHandler<[FindAllCargos]>;
export type TGetCargoUseCase = EndpointHandler<[FindCargoById]>;
export type TCreateCargoUseCase = EndpointHandler<[SaveCargo]>;
export type TUpdateCargoUseCase = EndpointHandler<[FindCargoById, UpdateCargo]>;
export type TDeleteCargoUseCase = EndpointHandler<[FindCargoById, DeleteCargo]>;
