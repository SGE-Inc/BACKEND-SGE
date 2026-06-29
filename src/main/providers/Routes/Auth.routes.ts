import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { registerDto, loginDto, resetSenhaDto } from "@/core/auth/infraestructure/AuthDtos";
import { AuthContainer } from "@/core/auth/infraestructure/AuthContainer";

export const register = (router: Router) => {
  router.post("/auth/register", validate(registerDto), asyncHandler(AuthContainer.register));
  router.post("/auth/login", validate(loginDto), asyncHandler(AuthContainer.login));
  router.post("/auth/logout", (_req: any, res: any) => {
    res.clearCookie("sge_token");
    res.json({ code: 200, message: "Logout bem-sucedido", data: null });
  });
  router.get("/auth/me", authenticate, asyncHandler(AuthContainer.me));
  router.put("/auth/reset-senha", authenticate, validate(resetSenhaDto), asyncHandler(AuthContainer.resetSenha));
};
