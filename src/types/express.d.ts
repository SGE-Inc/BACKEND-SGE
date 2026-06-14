import type { Role } from "@generated/prisma/index.js";

declare global {
  namespace Express {
    interface Request {
      user?: {
        sub: string;
        role: Role;
        iat: number;
        exp: number;
      };
    }
  }
}
