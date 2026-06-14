import type { Role } from "@generated/prisma/index.js";

export interface JwtPayload {
  sub: string;
  role: Role;
  iat: number;
  exp: number;
}
