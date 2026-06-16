import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IEstudanteBase {
  id: string;
  userId: string;
  nome: string;
  email?: string | null;
  telefone?: string | null;
  numeroProcesso: string;
  turma?: string | null;
  turmaId?: string | null;
  curso?: string | null;
  classe?: string | null;
  dataNascimento: Date;
  tipoIdentificacao: string;
  numeroIdentificacao: string;
  genero?: string | null;
  turno?: string | null;
  nomePai?: string | null;
  nomeMae?: string | null;
  encarregadoNome?: string | null;
  encarregadoParentesco?: string | null;
  encarregadoTelefone?: string | null;
  status: string;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

export interface EstudanteFilters {
  curso?: string;
  turma?: string;
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface IEstudanteRepository {
  findAll(filters: EstudanteFilters): Promise<PaginatedResult<IEstudanteBase>>;
  findById(id: string): Promise<Nullable<IEstudanteBase>>;
  findByProcesso(numeroProcesso: string): Promise<Nullable<IEstudanteBase>>;
  save(data: any): Promise<IEstudanteBase>;
  update(id: string, data: any): Promise<IEstudanteBase>;
  delete(id: string): Promise<void>;
  changeStatus(id: string, status: string, motivo?: string): Promise<IEstudanteBase>;
  transfer(id: string, novaTurmaId: string, motivo?: string): Promise<IEstudanteBase>;
  getHistorico(id: string): Promise<any>;
}

type FindAllEstudantes = (filters: EstudanteFilters) => Promise<PaginatedResult<IEstudanteBase>>;
type FindEstudanteById = (id: string) => Promise<Nullable<IEstudanteBase>>;
type FindEstudanteByProcesso = (processo: string) => Promise<Nullable<IEstudanteBase>>;
type SaveEstudante = (data: any) => Promise<IEstudanteBase>;
type UpdateEstudante = (id: string, data: any) => Promise<IEstudanteBase>;
type DeleteEstudante = (id: string) => Promise<void>;
type ChangeEstudanteStatus = (id: string, status: string, motivo?: string) => Promise<IEstudanteBase>;
type TransferEstudante = (id: string, novaTurmaId: string, motivo?: string) => Promise<IEstudanteBase>;
type GetEstudanteHistorico = (id: string) => Promise<any>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListEstudantesUseCase = EndpointHandler<[FindAllEstudantes]>;
export type TGetEstudanteUseCase = EndpointHandler<[FindEstudanteById]>;
export type TGetEstudanteByProcessoUseCase = EndpointHandler<[FindEstudanteByProcesso]>;
export type TCreateEstudanteUseCase = EndpointHandler<[SaveEstudante]>;
export type TUpdateEstudanteUseCase = EndpointHandler<[FindEstudanteById, UpdateEstudante]>;
export type TDeleteEstudanteUseCase = EndpointHandler<[FindEstudanteById, DeleteEstudante]>;
export type TChangeEstudanteStatusUseCase = EndpointHandler<[FindEstudanteById, ChangeEstudanteStatus]>;
export type TTransferEstudanteUseCase = EndpointHandler<[FindEstudanteById, TransferEstudante]>;
export type TGetEstudanteHistoricoUseCase = EndpointHandler<[GetEstudanteHistorico]>;
