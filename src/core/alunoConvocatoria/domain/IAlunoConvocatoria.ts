import { TResponseLoggerImp } from "@/shared/providers/Response/domain/IResponse";
import { Request } from "express";

export interface IAlunoConvocatoriaRepository {
  findByAlunoId(alunoId: string): Promise<any[]>;
}

type EndpointHandler<T extends unknown[]> = (
  ResponserProvider: TResponseLoggerImp,
  ...implementations: T
) => (req: Request) => Promise<any>;

export type TListAlunoConvocatoriasUseCase = EndpointHandler<[(alunoId: string) => Promise<any[]>]>;
