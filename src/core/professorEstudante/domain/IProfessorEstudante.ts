import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IProfessorEstudanteRepository {
  findByTurma(turmaId: string): Promise<any[]>;
  findByDisciplina(disciplinaId: string): Promise<any[]>;
  findNotas(alunoId: string, disciplinaId: string): Promise<any[]>;
  findFaltas(alunoId: string, disciplinaId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListEstudantesByTurmaUseCase = EndpointHandler<[(turmaId: string) => Promise<any[]>]>;
export type TListEstudantesByDisciplinaUseCase = EndpointHandler<[(disciplinaId: string) => Promise<any[]>]>;
export type TGetNotasEstudanteUseCase = EndpointHandler<[(alunoId: string, disciplinaId: string) => Promise<any[]>]>;
export type TGetFaltasEstudanteUseCase = EndpointHandler<[(alunoId: string, disciplinaId: string) => Promise<any[]>]>;
