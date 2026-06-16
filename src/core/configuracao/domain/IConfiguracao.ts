import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IInstituicao {
  id: string;
  nome: string;
  sigla: string;
  endereco?: string | null;
  telefone?: string | null;
  email?: string | null;
  website?: string | null;
  diretor?: string | null;
  logotipo?: string | null;
}

export interface IAnoLectivo {
  id: string;
  ano: string;
  dataInicio: Date;
  dataFim: Date;
  activo: boolean;
}

export interface IConfiguracaoRepository {
  getInstituicao(): Promise<Nullable<IInstituicao>>;
  updateInstituicao(data: any): Promise<IInstituicao>;
  uploadLogotipo(filePath: string): Promise<IInstituicao>;
  listAnosLectivos(): Promise<IAnoLectivo[]>;
  createAnoLectivo(data: any): Promise<IAnoLectivo>;
  activateAnoLectivo(id: string): Promise<IAnoLectivo>;
  updateAnoLectivo(id: string, data: any): Promise<IAnoLectivo>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetInstituicaoUseCase = EndpointHandler<[() => Promise<Nullable<IInstituicao>>]>;
export type TUpdateInstituicaoUseCase = EndpointHandler<[(data: any) => Promise<IInstituicao>]>;
export type TUploadLogotipoUseCase = EndpointHandler<[(filePath: string) => Promise<IInstituicao>]>;
export type TListAnosLectivosUseCase = EndpointHandler<[() => Promise<IAnoLectivo[]>]>;
export type TCreateAnoLectivoUseCase = EndpointHandler<[(data: any) => Promise<IAnoLectivo>]>;
export type TActivateAnoLectivoUseCase = EndpointHandler<[(id: string) => Promise<IAnoLectivo>]>;
export type TUpdateAnoLectivoUseCase = EndpointHandler<[(id: string, data: any) => Promise<IAnoLectivo>]>;
