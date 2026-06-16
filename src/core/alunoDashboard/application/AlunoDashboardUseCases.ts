import { StatusCodes } from "http-status-codes";
import { TGetAlunoDashboardStatsUseCase, TGetAlunoRankingUseCase, TGetAlunoMelhoresDisciplinasUseCase, TGetAlunoDistribuicaoNotasUseCase } from "../domain/IAlunoDashboard";

export const GetAlunoDashboardStatsUseCase: TGetAlunoDashboardStatsUseCase = (ResponseProvider, getStats) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const stats = await getStats(alunoId);
    return ResponseProvider(StatusCodes.OK, "Estatísticas do aluno", stats);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAlunoRankingUseCase: TGetAlunoRankingUseCase = (ResponseProvider, getRanking) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const turmaId = req.query.turmaId as string;
    if (!turmaId) return ResponseProvider(StatusCodes.BAD_REQUEST, "turmaId é obrigatório", null);
    const ranking = await getRanking(turmaId, alunoId);
    return ResponseProvider(StatusCodes.OK, "Ranking da turma", ranking);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAlunoMelhoresDisciplinasUseCase: TGetAlunoMelhoresDisciplinasUseCase = (ResponseProvider, getMelhores) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const disciplinas = await getMelhores(alunoId);
    return ResponseProvider(StatusCodes.OK, "Melhores disciplinas", disciplinas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const GetAlunoDistribuicaoNotasUseCase: TGetAlunoDistribuicaoNotasUseCase = (ResponseProvider, getDistribuicao) => async (req) => {
  try {
    const alunoId = (req as any).user?.sub;
    if (!alunoId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const distribuicao = await getDistribuicao(alunoId);
    return ResponseProvider(StatusCodes.OK, "Distribuição de notas", distribuicao);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
