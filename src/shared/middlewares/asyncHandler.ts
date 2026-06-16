import type { Request, Response, NextFunction } from "express";

type AsyncHandler = (...args: any[]) => Promise<any>;

export function asyncHandler(fn: AsyncHandler) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
