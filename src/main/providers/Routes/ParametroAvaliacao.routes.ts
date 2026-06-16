import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { updateParametroAvaliacaoDto, upsertParametroAvaliacaoDto } from "@/core/parametroAvaliacao/infraestructure/ParametroAvaliacaoDtos";
import { ParametroAvaliacaoContainer } from "@/core/parametroAvaliacao/infraestructure/ParametroAvaliacaoContainer";

export const register = (router: Router) => {
  router.get("/admin/parametros-avaliacao", authenticate, authorize("ADMIN"), asyncHandler(ParametroAvaliacaoContainer.list));
  router.put("/admin/parametros-avaliacao/:id", authenticate, authorize("ADMIN"), validate(updateParametroAvaliacaoDto), asyncHandler(ParametroAvaliacaoContainer.update));
  router.post("/admin/parametros-avaliacao", authenticate, authorize("ADMIN"), validate(upsertParametroAvaliacaoDto), asyncHandler(ParametroAvaliacaoContainer.upsert));
};
