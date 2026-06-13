import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
import { createError } from "./error-handler.js";

export function validate(schema: ZodSchema, source: "body" | "query" | "params" = "body") {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return next(
        createError(400, "Dados inválidos", result.error.flatten().fieldErrors),
      );
    }
    req[source] = result.data;
    next();
  };
}
