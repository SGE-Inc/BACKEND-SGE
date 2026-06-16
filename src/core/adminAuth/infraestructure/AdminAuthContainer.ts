import bcrypt from "bcryptjs";
import { hashProvider, compareProvider } from "@/shared/providers/HashProvider/infraestructure/HashProvider";
import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { CreateJwtProvider } from "@/shared/providers/JwtProvider/infraestructure/JwtProvider";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAdminAuthRepository } from "./PrismaAdminAuthRepository";
import { AdminRegisterUseCase, AdminLoginUseCase, AdminMeUseCase, AdminResetSenhaUseCase } from "../application/AdminAuthUseCases";
import { Request, Response } from "express";

const repository = PrismaAdminAuthRepository(PrismaProvider);
const jwtImp = CreateJwtProvider();

const saveAdmin = (user: any) => repository.save(user);
const findAdminByEmail = (email: string) => repository.findByEmail(email);
const findAdminById = (id: string) => repository.findById(id);
const updateSenha = (id: string, senhaHash: string) => repository.updateSenha(id, senhaHash);

export const AdminAuthContainer = {
  register: (req: Request, res: Response) =>
    AdminRegisterUseCase(ResponseProvider(res), hashProvider(bcrypt.hash), saveAdmin)(req),
  login: (req: Request, res: Response) =>
    AdminLoginUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), jwtImp, findAdminByEmail)(req),
  me: (req: Request, res: Response) =>
    AdminMeUseCase(ResponseProvider(res), findAdminById)(req),
  resetSenha: (req: Request, res: Response) =>
    AdminResetSenhaUseCase(ResponseProvider(res), compareProvider(bcrypt.compare), hashProvider(bcrypt.hash), findAdminById, updateSenha)(req),
};
