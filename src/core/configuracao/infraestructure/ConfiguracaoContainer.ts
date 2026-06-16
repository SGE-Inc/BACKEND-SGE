import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaConfiguracaoRepository } from "./PrismaConfiguracaoRepository";
import { GetInstituicaoUseCase, UpdateInstituicaoUseCase, UploadLogotipoUseCase, ListAnosLectivosUseCase, CreateAnoLectivoUseCase, ActivateAnoLectivoUseCase, UpdateAnoLectivoUseCase } from "../application/ConfiguracaoUseCases";
import { Request, Response } from "express";

const repository = PrismaConfiguracaoRepository(PrismaProvider);

export const ConfiguracaoContainer = {
  getInstituicao: (req: Request, res: Response) => GetInstituicaoUseCase(ResponseProvider(res), () => repository.getInstituicao())(req),
  updateInstituicao: (req: Request, res: Response) => UpdateInstituicaoUseCase(ResponseProvider(res), (data: any) => repository.updateInstituicao(data))(req),
  uploadLogotipo: (req: Request, res: Response) => UploadLogotipoUseCase(ResponseProvider(res), (path: string) => repository.uploadLogotipo(path))(req),
  listAnosLectivos: (req: Request, res: Response) => ListAnosLectivosUseCase(ResponseProvider(res), () => repository.listAnosLectivos())(req),
  createAnoLectivo: (req: Request, res: Response) => CreateAnoLectivoUseCase(ResponseProvider(res), (data: any) => repository.createAnoLectivo(data))(req),
  activateAnoLectivo: (req: Request, res: Response) => ActivateAnoLectivoUseCase(ResponseProvider(res), (id: string) => repository.activateAnoLectivo(id))(req),
  updateAnoLectivo: (req: Request, res: Response) => UpdateAnoLectivoUseCase(ResponseProvider(res), (id: string, data: any) => repository.updateAnoLectivo(id, data))(req),
};
