import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { professorLoginDto, professorResetSenhaDto } from "@/core/professorAuth/infraestructure/ProfessorAuthDtos";
import { ProfessorAuthContainer } from "@/core/professorAuth/infraestructure/ProfessorAuthContainer";

export const register = (router: Router) => {
  router.post("/professor/auth/login", validate(professorLoginDto), asyncHandler(ProfessorAuthContainer.login));
  router.post("/professor/auth/logout", (_req: any, res: any) => {
    res.clearCookie("sge_token");
    res.json({ code: 200, message: "Logout bem-sucedido", data: null });
  });
  router.get("/professor/auth/me", authenticate, asyncHandler(ProfessorAuthContainer.me));
  router.put("/professor/auth/reset-senha", authenticate, validate(professorResetSenhaDto), asyncHandler(ProfessorAuthContainer.resetSenha));
};
