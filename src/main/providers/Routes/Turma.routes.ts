import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createTurmaDto, updateTurmaDto } from "@/core/turma/infraestructure/TurmaDtos";
import { TurmaContainer } from "@/core/turma/infraestructure/TurmaContainer";

export const register = (router: Router) => {
  router.use("/admin/turmas", authenticate, authorize("ADMIN"));
  router.get("/admin/turmas", asyncHandler(TurmaContainer.list));
  router.post("/admin/turmas", validate(createTurmaDto), asyncHandler(TurmaContainer.create));
  router.get("/admin/turmas/:id", asyncHandler(TurmaContainer.getById));
  router.put("/admin/turmas/:id", validate(updateTurmaDto), asyncHandler(TurmaContainer.update));
  router.delete("/admin/turmas/:id", asyncHandler(TurmaContainer.delete));
  router.get("/admin/turmas/:id/estudantes", asyncHandler(TurmaContainer.listEstudantes));
};
