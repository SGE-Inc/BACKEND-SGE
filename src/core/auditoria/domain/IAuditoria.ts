import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IAuditoriaLog {
  id: string;
  tipo: string;
  descricao: string;
  utilizador: string;
  utilizadorId?: string | null;
  role: string;
  entidade?: string | null;
  entidadeId?: string | null;
  data: string;
}

export interface IAuditoriaRepository {
  findAll(filters: { page?: number; limit?: number; tipo?: string; role?: string; utilizador?: string; dataInicio?: string; dataFim?: string }): Promise<{ data: IAuditoriaLog[]; pagination: { page: number; limit: number; total: number; totalPages: number } }>;
  findById(id: string): Promise<Nullable<IAuditoriaLog>>;
  getEstatisticas(periodo?: string): Promise<any>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListAuditoriaUseCase = EndpointHandler<[(filters: any) => Promise<any>]>;
export type TGetAuditoriaUseCase = EndpointHandler<[(id: string) => Promise<Nullable<IAuditoriaLog>>]>;
export type TGetAuditoriaEstatisticasUseCase = EndpointHandler<[(periodo?: string) => Promise<any>]>;
