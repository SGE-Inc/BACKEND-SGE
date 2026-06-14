import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";
import type { AuthUserResponse } from "../types/index.js";
import type { User } from "@generated/prisma/index.js";

export class AdminAuthService {
  async register(data: { nome: string; email: string; senha: string }): Promise<AuthUserResponse> {
    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      throw createError(409, "Email já registado");
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    const user = await prisma.user.create({
      data: {
        nome: data.nome,
        email: data.email,
        senhaHash,
        role: "ADMIN",
        admin: { create: {} },
      },
    });

    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      role: user.role.toLowerCase(),
    };
  }

  async login(email: string, senha: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.role !== "ADMIN") {
      throw createError(401, "Credenciais inválidas");
    }

    const valid = await bcrypt.compare(senha, user.senhaHash);
    if (!valid) {
      throw createError(401, "Credenciais inválidas");
    }

    return user;
  }
}
