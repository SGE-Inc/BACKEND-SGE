import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoConvocatoriaContainer } from "@/core/alunoConvocatoria/infraestructure/AlunoConvocatoriaContainer";

export const register = (router: Router) => {
  router.get("/aluno/convocatorias", authenticate, asyncHandler(AlunoConvocatoriaContainer.list));
};
