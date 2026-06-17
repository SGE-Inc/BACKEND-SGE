import express, { Application } from "express";
import { ILogger } from "@/shared/providers/Logger/domain/ILogger";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const allowedOrigins = [
  "http://localhost:2000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "https://sistemadegestaoescolar.onrender.com",
  process.env.FRONTEND_URL,
].filter(Boolean) as string[];

export const HttpMiddlewareProvider = (app: Application, logger: ILogger) => (): Application => {
    app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
    app.use(cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    }));
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    if (process.env.NODE_ENV !== "test") {
      app.use(morgan("dev"));
    }
    app.disable("x-powered-by");
    return app;
};
