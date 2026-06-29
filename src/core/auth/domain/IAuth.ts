import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { THashProviderImp, TComapreProviderImp } from "@/shared/providers/HashProvider/domain/IHashProvider";
import { TCreateJwtProviderImp } from "@/shared/providers/JwtProvider/domain/TJwtProvider";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IUserBase {
  id: string;
  nome: string;
  email?: string | null;
  telefone?: string | null;
  numeroUtilizador?: string | null;
  senhaHash: string;
  role: string;
  status: string;
  avatar?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthRepository {
  findByIdentifier(identifier: string): Promise<Nullable<IUserBase>>;
  findById(id: string): Promise<Nullable<IUserBase>>;
  save(user: IUserBase): Promise<IUserBase>;
  updateSenha(id: string, senhaHash: string): Promise<void>;
}

export type FindUserByIdentifier = (identifier: string) => Promise<Nullable<IUserBase>>;
export type FindUserById = (id: string) => Promise<Nullable<IUserBase>>;
export type SaveUser = (user: IUserBase) => Promise<IUserBase>;
export type UpdateUserSenha = (id: string, senhaHash: string) => Promise<void>;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TRegisterUseCase = EndpointHandler<[THashProviderImp, SaveUser]>;
export type TLoginUseCase = EndpointHandler<[TComapreProviderImp, TCreateJwtProviderImp, FindUserByIdentifier]>;
export type TMeUseCase = EndpointHandler<[FindUserById]>;
export type TResetSenhaUseCase = EndpointHandler<[TComapreProviderImp, THashProviderImp, FindUserById, UpdateUserSenha]>;
