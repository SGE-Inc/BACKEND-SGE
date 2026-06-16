import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoTurmaRepository } from "./PrismaAlunoTurmaRepository";
import { ListAlunoDisciplinasUseCase, ListAlunoMateriaisUseCase, SubmitAlunoMaterialUseCase } from "../application/AlunoTurmaUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoTurmaRepository(PrismaProvider);

export const AlunoTurmaContainer = {
  listDisciplinas: (req: Request, res: Response) => ListAlunoDisciplinasUseCase(ResponseProvider(res), (turmaId: string) => repository.findDisciplinas(turmaId))(req),
  listMateriais: (req: Request, res: Response) => ListAlunoMateriaisUseCase(ResponseProvider(res), (disciplinaId: string) => repository.findMateriais(disciplinaId))(req),
  submitMaterial: (req: Request, res: Response) => SubmitAlunoMaterialUseCase(ResponseProvider(res), (data: any) => repository.submitMaterial(data))(req),
};
