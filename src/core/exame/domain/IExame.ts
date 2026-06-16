import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IExameBase {
  id: string;
  disciplinaId: string;
  turmaId: string;
  data: Date;
  hora: string;
  sala: string;
  tipo: string;
  trimestre: string;
  estado: string;
  curso?: string | null;
  observacoes?: string | null;
  disciplina?: any | null;
  turma?: any | null;
  resultados?: any[] | null;
}

export interface IEpocaExame {
  id: string;
  label: string;
  trimestre: string;
  dataInicio: Date;
  dataFim: Date;
  tipo: string;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export interface ExameFilters {
  disciplinaId?: string;
  turmaId?: string;
  tipo?: string;
  trimestre?: string;
  estado?: string;
  curso?: string;
  page?: number;
  limit?: number;
}

export interface IExameRepository {
  findAll(filters: ExameFilters): Promise<PaginatedResult<IExameBase>>;
  findById(id: string): Promise<Nullable<IExameBase>>;
  save(data: any): Promise<IExameBase>;
  update(id: string, data: any): Promise<IExameBase>;
  delete(id: string): Promise<void>;
  changeEstado(id: string, estado: string): Promise<IExameBase>;
  lancarResultados(id: string, resultados: any[]): Promise<any>;
  getResultados(id: string): Promise<any>;
  getCalendario(filters?: any): Promise<IExameBase[]>;
  getHistorico(id: string): Promise<any>;
  listEpocas(): Promise<IEpocaExame[]>;
  createEpoca(data: any): Promise<IEpocaExame>;
}

type FindAllExames = (filters: ExameFilters) => Promise<PaginatedResult<IExameBase>>;
type FindExameById = (id: string) => Promise<Nullable<IExameBase>>;
type SaveExame = (data: any) => Promise<IExameBase>;
type UpdateExame = (id: string, data: any) => Promise<IExameBase>;
type DeleteExame = (id: string) => Promise<void>;
type ChangeExameEstado = (id: string, estado: string) => Promise<IExameBase>;
type LancarExameResultados = (id: string, resultados: any[]) => Promise<any>;
type GetExameResultados = (id: string) => Promise<any>;
type GetExameCalendario = (filters?: any) => Promise<IExameBase[]>;
type GetExameHistorico = (id: string) => Promise<any>;
type ListEpocasExame = () => Promise<IEpocaExame[]>;
type CreateEpocaExame = (data: any) => Promise<IEpocaExame>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListExamesUseCase = EndpointHandler<[FindAllExames]>;
export type TGetExameUseCase = EndpointHandler<[FindExameById]>;
export type TCreateExameUseCase = EndpointHandler<[SaveExame]>;
export type TUpdateExameUseCase = EndpointHandler<[FindExameById, UpdateExame]>;
export type TDeleteExameUseCase = EndpointHandler<[FindExameById, DeleteExame]>;
export type TChangeExameEstadoUseCase = EndpointHandler<[FindExameById, ChangeExameEstado]>;
export type TLancarExameResultadosUseCase = EndpointHandler<[FindExameById, LancarExameResultados]>;
export type TGetExameResultadosUseCase = EndpointHandler<[GetExameResultados]>;
export type TGetExameCalendarioUseCase = EndpointHandler<[GetExameCalendario]>;
export type TGetExameHistoricoUseCase = EndpointHandler<[GetExameHistorico]>;
export type TListEpocasExameUseCase = EndpointHandler<[ListEpocasExame]>;
export type TCreateEpocaExameUseCase = EndpointHandler<[CreateEpocaExame]>;
