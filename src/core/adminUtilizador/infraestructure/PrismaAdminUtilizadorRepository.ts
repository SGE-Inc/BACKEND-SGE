import { PrismaClient } from "@generated/prisma/index.js";
import { IAdminUtilizadorRepository, IAdminUtilizadorBase, AdminUtilizadorFilters } from "../domain/IAdminUtilizador";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

export const PrismaAdminUtilizadorRepository = (client: PrismaClient): IAdminUtilizadorRepository => ({
  async findAll(filters: AdminUtilizadorFilters) {
    const where: any = {};
    if (filters.role) where.role = filters.role;
    if (filters.status) where.status = filters.status;
    if (filters.search) {
      where.OR = [
        { nome: { contains: filters.search, mode: "insensitive" } },
        { email: { contains: filters.search, mode: "insensitive" } },
      ];
    }
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      client.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { nome: "asc" },
      }),
      client.user.count({ where }),
    ]);
    return {
      data: users.map(u => mapToAdminUtilizador(u)),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },
  async findById(id) {
    const user = await client.user.findUnique({ where: { id } });
    if (!user) return null;
    return mapToAdminUtilizador(user);
  },
  async save(data) {
    const id = uuidv4();
    const hashedPassword = data.senhaHash ? await bcrypt.hash(data.senhaHash, 10) : await bcrypt.hash("12345678", 10);
    const created = await client.user.create({
      data: {
        id,
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        senhaHash: hashedPassword,
        role: data.role || "ADMIN",
        status: "ATIVO",
      },
    });
    return mapToAdminUtilizador(created);
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.nome) updateData.nome = data.nome;
    if (data.email) updateData.email = data.email;
    if (data.telefone !== undefined) updateData.telefone = data.telefone;
    if (data.role) updateData.role = data.role;
    if (data.senhaHash) updateData.senhaHash = await bcrypt.hash(data.senhaHash, 10);
    const updated = await client.user.update({
      where: { id },
      data: { ...updateData, updatedAt: new Date() },
    });
    return mapToAdminUtilizador(updated);
  },
  async toggleStatus(id) {
    const user = await client.user.findUnique({ where: { id } });
    if (!user) throw new Error("Utilizador não encontrado");
    const newStatus = user.status === "ATIVO" ? "INATIVO" : "ATIVO";
    const updated = await client.user.update({
      where: { id },
      data: { status: newStatus as any, updatedAt: new Date() },
    });
    return mapToAdminUtilizador(updated);
  },
  async delete(id) {
    await client.user.delete({ where: { id } });
  },
  async countSuperAdmins() {
    return client.user.count({ where: { role: "ADMIN" } });
  },
});

function mapToAdminUtilizador(user: any): IAdminUtilizadorBase {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    telefone: user.telefone,
    role: user.role,
    status: user.status,
    cargo: user.cargo,
  };
}
