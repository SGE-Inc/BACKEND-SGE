import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";
import { PrismaProvider } from "@/main/providers/PrismaProvider";
import { PrismaRelatorioRepository } from "./PrismaRelatorioRepository";
import { EstudantesPorCursoUseCase, AprovacaoPorTurmaUseCase, DesempenhoDisciplinasUseCase, ProfessoresCargaHorariaUseCase } from "../application/RelatorioUseCases";
import { Request, Response } from "express";

const repository = PrismaRelatorioRepository(PrismaProvider);

export const RelatorioContainer = {
  estudantesPorCurso: (req: Request, res: Response) => EstudantesPorCursoUseCase(ResponseProvider(res), (anoLectivo?: string) => repository.estudantesPorCurso(anoLectivo))(req),
  aprovacaoPorTurma: (req: Request, res: Response) => AprovacaoPorTurmaUseCase(ResponseProvider(res), (trimestre?: string, anoLectivo?: string) => repository.aprovacaoPorTurma(trimestre, anoLectivo))(req),
  desempenhoDisciplinas: (req: Request, res: Response) => DesempenhoDisciplinasUseCase(ResponseProvider(res), (curso?: string, trimestre?: string) => repository.desempenhoDisciplinas(curso, trimestre))(req),
  professoresCargaHoraria: (req: Request, res: Response) => ProfessoresCargaHorariaUseCase(ResponseProvider(res), () => repository.professoresCargaHoraria())(req),
};
