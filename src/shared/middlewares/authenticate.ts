import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

function extractBearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return null;
  return header.slice(7);
}

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  const token = req.cookies?.sge_token ?? extractBearerToken(req);
  if (!token) {
    return next(Object.assign(new Error("Token não fornecido"), { statusCode: 401 }));
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "sge-jwt-secret") as JwtPayload;
    req.user = payload;
    next();
  } catch {
    return next(Object.assign(new Error("Token inválido ou expirado"), { statusCode: 401 }));
  }
}

export function authorize(...allowedRoles: string[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(Object.assign(new Error("Não autenticado"), { statusCode: 401 }));
    }
    if (!allowedRoles.includes(req.user.role)) {
      return next(Object.assign(new Error("Sem permissão para aceder a este recurso"), { statusCode: 403 }));
    }
    next();
  };
}
