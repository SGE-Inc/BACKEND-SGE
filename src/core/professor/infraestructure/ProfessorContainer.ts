import bcrypt from "bcryptjs";
import { hashProvider } from "@/shared/providers/HashProvider/infraestructure/HashProvider";
import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorRepository } from "./PrismaProfessorRepository";
import { ListProfessoresUseCase, GetProfessorUseCase, CreateProfessorUseCase, UpdateProfessorUseCase, DeleteProfessorUseCase, ToggleProfessorStatusUseCase } from "../application/ProfessorUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorRepository(PrismaProvider);

const findAll = () => repository.findAll();
const findById = (id: string) => repository.findById(id);
const save = (data: any) => repository.save(data);
const update = (id: string, data: any) => repository.update(id, data);
const del = (id: string) => repository.delete(id);
const toggle = (id: string) => repository.toggleStatus(id);

export const ProfessorContainer = {
  list: (req: Request, res: Response) => ListProfessoresUseCase(ResponseProvider(res), findAll)(req),
  getById: (req: Request, res: Response) => GetProfessorUseCase(ResponseProvider(res), findById)(req),
  create: (req: Request, res: Response) => CreateProfessorUseCase(ResponseProvider(res), hashProvider(bcrypt.hash), save)(req),
  update: (req: Request, res: Response) => UpdateProfessorUseCase(ResponseProvider(res), findById, update)(req),
  delete: (req: Request, res: Response) => DeleteProfessorUseCase(ResponseProvider(res), findById, del)(req),
  toggleStatus: (req: Request, res: Response) => ToggleProfessorStatusUseCase(ResponseProvider(res), findById, toggle)(req),
};
