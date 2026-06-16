import express, { Application } from "express";
import { ILogger } from "@/shared/providers/Logger/domain/ILogger";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

export const HttpMiddlewareProvider = (app: Application, logger: ILogger) => (): Application => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    if (process.env.NODE_ENV !== "test") {
      app.use(morgan("dev"));
    }
    app.disable("x-powered-by");
    return app;
};
