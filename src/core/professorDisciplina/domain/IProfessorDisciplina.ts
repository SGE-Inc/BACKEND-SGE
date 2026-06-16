import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IMaterialBase {
  id: string;
  titulo: string;
  descricao?: string | null;
  tipo: string;
  url?: string | null;
  ficheiro?: string | null;
  tamanho?: number | null;
  visivel: boolean;
  disciplinaId: string;
  professorId: string;
  createdAt: Date;
}

export interface IAvisoBase {
  id: string;
  texto: string;
  disciplinaId: string;
  autor: string;
  professorId: string;
  createdAt: Date;
}

export interface IAlunoDisciplina {
  id: string;
  nome: string;
  numeroProcesso: string;
  email?: string | null;
}

export interface IProfessorDisciplinaRepository {
  findByProfessorId(professorId: string): Promise<any[]>;
  findMateriaisByDisciplina(disciplinaId: string, professorId: string): Promise<IMaterialBase[]>;
  createMaterial(data: any): Promise<IMaterialBase>;
  updateMaterial(id: string, data: any): Promise<IMaterialBase>;
  deleteMaterial(id: string): Promise<void>;
  findAvisosByDisciplina(disciplinaId: string, professorId: string): Promise<IAvisoBase[]>;
  createAviso(data: any): Promise<IAvisoBase>;
  deleteAviso(id: string): Promise<void>;
  findAlunosByDisciplinaTurma(disciplinaId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListProfessorDisciplinasUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
export type TListMateriaisUseCase = EndpointHandler<[(disciplinaId: string, professorId: string) => Promise<IMaterialBase[]>]>;
export type TCreateMaterialUseCase = EndpointHandler<[(data: any) => Promise<IMaterialBase>]>;
export type TUpdateMaterialUseCase = EndpointHandler<[(id: string, data: any) => Promise<IMaterialBase>]>;
export type TDeleteMaterialUseCase = EndpointHandler<[(id: string) => Promise<void>]>;
export type TListAvisosUseCase = EndpointHandler<[(disciplinaId: string, professorId: string) => Promise<IAvisoBase[]>]>;
export type TCreateAvisoUseCase = EndpointHandler<[(data: any) => Promise<IAvisoBase>]>;
export type TDeleteAvisoUseCase = EndpointHandler<[(id: string) => Promise<void>]>;
export type TListAlunosDisciplinaUseCase = EndpointHandler<[(disciplinaId: string) => Promise<any[]>]>;
