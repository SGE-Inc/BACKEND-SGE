import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaProfessorDisciplinaRepository } from "./PrismaProfessorDisciplinaRepository";
import { ListProfessorDisciplinasUseCase, ListMateriaisUseCase, CreateMaterialUseCase, UpdateMaterialUseCase, DeleteMaterialUseCase, ListAvisosUseCase, CreateAvisoUseCase, DeleteAvisoUseCase, ListAlunosDisciplinaUseCase } from "../application/ProfessorDisciplinaUseCases";
import { Request, Response } from "express";

const repository = PrismaProfessorDisciplinaRepository(PrismaProvider);

export const ProfessorDisciplinaContainer = {
  list: (req: Request, res: Response) => ListProfessorDisciplinasUseCase(ResponseProvider(res), (id: string) => repository.findByProfessorId(id))(req),
  listMateriais: (req: Request, res: Response) => ListMateriaisUseCase(ResponseProvider(res), (disciplinaId: string, professorId: string) => repository.findMateriaisByDisciplina(disciplinaId, professorId))(req),
  createMaterial: (req: Request, res: Response) => CreateMaterialUseCase(ResponseProvider(res), (data: any) => repository.createMaterial(data))(req),
  updateMaterial: (req: Request, res: Response) => UpdateMaterialUseCase(ResponseProvider(res), (id: string, data: any) => repository.updateMaterial(id, data))(req),
  deleteMaterial: (req: Request, res: Response) => DeleteMaterialUseCase(ResponseProvider(res), (id: string) => repository.deleteMaterial(id))(req),
  listAvisos: (req: Request, res: Response) => ListAvisosUseCase(ResponseProvider(res), (disciplinaId: string, professorId: string) => repository.findAvisosByDisciplina(disciplinaId, professorId))(req),
  createAviso: (req: Request, res: Response) => CreateAvisoUseCase(ResponseProvider(res), (data: any) => repository.createAviso(data))(req),
  deleteAviso: (req: Request, res: Response) => DeleteAvisoUseCase(ResponseProvider(res), (id: string) => repository.deleteAviso(id))(req),
  listAlunos: (req: Request, res: Response) => ListAlunosDisciplinaUseCase(ResponseProvider(res), (disciplinaId: string) => repository.findAlunosByDisciplinaTurma(disciplinaId))(req),
};
