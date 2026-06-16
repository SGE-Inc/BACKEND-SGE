import { Router } from "express";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { DashboardContainer } from "@/core/dashboard/infraestructure/DashboardContainer";

export const register = (router: Router) => {
  router.get("/admin/dashboard/stats", authenticate, authorize("ADMIN"), asyncHandler(DashboardContainer.getStats));
  router.get("/admin/dashboard/distribuicao-cursos", authenticate, authorize("ADMIN"), asyncHandler(DashboardContainer.getDistribuicaoCursos));
  router.get("/admin/dashboard/evolucao-matriculas", authenticate, authorize("ADMIN"), asyncHandler(DashboardContainer.getEvolucaoMatriculas));
  router.get("/admin/dashboard/media-disciplinas", authenticate, authorize("ADMIN"), asyncHandler(DashboardContainer.getMediaDisciplinas));
  router.get("/admin/dashboard/ultimos-logs", authenticate, authorize("ADMIN"), asyncHandler(DashboardContainer.getUltimosLogs));
  router.get("/admin/dashboard/proximos-eventos", authenticate, authorize("ADMIN"), asyncHandler(DashboardContainer.getProximosEventos));
};
