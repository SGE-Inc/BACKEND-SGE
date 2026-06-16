import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoBoletimContainer } from "@/core/alunoBoletim/infraestructure/AlunoBoletimContainer";

export const register = (router: Router) => {
  router.get("/aluno/boletins", authenticate, asyncHandler(AlunoBoletimContainer.list));
  router.get("/aluno/boletins/:trimestre", authenticate, asyncHandler(AlunoBoletimContainer.getByTrimestre));
};
