import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoProvaContainer } from "@/core/alunoProva/infraestructure/AlunoProvaContainer";

export const register = (router: Router) => {
  router.get("/aluno/provas/calendario", authenticate, asyncHandler(AlunoProvaContainer.getCalendario));
  router.get("/aluno/provas/epocas", authenticate, asyncHandler(AlunoProvaContainer.getEpocas));
};
