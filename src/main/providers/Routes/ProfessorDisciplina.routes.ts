import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { validate } from "@/shared/middlewares/validate";
import { createMaterialDto, updateMaterialDto, createAvisoDto } from "@/core/professorDisciplina/infraestructure/ProfessorDisciplinaDtos";
import { ProfessorDisciplinaContainer } from "@/core/professorDisciplina/infraestructure/ProfessorDisciplinaContainer";

export const register = (router: Router) => {
  router.get("/professor/disciplinas", authenticate, asyncHandler(ProfessorDisciplinaContainer.list));
  router.get("/professor/disciplinas/:disciplinaId/materiais", authenticate, asyncHandler(ProfessorDisciplinaContainer.listMateriais));
  router.post("/professor/disciplinas/materiais", authenticate, validate(createMaterialDto), asyncHandler(ProfessorDisciplinaContainer.createMaterial));
  router.put("/professor/disciplinas/materiais/:id", authenticate, validate(updateMaterialDto), asyncHandler(ProfessorDisciplinaContainer.updateMaterial));
  router.delete("/professor/disciplinas/materiais/:id", authenticate, asyncHandler(ProfessorDisciplinaContainer.deleteMaterial));
  router.get("/professor/disciplinas/:disciplinaId/avisos", authenticate, asyncHandler(ProfessorDisciplinaContainer.listAvisos));
  router.post("/professor/disciplinas/avisos", authenticate, validate(createAvisoDto), asyncHandler(ProfessorDisciplinaContainer.createAviso));
  router.delete("/professor/disciplinas/avisos/:id", authenticate, asyncHandler(ProfessorDisciplinaContainer.deleteAviso));
  router.get("/professor/disciplinas/:disciplinaId/alunos", authenticate, asyncHandler(ProfessorDisciplinaContainer.listAlunos));
};
