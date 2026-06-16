import { PrismaClient } from "@generated/prisma/index.js";
import { IAdminAuthRepository, IAdminUserBase } from "../domain/IAdminAuth";

export const PrismaAdminAuthRepository = (client: PrismaClient): IAdminAuthRepository => ({
  async findByEmail(email) {
    const user = await client.user.findFirst({ where: { email, role: "ADMIN" } });
    if (!user) return null;
    return mapToAdminBase(user);
  },
  async findById(id) {
    const user = await client.user.findFirst({ where: { id, role: "ADMIN" } });
    if (!user) return null;
    return mapToAdminBase(user);
  },
  async save(user) {
    const created = await client.user.create({
      data: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        senhaHash: user.senhaHash,
        role: "ADMIN",
        status: "ATIVO",
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
    return mapToAdminBase(created);
  },
  async updateSenha(id, senhaHash) {
    await client.user.update({ where: { id }, data: { senhaHash, updatedAt: new Date() } });
  },
});

function mapToAdminBase(user: any): IAdminUserBase {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    senhaHash: user.senhaHash,
    role: user.role,
    status: user.status,
    avatar: user.avatar,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
