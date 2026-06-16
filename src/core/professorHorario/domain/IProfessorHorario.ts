import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IProfessorHorarioRepository {
  findByProfessorId(professorId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TGetHorarioUseCase = EndpointHandler<[(professorId: string) => Promise<any[]>]>;
