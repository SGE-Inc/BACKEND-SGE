import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AlunoTurmaContainer } from "@/core/alunoTurma/infraestructure/AlunoTurmaContainer";

export const register = (router: Router) => {
  router.get("/aluno/turma/disciplinas", authenticate, asyncHandler(AlunoTurmaContainer.listDisciplinas));
  router.get("/aluno/turma/disciplinas/:disciplinaId/materiais", authenticate, asyncHandler(AlunoTurmaContainer.listMateriais));
  router.post("/aluno/turma/materiais", authenticate, asyncHandler(AlunoTurmaContainer.submitMaterial));
};
