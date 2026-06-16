import { PrismaClient } from "@generated/prisma/index.js";
import { ICargoRepository, ICargoBase, CargoFilters } from "../domain/ICargo";
import { v4 as uuidv4 } from "uuid";

export const PrismaCargoRepository = (client: PrismaClient): ICargoRepository => ({
  async findAll(filters: CargoFilters) {
    const where: any = {};
    if (filters.tipo) where.tipo = filters.tipo;
    if (filters.search) {
      where.OR = [
        { nome: { contains: filters.search, mode: "insensitive" } },
        { descricao: { contains: filters.search, mode: "insensitive" } },
      ];
    }
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const skip = (page - 1) * limit;
    const [cargos, total] = await Promise.all([
      client.cargo.findMany({
        where,
        skip,
        take: limit,
        orderBy: { nome: "asc" },
      }),
      client.cargo.count({ where }),
    ]);
    return {
      data: cargos.map(c => mapToCargo(c)),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },
  async findById(id) {
    const cargo = await client.cargo.findUnique({
      where: { id },
    });
    if (!cargo) return null;
    return mapToCargo(cargo);
  },
  async save(data) {
    const id = uuidv4();
    const created = await client.cargo.create({
      data: { id, nome: data.nome, descricao: data.descricao, tipo: data.tipo },
    });
    return mapToCargo(created);
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.nome) updateData.nome = data.nome;
    if (data.descricao !== undefined) updateData.descricao = data.descricao;
    if (data.tipo) updateData.tipo = data.tipo;
    const updated = await client.cargo.update({
      where: { id },
      data: updateData,
    });
    return mapToCargo(updated);
  },
  async delete(id) {
    await client.cargo.delete({ where: { id } });
  },
});

function mapToCargo(cargo: any): ICargoBase {
  return {
    id: cargo.id,
    nome: cargo.nome,
    descricao: cargo.descricao,
    tipo: cargo.tipo,
    membros: [],
  };
}
