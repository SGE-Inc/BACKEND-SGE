import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { THashProviderImp, TComapreProviderImp } from "@/shared/providers/HashProvider/domain/IHashProvider";
import { TCreateJwtProviderImp } from "@/shared/providers/JwtProvider/domain/TJwtProvider";
import { Filter } from "@/shared/Types/IFilter";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IAdminUserBase {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  role: string;
  status: string;
  avatar?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAdminAuthRepository {
  findByEmail(email: string): Promise<Nullable<IAdminUserBase>>;
  findById(id: string): Promise<Nullable<IAdminUserBase>>;
  save(user: IAdminUserBase): Promise<IAdminUserBase>;
  updateSenha(id: string, senhaHash: string): Promise<void>;
}

export type FindAdminByEmail = (email: string) => Promise<Nullable<IAdminUserBase>>;
export type TFindAdminByEmail = (repository: IAdminAuthRepository) => FindAdminByEmail;

export type FindAdminById = (id: string) => Promise<Nullable<IAdminUserBase>>;
export type TFindAdminById = (repository: IAdminAuthRepository) => FindAdminById;

export type SaveAdmin = (user: IAdminUserBase) => Promise<IAdminUserBase>;
export type TSaveAdmin = (repository: IAdminAuthRepository) => SaveAdmin;

export type UpdateAdminSenha = (id: string, senhaHash: string) => Promise<void>;
export type TUpdateAdminSenha = (repository: IAdminAuthRepository) => UpdateAdminSenha;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TAdminRegisterUseCase = EndpointHandler<[THashProviderImp, SaveAdmin]>;
export type TAdminLoginUseCase = EndpointHandler<[TComapreProviderImp, TCreateJwtProviderImp, FindAdminByEmail]>;
export type TAdminMeUseCase = EndpointHandler<[FindAdminById]>;
export type TAdminResetSenhaUseCase = EndpointHandler<[TComapreProviderImp, THashProviderImp, FindAdminById, UpdateAdminSenha]>;
