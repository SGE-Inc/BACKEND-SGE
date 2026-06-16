import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { ProfessorDashboardContainer } from "@/core/professorDashboard/infraestructure/ProfessorDashboardContainer";

export const register = (router: Router) => {
  router.get("/professor/dashboard/stats", authenticate, asyncHandler(ProfessorDashboardContainer.getStats));
  router.get("/professor/dashboard/disciplinas", authenticate, asyncHandler(ProfessorDashboardContainer.getDisciplinas));
  router.get("/professor/dashboard/proximos-eventos", authenticate, asyncHandler(ProfessorDashboardContainer.getProximosEventos));
  router.get("/professor/dashboard/horario", authenticate, asyncHandler(ProfessorDashboardContainer.getHorarioSemanal));
  router.get("/professor/dashboard/turmas", authenticate, asyncHandler(ProfessorDashboardContainer.getTurmas));
};
