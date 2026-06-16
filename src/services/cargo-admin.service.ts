import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class CargoAdminService {
  async list() {
    const cargos = await prisma.cargo.findMany({ orderBy: { nome: "asc" } });
    return cargos.map((c) => ({
      id: c.id,
      nome: c.nome,
      descricao: c.descricao,
      tipo: c.tipo,
      membros: 0,
    }));
  }

  async create(data: { nome: string; descricao?: string; tipo: string }) {
    const existing = await prisma.cargo.findUnique({ where: { nome: data.nome } });
    if (existing) throw createError(409, "Cargo já existe");
    const cargo = await prisma.cargo.create({ data });
    return { id: cargo.id, nome: cargo.nome, descricao: cargo.descricao, tipo: cargo.tipo, message: "Cargo criado com sucesso" };
  }

  async update(id: string, data: { nome?: string; descricao?: string; tipo?: string }) {
    const cargo = await prisma.cargo.findUnique({ where: { id } });
    if (!cargo) throw createError(404, "Cargo não encontrado");
    const updated = await prisma.cargo.update({ where: { id }, data });
    return { id: updated.id, nome: updated.nome, descricao: updated.descricao, tipo: updated.tipo, message: "Cargo actualizado com sucesso" };
  }

  async delete(id: string) {
    const cargo = await prisma.cargo.findUnique({ where: { id } });
    if (!cargo) throw createError(404, "Cargo não encontrado");
    await prisma.cargo.delete({ where: { id } });
    return { message: "Cargo removido com sucesso" };
  }
}
