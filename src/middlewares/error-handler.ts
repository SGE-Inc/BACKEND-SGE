import type { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  statusCode?: number;
  details?: unknown;
}

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? "Erro interno do servidor";

  console.error(`[ERROR] ${statusCode} - ${message}`, err.details ?? "");

  res.status(statusCode).json({
    statusCode,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
}

export function createError(statusCode: number, message: string, details?: unknown): AppError {
  const error = new Error(message) as AppError;
  error.statusCode = statusCode;
  error.details = details;
  return error;
}
