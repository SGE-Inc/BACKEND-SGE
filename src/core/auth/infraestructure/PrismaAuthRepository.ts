import { PrismaClient } from "@generated/prisma/index.js";
import { IAuthRepository, IUserBase } from "../domain/IAuth";

export const PrismaAuthRepository = (client: PrismaClient): IAuthRepository => ({
  async findByIdentifier(identifier) {
    const user = await client.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { numeroUtilizador: identifier },
        ],
      },
    });
    if (!user) return null;
    return mapToUserBase(user);
  },
  async findById(id) {
    const user = await client.user.findUnique({ where: { id } });
    if (!user) return null;
    return mapToUserBase(user);
  },
  async save(user) {
    const created = await client.user.create({
      data: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        numeroUtilizador: user.numeroUtilizador,
        senhaHash: user.senhaHash,
        role: user.role as any,
        status: user.status as any,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
    return mapToUserBase(created);
  },
  async updateSenha(id, senhaHash) {
    await client.user.update({ where: { id }, data: { senhaHash, updatedAt: new Date() } });
  },
});

function mapToUserBase(user: any): IUserBase {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    telefone: user.telefone,
    numeroUtilizador: user.numeroUtilizador,
    senhaHash: user.senhaHash,
    role: user.role,
    status: user.status,
    avatar: user.avatar,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
