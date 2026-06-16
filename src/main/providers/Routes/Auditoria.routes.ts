import { Router } from "express";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { AuditoriaContainer } from "@/core/auditoria/infraestructure/AuditoriaContainer";

export const register = (router: Router) => {
  router.get("/admin/auditoria", authenticate, authorize("ADMIN"), asyncHandler(AuditoriaContainer.list));
  router.get("/admin/auditoria/estatisticas", authenticate, authorize("ADMIN"), asyncHandler(AuditoriaContainer.getEstatisticas));
  router.get("/admin/auditoria/:id", authenticate, authorize("ADMIN"), asyncHandler(AuditoriaContainer.getById));
};
