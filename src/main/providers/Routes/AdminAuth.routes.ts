import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { adminRegisterDto, adminLoginDto, adminResetSenhaDto } from "@/core/adminAuth/infraestructure/AdminAuthDtos";
import { AdminAuthContainer } from "@/core/adminAuth/infraestructure/AdminAuthContainer";

export const register = (router: Router) => {
  router.post("/admin/auth/register", validate(adminRegisterDto), asyncHandler(AdminAuthContainer.register));
  router.post("/admin/auth/login", validate(adminLoginDto), asyncHandler(AdminAuthContainer.login));
  router.post("/admin/auth/logout", (_req: any, res: any) => {
    res.clearCookie("sge_token");
    res.json({ code: 200, message: "Logout bem-sucedido", data: null });
  });
  router.get("/admin/auth/me", authenticate, authorize("ADMIN"), asyncHandler(AdminAuthContainer.me));
  router.put("/admin/auth/reset-senha", authenticate, authorize("ADMIN"), validate(adminResetSenhaDto), asyncHandler(AdminAuthContainer.resetSenha));
};
