import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoDashboardContainer } from "@/core/alunoDashboard/infraestructure/AlunoDashboardContainer";

export const register = (router: Router) => {
  router.get("/aluno/dashboard/stats", authenticate, asyncHandler(AlunoDashboardContainer.getStats));
  router.get("/aluno/dashboard/ranking", authenticate, asyncHandler(AlunoDashboardContainer.getRanking));
  router.get("/aluno/dashboard/melhores-disciplinas", authenticate, asyncHandler(AlunoDashboardContainer.getMelhoresDisciplinas));
  router.get("/aluno/dashboard/distribuicao-notas", authenticate, asyncHandler(AlunoDashboardContainer.getDistribuicaoNotas));
};
