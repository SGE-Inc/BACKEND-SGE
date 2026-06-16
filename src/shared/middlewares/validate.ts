import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

export function validate(schema: ZodSchema, source: "body" | "query" | "params" = "body") {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return next(
        Object.assign(new Error("Dados inválidos"), {
          statusCode: 400,
          details: result.error.flatten().fieldErrors,
        }),
      );
    }
    req[source] = result.data;
    next();
  };
}
