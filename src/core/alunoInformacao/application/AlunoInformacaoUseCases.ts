import { StatusCodes } from "http-status-codes";
import { TListAlunoInformacoesUseCase, TGetAlunoInformacaoUseCase } from "../domain/IAlunoInformacao";

export const ListAlunoInformacoesUseCase: TListAlunoInformacoesUseCase = (ResponseProvider, listInformacoes) => async (_req) => {
  try {
    const informacoes = await listInformacoes();
    return ResponseProvider(StatusCodes.OK, "Informações", informacoes);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAlunoInformacaoUseCase: TGetAlunoInformacaoUseCase = (ResponseProvider, getInformacao) => async (req) => {
  try {
    const informacao = await getInformacao(req.params.id as string);
    if (!informacao) return ResponseProvider(StatusCodes.NOT_FOUND, "Informação não encontrada", null);
    return ResponseProvider(StatusCodes.OK, "Informação", informacao);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
