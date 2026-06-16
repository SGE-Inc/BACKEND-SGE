import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class AdminUtilizadorService {
  async list() {
    const utilizadores = await prisma.adminUtilizador.findMany({ orderBy: { nome: "asc" } });
    return utilizadores.map((u) => ({
      id: u.id,
      nome: u.nome,
      email: u.email,
      username: u.username,
      cargo: u.cargo,
      role: u.role,
      ativo: u.ativo,
      ultimoAcesso: u.ultimoAcesso?.toISOString() ?? null,
    }));
  }

  async create(data: { nome: string; email: string; username: string; cargo?: string; role: string; senha: string }) {
    const existingEmail = await prisma.adminUtilizador.findUnique({ where: { email: data.email } });
    if (existingEmail) throw createError(409, "Email já registado");
    const existingUsername = await prisma.adminUtilizador.findUnique({ where: { username: data.username } });
    if (existingUsername) throw createError(409, "Username já registado");

    const senhaHash = await bcrypt.hash(data.senha, 10);
    const user = await prisma.adminUtilizador.create({
      data: {
        nome: data.nome,
        email: data.email,
        username: data.username,
        cargo: data.cargo,
        role: data.role,
        senhaHash,
      },
    });
    return { id: user.id, nome: user.nome, email: user.email, username: user.username, role: user.role, message: "Utilizador criado com sucesso" };
  }

  async update(id: string, data: { nome?: string; email?: string; username?: string; cargo?: string; role?: string; ativo?: boolean }) {
    const user = await prisma.adminUtilizador.findUnique({ where: { id } });
    if (!user) throw createError(404, "Utilizador não encontrado");
    if (data.email && data.email !== user.email) {
      const existing = await prisma.adminUtilizador.findUnique({ where: { email: data.email } });
      if (existing) throw createError(409, "Email já está em uso");
    }
    const updated = await prisma.adminUtilizador.update({ where: { id }, data });
    return { id: updated.id, nome: updated.nome, email: updated.email, username: updated.username, role: updated.role, ativo: updated.ativo, message: "Utilizador actualizado com sucesso" };
  }

  async toggleStatus(id: string, ativo: boolean) {
    const user = await prisma.adminUtilizador.findUnique({ where: { id } });
    if (!user) throw createError(404, "Utilizador não encontrado");
    const updated = await prisma.adminUtilizador.update({ where: { id }, data: { ativo } });
    return { id: updated.id, ativo: updated.ativo, message: `Utilizador ${ativo ? "activado" : "desactivado"} com sucesso` };
  }

  async delete(id: string) {
    const user = await prisma.adminUtilizador.findUnique({ where: { id } });
    if (!user) throw createError(404, "Utilizador não encontrado");
    const superadminCount = await prisma.adminUtilizador.count({ where: { role: "superadmin" } });
    if (user.role === "superadmin" && superadminCount <= 1) {
      throw createError(400, "Não é possível remover o último superadmin");
    }
    await prisma.adminUtilizador.delete({ where: { id } });
    return { message: "Utilizador removido com sucesso" };
  }
}
