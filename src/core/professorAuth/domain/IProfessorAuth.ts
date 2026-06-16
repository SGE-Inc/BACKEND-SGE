import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { THashProviderImp, TComapreProviderImp } from "@/shared/providers/HashProvider/domain/IHashProvider";
import { TCreateJwtProviderImp } from "@/shared/providers/JwtProvider/domain/TJwtProvider";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IProfessorUserBase {
  id: string;
  professorId: string;
  nome: string;
  email?: string | null;
  numeroUtilizador?: string | null;
  senhaHash: string;
  cargo: string;
  contacto?: string | null;
  status: string;
}

export interface IProfessorAuthRepository {
  findByNumeroUtilizador(numero: string): Promise<Nullable<IProfessorUserBase>>;
  findById(id: string): Promise<Nullable<IProfessorUserBase>>;
  updateSenha(id: string, senhaHash: string): Promise<void>;
}

export type FindProfessorByNumero = (numero: string) => Promise<Nullable<IProfessorUserBase>>;
export type TFindProfessorByNumero = (repository: IProfessorAuthRepository) => FindProfessorByNumero;

export type FindProfessorById = (id: string) => Promise<Nullable<IProfessorUserBase>>;
export type TFindProfessorById = (repository: IProfessorAuthRepository) => FindProfessorById;

export type UpdateProfessorSenha = (id: string, senhaHash: string) => Promise<void>;
export type TUpdateProfessorSenha = (repository: IProfessorAuthRepository) => UpdateProfessorSenha;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TProfessorLoginUseCase = EndpointHandler<[TComapreProviderImp, TCreateJwtProviderImp, FindProfessorByNumero]>;
export type TProfessorMeUseCase = EndpointHandler<[FindProfessorById]>;
export type TProfessorResetSenhaUseCase = EndpointHandler<[TComapreProviderImp, THashProviderImp, FindProfessorById, UpdateProfessorSenha]>;
