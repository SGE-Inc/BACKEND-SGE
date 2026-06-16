import { Router } from "express";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { validate } from "@/shared/middlewares/validate";
import { createProfessorExameDto, updateProfessorExameDto } from "@/core/professorExame/infraestructure/ProfessorExameDtos";
import { ProfessorExameContainer } from "@/core/professorExame/infraestructure/ProfessorExameContainer";

export const register = (router: Router) => {
  router.get("/professor/exames", authenticate, asyncHandler(ProfessorExameContainer.list));
  router.get("/professor/exames/:id", authenticate, asyncHandler(ProfessorExameContainer.getById));
  router.post("/professor/exames", authenticate, validate(createProfessorExameDto), asyncHandler(ProfessorExameContainer.create));
  router.put("/professor/exames/:id", authenticate, validate(updateProfessorExameDto), asyncHandler(ProfessorExameContainer.update));
  router.delete("/professor/exames/:id", authenticate, asyncHandler(ProfessorExameContainer.delete));
  router.get("/professor/exames/:id/resultados", authenticate, asyncHandler(ProfessorExameContainer.getResultados));
};
