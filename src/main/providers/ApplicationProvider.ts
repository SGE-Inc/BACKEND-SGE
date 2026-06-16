import express, { Express, Router } from "express";
import { ILogger } from "@/shared/providers/Logger/domain/ILogger";
import { HttpMiddlewareProvider } from "./MiddlewaresProvider";
import { config as initLocals } from "./LocalsProvider";
import { RegisterRoutes } from "./RouterProvider";
import ErrorHandlerProvider from "./ErrorHandlerProvider";
import http from "http";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "@/config/swagger.js";

export const server = {
  httpServer: null as http.Server | null,
};

export const ApplicationProvider = (logger: ILogger, inTest = false) => async (): Promise<Express> => {
  const app = express();
  const router = Router();

  initLocals();
  HttpMiddlewareProvider(app, logger)();

  app.use("/api", router);
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  await RegisterRoutes(router);

  app.use(ErrorHandlerProvider.syntaxErrorHandler());
  app.use(ErrorHandlerProvider.notFoundHandler());
  app.use(ErrorHandlerProvider.clientErrorHandler());
  app.use(ErrorHandlerProvider.errorHandler());

  const port = process.env.PORT || "2000";
  if (!inTest) {
    server.httpServer = app.listen(
      port,
      () => logger.info(`Servidor rodando em http://localhost:${port}/`)
    );
  }
  return app;
};

export const stopServer = async (): Promise<void> => {
  if (server.httpServer) {
    await new Promise<void>((resolve, reject) => {
      server.httpServer!.close((err) => {
        if (err) {
          console.error("Erro ao parar o servidor Express:", err);
          reject(err);
        } else {
          console.log("Servidor Express parado");
          resolve();
        }
      });
    });
  }
};
