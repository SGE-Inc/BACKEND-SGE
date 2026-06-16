import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoInformacaoContainer } from "@/core/alunoInformacao/infraestructure/AlunoInformacaoContainer";

export const register = (router: Router) => {
  router.get("/aluno/informacoes", authenticate, asyncHandler(AlunoInformacaoContainer.list));
  router.get("/aluno/informacoes/:id", authenticate, asyncHandler(AlunoInformacaoContainer.getById));
};
