import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AdminAuthService } from "../services/admin-auth.service.js";
import { env } from "../config/env.js";
import type { JwtPayload } from "../middlewares/auth.js";
import type { SignOptions } from "jsonwebtoken";

const adminAuthService = new AdminAuthService();

export class AdminAuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminAuthService.register(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;
      const user = await adminAuthService.login(email, senha);

      const signOptions: SignOptions = {
        expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
      };
      const token = jwt.sign(
        { sub: user.id, role: user.role } satisfies Omit<JwtPayload, "iat" | "exp">,
        env.JWT_SECRET,
        signOptions,
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
          email: user.email,
          role: user.role.toLowerCase(),
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async logout(_req: Request, res: Response, _next: NextFunction) {
    res.clearCookie("sge_token", {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.json({ message: "Sessão terminada com sucesso" });
  }
}
