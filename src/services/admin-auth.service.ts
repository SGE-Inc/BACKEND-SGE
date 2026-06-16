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
      message: "Administrador registado com sucesso",
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

  async me(userId: string) {
    const admin = await prisma.admin.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, nome: true, email: true, role: true } },
      },
    });
    if (!admin) throw createError(404, "Administrador não encontrado");

    return {
      id: admin.user.id,
      nome: admin.user.nome,
      email: admin.user.email,
      role: admin.user.role.toLowerCase(),
    };
  }

  async resetSenha(userId: string, senhaActual: string, novaSenha: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw createError(404, "Utilizador não encontrado");

    const valid = await bcrypt.compare(senhaActual, user.senhaHash);
    if (!valid) throw createError(401, "Senha actual incorrecta");

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { senhaHash: novaSenhaHash },
    });

    return { message: "Senha alterada com sucesso" };
  }
}
