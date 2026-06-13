import { config } from "dotenv";
config();

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: parseInt(process.env.PORT ?? "2000", 10),

  DATABASE_URL: process.env.DATABASE_URL!,

  JWT_SECRET: process.env.JWT_SECRET ?? "sge-jwt-secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? "24h",

  UPLOAD_DIR: process.env.UPLOAD_DIR ?? "./uploads",
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE ?? "10485760", 10),
};
