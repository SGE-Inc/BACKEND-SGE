import { defineConfig } from "@prisma/config";
import { config } from "dotenv";
config();

export default defineConfig({
  earlyAccess: true,
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
