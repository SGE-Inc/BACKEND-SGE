import { StatusCodes } from "http-status-codes";
import { TListEstudantesUseCase, TGetEstudanteUseCase, TGetEstudanteByProcessoUseCase, TCreateEstudanteUseCase, TUpdateEstudanteUseCase, TDeleteEstudanteUseCase, TChangeEstudanteStatusUseCase, TTransferEstudanteUseCase, TGetEstudanteHistoricoUseCase } from "../domain/IEstudante";

export const ListEstudantesUseCase: TListEstudantesUseCase = (ResponseProvider, findAll) => async (req) => {
  try {
    const result = await findAll({
      curso: req.query.curso as string,
      turma: req.query.turma as string,
      status: req.query.status as string,
      search: req.query.search as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
    });
    return ResponseProvider(StatusCodes.OK, "Lista de estudantes", result);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetEstudanteUseCase: TGetEstudanteUseCase = (ResponseProvider, findById) => async (req) => {
  try {
    const estudante = await findById(req.params.id as string);
    if (!estudante) return ResponseProvider(StatusCodes.NOT_FOUND, "Estudante não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Estudante encontrado", estudante);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetEstudanteByProcessoUseCase: TGetEstudanteByProcessoUseCase = (ResponseProvider, findByProcesso) => async (req) => {
  try {
    const estudante = await findByProcesso(req.params.numeroProcesso as string);
    if (!estudante) return ResponseProvider(StatusCodes.NOT_FOUND, "Estudante não encontrado", null);
    return ResponseProvider(StatusCodes.OK, "Estudante encontrado", estudante);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateEstudanteUseCase: TCreateEstudanteUseCase = (ResponseProvider, save) => async (req) => {
  try {
    const estudante = await save(req.body);
    return ResponseProvider(StatusCodes.CREATED, "Estudante criado com sucesso", estudante);
  } catch (error: any) {
    if (error.code === "P2002") return ResponseProvider(StatusCodes.CONFLICT, "Número de processo ou email já existente", null);
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateEstudanteUseCase: TUpdateEstudanteUseCase = (ResponseProvider, findById, update) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Estudante não encontrado", null);
    const updated = await update(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Estudante actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteEstudanteUseCase: TDeleteEstudanteUseCase = (ResponseProvider, findById, del) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Estudante não encontrado", null);
    await del(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Estudante removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ChangeEstudanteStatusUseCase: TChangeEstudanteStatusUseCase = (ResponseProvider, findById, changeStatus) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Estudante não encontrado", null);
    const updated = await changeStatus(req.params.id as string, req.body.status, req.body.motivo);
    return ResponseProvider(StatusCodes.OK, "Estado actualizado com sucesso", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const TransferEstudanteUseCase: TTransferEstudanteUseCase = (ResponseProvider, findById, transfer) => async (req) => {
  try {
    const existing = await findById(req.params.id as string);
    if (!existing) return ResponseProvider(StatusCodes.NOT_FOUND, "Estudante não encontrado", null);
    const updated = await transfer(req.params.id as string, req.body.novaTurmaId, req.body.motivo);
    return ResponseProvider(StatusCodes.OK, "Estudante transferido com sucesso", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetEstudanteHistoricoUseCase: TGetEstudanteHistoricoUseCase = (ResponseProvider, getHistorico) => async (req) => {
  try {
    const historico = await getHistorico(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Histórico do estudante", historico);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
