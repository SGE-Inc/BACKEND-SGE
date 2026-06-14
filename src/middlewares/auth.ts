import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { createError } from "./error-handler.js";
import type { JwtPayload } from "../types/index.js";
import type { Role } from "@generated/prisma/index.js";

function extractBearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return null;
  return header.slice(7);
}

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  const token = req.cookies?.sge_token ?? extractBearerToken(req);

  if (!token) {
    return next(createError(401, "Token não fornecido"));
  }

  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    req.user = payload;
    next();
  } catch {
    return next(createError(401, "Token inválido ou expirado"));
  }
}

export function authorize(...allowedRoles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(createError(401, "Não autenticado"));
    }
    if (!allowedRoles.includes(req.user.role)) {
      return next(createError(403, "Sem permissão para aceder a este recurso"));
    }
    next();
  };
}
