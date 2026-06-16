import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { THashProviderImp } from "@/shared/providers/HashProvider/domain/IHashProvider";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IProfessorBase {
  id: string;
  userId: string;
  nome: string;
  email: string;
  cargo: string;
  contacto?: string | null;
  status: string;
}

export interface IProfessorRepository {
  findAll(): Promise<IProfessorBase[]>;
  findById(id: string): Promise<Nullable<IProfessorBase>>;
  save(professor: any): Promise<IProfessorBase>;
  update(id: string, data: any): Promise<IProfessorBase>;
  delete(id: string): Promise<void>;
  toggleStatus(id: string): Promise<IProfessorBase>;
}

export type FindAllProfessores = () => Promise<IProfessorBase[]>;
export type TFindAllProfessores = (repository: IProfessorRepository) => FindAllProfessores;

export type FindProfessorById = (id: string) => Promise<Nullable<IProfessorBase>>;
export type TFindProfessorById = (repository: IProfessorRepository) => FindProfessorById;

export type SaveProfessor = (data: any) => Promise<IProfessorBase>;
export type TSaveProfessor = (repository: IProfessorRepository) => SaveProfessor;

export type UpdateProfessor = (id: string, data: any) => Promise<IProfessorBase>;
export type TUpdateProfessor = (repository: IProfessorRepository) => UpdateProfessor;

export type DeleteProfessor = (id: string) => Promise<void>;
export type TDeleteProfessor = (repository: IProfessorRepository) => DeleteProfessor;

export type ToggleProfessorStatus = (id: string) => Promise<IProfessorBase>;
export type TToggleProfessorStatus = (repository: IProfessorRepository) => ToggleProfessorStatus;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListProfessoresUseCase = EndpointHandler<[FindAllProfessores]>;
export type TGetProfessorUseCase = EndpointHandler<[FindProfessorById]>;
export type TCreateProfessorUseCase = EndpointHandler<[THashProviderImp, SaveProfessor]>;
export type TUpdateProfessorUseCase = EndpointHandler<[FindProfessorById, UpdateProfessor]>;
export type TDeleteProfessorUseCase = EndpointHandler<[FindProfessorById, DeleteProfessor]>;
export type TToggleProfessorStatusUseCase = EndpointHandler<[FindProfessorById, ToggleProfessorStatus]>;
