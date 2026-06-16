import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createDisciplinaDto, updateDisciplinaDto } from "@/core/disciplina/infraestructure/DisciplinaDtos";
import { DisciplinaContainer } from "@/core/disciplina/infraestructure/DisciplinaContainer";

export const register = (router: Router) => {
  router.use("/admin/disciplinas", authenticate, authorize("ADMIN"));
  router.get("/admin/disciplinas", asyncHandler(DisciplinaContainer.list));
  router.get("/admin/disciplinas/:id", asyncHandler(DisciplinaContainer.getById));
  router.post("/admin/disciplinas", validate(createDisciplinaDto), asyncHandler(DisciplinaContainer.create));
  router.put("/admin/disciplinas/:id", validate(updateDisciplinaDto), asyncHandler(DisciplinaContainer.update));
  router.delete("/admin/disciplinas/:id", asyncHandler(DisciplinaContainer.delete));
};
