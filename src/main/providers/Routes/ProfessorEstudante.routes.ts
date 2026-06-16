import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { ProfessorEstudanteContainer } from "@/core/professorEstudante/infraestructure/ProfessorEstudanteContainer";

export const register = (router: Router) => {
  router.get("/professor/estudantes/turma/:turmaId", authenticate, asyncHandler(ProfessorEstudanteContainer.listByTurma));
  router.get("/professor/estudantes/disciplina/:disciplinaId", authenticate, asyncHandler(ProfessorEstudanteContainer.listByDisciplina));
  router.get("/professor/estudantes/:alunoId/notas/:disciplinaId", authenticate, asyncHandler(ProfessorEstudanteContainer.getNotas));
  router.get("/professor/estudantes/:alunoId/faltas/:disciplinaId", authenticate, asyncHandler(ProfessorEstudanteContainer.getFaltas));
};
