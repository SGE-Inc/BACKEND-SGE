import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AlunoAuthService } from "../services/aluno-auth.service.js";
import { env } from "../config/env.js";
import type { JwtPayload } from "../types/index.js";

const alunoAuthService = new AlunoAuthService();

export class AlunoAuthController {
  register = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await alunoAuthService.register(req.body);
    res.status(201).json(result);
  };

  login = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { utilizador, senha } = req.body;
    const user = await alunoAuthService.login(utilizador, senha);

    const token = jwt.sign(
      { sub: user.id, role: user.role } satisfies Omit<JwtPayload, "iat" | "exp">,
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN } as jwt.SignOptions,
    );

    res.cookie("sge_token", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      user: {
        id: user.id,
        nome: user.nome,
        utilizador: user.numeroUtilizador,
        role: user.role.toLowerCase(),
      },
    });
  };

  logout = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    res.clearCookie("sge_token", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.json({ message: "Sessão terminada com sucesso" });
  };

  me = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await alunoAuthService.me(req.user!.sub);
    res.json(result);
  };

  resetSenha = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { senhaActual, novaSenha } = req.body;
    const result = await alunoAuthService.resetSenha(req.user!.sub, senhaActual, novaSenha);
    res.json(result);
  };
}
