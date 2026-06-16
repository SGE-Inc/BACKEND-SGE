import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createCursoDto, updateCursoDto } from "@/core/curso/infraestructure/CursoDtos";
import { CursoContainer } from "@/core/curso/infraestructure/CursoContainer";

export const register = (router: Router) => {
  router.use("/admin/cursos", authenticate, authorize("ADMIN"));
  router.get("/admin/cursos", asyncHandler(CursoContainer.list));
  router.get("/admin/cursos/:id", asyncHandler(CursoContainer.getById));
  router.post("/admin/cursos", validate(createCursoDto), asyncHandler(CursoContainer.create));
  router.put("/admin/cursos/:id", validate(updateCursoDto), asyncHandler(CursoContainer.update));
  router.delete("/admin/cursos/:id", asyncHandler(CursoContainer.delete));
};
