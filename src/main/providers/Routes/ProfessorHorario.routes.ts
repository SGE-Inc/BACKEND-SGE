import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { ProfessorHorarioContainer } from "@/core/professorHorario/infraestructure/ProfessorHorarioContainer";

export const register = (router: Router) => {
  router.get("/professor/horario", authenticate, asyncHandler(ProfessorHorarioContainer.get));
};
