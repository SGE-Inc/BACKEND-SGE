import bcrypt from "bcryptjs";
import { hashProvider, compareProvider } from "@/shared/providers/HashProvider/infraestructure/HashProvider";
import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { CreateJwtProvider } from "@/shared/providers/JwtProvider/infraestructure/JwtProvider";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorAuthRepository } from "./PrismaProfessorAuthRepository";
import { ProfessorLoginUseCase, ProfessorMeUseCase, ProfessorResetSenhaUseCase } from "../application/ProfessorAuthUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorAuthRepository(PrismaProvider);
const jwtImp = CreateJwtProvider();

const findProfessorByNumero = (numero: string) => repository.findByNumeroUtilizador(numero);
const findProfessorById = (id: string) => repository.findById(id);
const updateSenha = (id: string, senhaHash: string) => repository.updateSenha(id, senhaHash);

export const ProfessorAuthContainer = {
  login: (req: Request, res: Response) =>
    ProfessorLoginUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), jwtImp, findProfessorByNumero)(req),
  me: (req: Request, res: Response) =>
    ProfessorMeUseCase(ResponseProvider(res), findProfessorById)(req),
  resetSenha: (req: Request, res: Response) =>
    ProfessorResetSenhaUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), hashProvider(bcrypt.hash), findProfessorById, updateSenha)(req),
};
