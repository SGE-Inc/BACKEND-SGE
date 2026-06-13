import { config } from "dotenv";
config();

import { PrismaClient } from "../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const count = await prisma.user.count();
  console.log(`✅ Connected. Found ${count} user(s) in the database.`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("❌ Failed:", e.message);
  process.exit(1);
});
