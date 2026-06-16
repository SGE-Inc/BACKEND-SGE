import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseProvider } from "@/shared/providers/Response/infraestructure/Response";

const notFoundHandler = () => {
  return (req: Request, res: Response, _: NextFunction) => {
    const responseProvider = ResponseProvider(res);
    return responseProvider(StatusCodes.NOT_FOUND, `Path '${req.originalUrl}' não encontrado`, null);
  };
};

const clientErrorHandler = (): ErrorRequestHandler => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    const responseProvider = ResponseProvider(res);
    if (req.xhr && !(err instanceof SyntaxError)) {
      return responseProvider(StatusCodes.INTERNAL_SERVER_ERROR, "Algo correu mal", null);
    } else {
      return next(err);
    }
  };
};

const errorHandler = (): ErrorRequestHandler => {
  return (err: any, _: Request, res: Response, __: NextFunction) => {
    const responseProvider = ResponseProvider(res);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || "Erro interno do servidor";

    if (err.name === "UnauthorizedError") {
      return responseProvider(StatusCodes.UNAUTHORIZED, "Token inválido!", {
        error: [err.message]
      });
    }
    
    if (process.env.NODE_ENV === "development") {
      console.error(`[ERROR] ${statusCode} - ${message}`, err.details ?? "");
      return res.status(statusCode).json({
        code: statusCode,
        message,
        ...(err.details && { details: err.details }),
        stack: err.stack,
      });
    }

    return responseProvider(statusCode as StatusCodes, message, null);
  };
};

const syntaxErrorHandler = (): ErrorRequestHandler => {
  return (err: unknown, _: Request, res: Response, next: NextFunction) => {
    const responseProvider = ResponseProvider(res);
    if (err instanceof SyntaxError) {
      return responseProvider(StatusCodes.BAD_REQUEST, "JSON inválido", null);
    } else {
      return next(err);
    }
  };
};

export default {
  notFoundHandler,
  clientErrorHandler,
  errorHandler,
  syntaxErrorHandler
};
