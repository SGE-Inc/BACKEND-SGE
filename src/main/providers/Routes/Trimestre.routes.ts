import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { defineTrimestreDto } from "@/core/trimestre/infraestructure/TrimestreDtos";
import { TrimestreContainer } from "@/core/trimestre/infraestructure/TrimestreContainer";

export const register = (router: Router) => {
  router.get("/admin/trimestres", authenticate, authorize("ADMIN"), asyncHandler(TrimestreContainer.list));
  router.post("/admin/trimestres/definir", authenticate, authorize("ADMIN"), validate(defineTrimestreDto), asyncHandler(TrimestreContainer.define));
};
