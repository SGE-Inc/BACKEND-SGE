import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoTurmaRepository {
  findDisciplinas(turmaId: string): Promise<any[]>;
  findMateriais(disciplinaId: string): Promise<any[]>;
  submitMaterial(data: any): Promise<any>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListAlunoDisciplinasUseCase = EndpointHandler<[(turmaId: string) => Promise<any[]>]>;
export type TListAlunoMateriaisUseCase = EndpointHandler<[(disciplinaId: string) => Promise<any[]>]>;
export type TSubmitAlunoMaterialUseCase = EndpointHandler<[(data: any) => Promise<any>]>;
