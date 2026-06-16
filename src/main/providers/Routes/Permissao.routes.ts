import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { updatePermissaoDto } from "@/core/permissao/infraestructure/PermissaoDtos";
import { PermissaoContainer } from "@/core/permissao/infraestructure/PermissaoContainer";

export const register = (router: Router) => {
  router.get("/admin/permissoes", authenticate, authorize("ADMIN"), asyncHandler(PermissaoContainer.list));
  router.put("/admin/permissoes/:id", authenticate, authorize("ADMIN"), validate(updatePermissaoDto), asyncHandler(PermissaoContainer.update));
  router.get("/admin/permissoes/meu-perfil", authenticate, asyncHandler(PermissaoContainer.getMeuPerfil));
};
