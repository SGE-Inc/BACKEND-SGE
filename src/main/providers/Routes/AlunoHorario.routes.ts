import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoHorarioContainer } from "@/core/alunoHorario/infraestructure/AlunoHorarioContainer";

export const register = (router: Router) => {
  router.get("/aluno/horario", authenticate, asyncHandler(AlunoHorarioContainer.get));
};
