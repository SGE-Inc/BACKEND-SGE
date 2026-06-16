import bcrypt from "bcryptjs";
import { hashProvider, compareProvider } from "@/shared/providers/HashProvider/infraestructure/HashProvider";
import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { CreateJwtProvider } from "@/shared/providers/JwtProvider/infraestructure/JwtProvider";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoAuthRepository } from "./PrismaAlunoAuthRepository";
import { AlunoRegisterUseCase, AlunoLoginUseCase, AlunoMeUseCase, AlunoResetSenhaUseCase } from "../application/AlunoAuthUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoAuthRepository(PrismaProvider);
const jwtImp = CreateJwtProvider();

const saveAluno = (aluno: any) => repository.save(aluno);
const findAlunoByNumero = (numero: string) => repository.findByNumeroUtilizador(numero);
const findAlunoById = (id: string) => repository.findById(id);
const updateSenha = (id: string, senhaHash: string) => repository.updateSenha(id, senhaHash);
const findLastNumero = () => repository.findLastNumeroProcesso();

export const AlunoAuthContainer = {
  register: (req: Request, res: Response) =>
    AlunoRegisterUseCase(ResponseProvider(res), hashProvider(bcrypt.hash), saveAluno, findLastNumero)(req),
  login: (req: Request, res: Response) =>
    AlunoLoginUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), jwtImp, findAlunoByNumero)(req),
  me: (req: Request, res: Response) =>
    AlunoMeUseCase(ResponseProvider(res), findAlunoById)(req),
  resetSenha: (req: Request, res: Response) =>
    AlunoResetSenhaUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), hashProvider(bcrypt.hash), findAlunoById, updateSenha)(req),
};
