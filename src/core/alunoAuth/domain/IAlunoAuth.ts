import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { THashProviderImp, TComapreProviderImp } from "@/shared/providers/HashProvider/domain/IHashProvider";
import { TCreateJwtProviderImp } from "@/shared/providers/JwtProvider/domain/TJwtProvider";
import { Nullable } from "@/shared/Types/TNullable";
import { Request } from "express";

export interface IAlunoUserBase {
  id: string;
  nome: string;
  email?: string | null;
  numeroUtilizador: string;
  senhaHash: string;
  role: string;
  status: string;
  dataNascimento: Date;
  tipoIdentificacao: string;
  numeroIdentificacao: string;
  numeroProcesso: string;
}

export interface IAlunoAuthRepository {
  findByNumeroUtilizador(numero: string): Promise<Nullable<IAlunoUserBase>>;
  findById(id: string): Promise<Nullable<IAlunoUserBase>>;
  save(aluno: IAlunoUserBase & { userId: string; turmaId?: string; curso?: string; classe?: string; telefone?: string; encarregadoNome?: string; encarregadoParentesco?: string; encarregadoTelefone?: string; }): Promise<IAlunoUserBase>;
  updateSenha(id: string, senhaHash: string): Promise<void>;
  findLastNumeroProcesso(): Promise<number>;
}

export type FindAlunoByNumero = (numero: string) => Promise<Nullable<IAlunoUserBase>>;
export type TFindAlunoByNumero = (repository: IAlunoAuthRepository) => FindAlunoByNumero;

export type FindAlunoById = (id: string) => Promise<Nullable<IAlunoUserBase>>;
export type TFindAlunoById = (repository: IAlunoAuthRepository) => FindAlunoById;

export type SaveAluno = (aluno: any) => Promise<any>;
export type TSaveAluno = (repository: IAlunoAuthRepository) => SaveAluno;

export type UpdateAlunoSenha = (id: string, senhaHash: string) => Promise<void>;
export type TUpdateAlunoSenha = (repository: IAlunoAuthRepository) => UpdateAlunoSenha;

export type FindLastNumeroProcesso = () => Promise<number>;
export type TFindLastNumeroProcesso = (repository: IAlunoAuthRepository) => FindLastNumeroProcesso;

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TAlunoRegisterUseCase = EndpointHandler<[THashProviderImp, SaveAluno, FindLastNumeroProcesso]>;
export type TAlunoLoginUseCase = EndpointHandler<[TComapreProviderImp, TCreateJwtProviderImp, FindAlunoByNumero]>;
export type TAlunoMeUseCase = EndpointHandler<[FindAlunoById]>;
export type TAlunoResetSenhaUseCase = EndpointHandler<[TComapreProviderImp, THashProviderImp, FindAlunoById, UpdateAlunoSenha]>;
