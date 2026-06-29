import bcrypt from "bcryptjs";
import { hashProvider, compareProvider } from "@/shared/providers/HashProvider/infraestructure/HashProvider";
import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { CreateJwtProvider } from "@/shared/providers/JwtProvider/infraestructure/JwtProvider";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAuthRepository } from "./PrismaAuthRepository";
import { RegisterUseCase, LoginUseCase, MeUseCase, ResetSenhaUseCase } from "../application/AuthUseCases";
import { Request, Response } from "express";

const repository = PrismaAuthRepository(PrismaProvider);
const jwtImp = CreateJwtProvider();

const saveUser = (user: any) => repository.save(user);
const findUserByIdentifier = (identifier: string) => repository.findByIdentifier(identifier);
const findUserById = (id: string) => repository.findById(id);
const updateSenha = (id: string, senhaHash: string) => repository.updateSenha(id, senhaHash);

export const AuthContainer = {
  register: (req: Request, res: Response) =>
    RegisterUseCase(ResponseProvider(res), hashProvider(bcrypt.hash), saveUser)(req),
  login: (req: Request, res: Response) =>
    LoginUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), jwtImp, findUserByIdentifier)(req),
  me: (req: Request, res: Response) =>
    MeUseCase(ResponseProvider(res), findUserById)(req),
  resetSenha: (req: Request, res: Response) =>
    ResetSenhaUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), hashProvider(bcrypt.hash), findUserById, updateSenha)(req),
};
