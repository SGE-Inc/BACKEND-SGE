import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaAlunoInformacaoRepository } from "./PrismaAlunoInformacaoRepository";
import { ListAlunoInformacoesUseCase, GetAlunoInformacaoUseCase } from "../application/AlunoInformacaoUseCases";
import { Request, Response } from "express";

const repository = PrismaAlunoInformacaoRepository(PrismaProvider);

export const AlunoInformacaoContainer = {
  list: (req: Request, res: Response) => ListAlunoInformacoesUseCase(ResponseProvider(res), () => repository.findAll())(req),
  getById: (req: Request, res: Response) => GetAlunoInformacaoUseCase(ResponseProvider(res), (id: string) => repository.findById(id))(req),
};
