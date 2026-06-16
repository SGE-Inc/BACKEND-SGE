import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { registerAlunoDto, alunoLoginDto, alunoResetSenhaDto } from "@/core/alunoAuth/infraestructure/AlunoAuthDtos";
import { AlunoAuthContainer } from "@/core/alunoAuth/infraestructure/AlunoAuthContainer";

export const register = (router: Router) => {
  router.post("/aluno/auth/registar", validate(registerAlunoDto), asyncHandler(AlunoAuthContainer.register));
  router.post("/aluno/auth/login", validate(alunoLoginDto), asyncHandler(AlunoAuthContainer.login));
  router.post("/aluno/auth/logout", (_req: any, res: any) => {
    res.clearCookie("sge_token");
    res.json({ code: 200, message: "Logout bem-sucedido", data: null });
  });
  router.get("/aluno/auth/me", authenticate, asyncHandler(AlunoAuthContainer.me));
  router.put("/aluno/auth/reset-senha", authenticate, validate(alunoResetSenhaDto), asyncHandler(AlunoAuthContainer.resetSenha));
};
