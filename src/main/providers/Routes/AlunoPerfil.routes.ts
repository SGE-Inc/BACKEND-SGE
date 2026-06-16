import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoPerfilContainer } from "@/core/alunoPerfil/infraestructure/AlunoPerfilContainer";

export const register = (router: Router) => {
  router.get("/aluno/perfil", authenticate, asyncHandler(AlunoPerfilContainer.me));
};
