import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IProfessorExameRepository {
  findByProfessorId(professorId: string): Promise<any[]>;
  findById(id: string): Promise<any>;
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  delete(id: string): Promise<void>;
  findResultados(exameId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListProfessorExamesUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
export type TGetProfessorExameUseCase = EndpointHandler<[(id: string) => Promise<any>]>;
export type TCreateProfessorExameUseCase = EndpointHandler<[(data: any) => Promise<any>]>;
export type TUpdateProfessorExameUseCase = EndpointHandler<[(id: string, data: any) => Promise<any>]>;
export type TDeleteProfessorExameUseCase = EndpointHandler<[(id: string) => Promise<void>]>;
export type TGetResultadosExameUseCase = EndpointHandler<[(exameId: string) => Promise<any[]>]>;
