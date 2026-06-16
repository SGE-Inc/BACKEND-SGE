import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createProfessorDto, updateProfessorDto } from "@/core/professor/infraestructure/ProfessorDtos";
import { ProfessorContainer } from "@/core/professor/infraestructure/ProfessorContainer";

export const register = (router: Router) => {
  router.use("/admin/professors", authenticate, authorize("ADMIN"));
  router.get("/admin/professors", asyncHandler(ProfessorContainer.list));
  router.get("/admin/professors/:id", asyncHandler(ProfessorContainer.getById));
  router.post("/admin/professors", validate(createProfessorDto), asyncHandler(ProfessorContainer.create));
  router.put("/admin/professors/:id", validate(updateProfessorDto), asyncHandler(ProfessorContainer.update));
  router.delete("/admin/professors/:id", asyncHandler(ProfessorContainer.delete));
  router.patch("/admin/professors/:id/status", asyncHandler(ProfessorContainer.toggleStatus));
};
