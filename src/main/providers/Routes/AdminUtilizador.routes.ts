import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createAdminUtilizadorDto, updateAdminUtilizadorDto } from "@/core/adminUtilizador/infraestructure/AdminUtilizadorDtos";
import { AdminUtilizadorContainer } from "@/core/adminUtilizador/infraestructure/AdminUtilizadorContainer";

export const register = (router: Router) => {
  router.get("/admin/utilizadores", authenticate, authorize("ADMIN"), asyncHandler(AdminUtilizadorContainer.list));
  router.post("/admin/utilizadores", authenticate, authorize("ADMIN"), validate(createAdminUtilizadorDto), asyncHandler(AdminUtilizadorContainer.create));
  router.put("/admin/utilizadores/:id", authenticate, authorize("ADMIN"), validate(updateAdminUtilizadorDto), asyncHandler(AdminUtilizadorContainer.update));
  router.patch("/admin/utilizadores/:id/toggle-status", authenticate, authorize("ADMIN"), asyncHandler(AdminUtilizadorContainer.toggleStatus));
  router.delete("/admin/utilizadores/:id", authenticate, authorize("ADMIN"), asyncHandler(AdminUtilizadorContainer.delete));
};
