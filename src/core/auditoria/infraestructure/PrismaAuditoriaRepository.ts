import { PrismaClient } from "@generated/prisma/index.js";
import { IAuditoriaRepository, IAuditoriaLog } from "../domain/IAuditoria";

export const PrismaAuditoriaRepository = (client: PrismaClient): IAuditoriaRepository => ({
  async findAll(filters) {
    const where: any = {};
    if (filters.tipo) where.tipo = filters.tipo;
    if (filters.role) where.role = filters.role;
    if (filters.utilizador) where.utilizador = { contains: filters.utilizador, mode: "insensitive" };
    if (filters.dataInicio || filters.dataFim) {
      where.data = {};
      if (filters.dataInicio) where.data.gte = filters.dataInicio;
      if (filters.dataFim) where.data.lte = filters.dataFim;
    }
    const page = filters.page || 1;
    const limit = Math.min(filters.limit || 20, 100);
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      client.auditoriaLog.findMany({ where, skip, take: limit, orderBy: { data: "desc" } }),
      client.auditoriaLog.count({ where }),
    ]);
    return {
      data: data.map(l => ({ ...l, data: l.data instanceof Date ? l.data.toISOString() : l.data })),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },
  async findById(id) {
    const log = await client.auditoriaLog.findUnique({ where: { id } });
    if (!log) return null;
    return {
      id: log.id,
      tipo: log.tipo,
      descricao: log.descricao,
      utilizador: log.utilizador,
      utilizadorId: log.utilizadorId,
      role: log.role,
      entidade: log.entidade,
      entidadeId: log.entidadeId,
      data: log.data instanceof Date ? log.data.toISOString() : log.data,
    };
  },
  async getEstatisticas(_periodo) {
    const [total, porTipo] = await Promise.all([
      client.auditoriaLog.count(),
      client.auditoriaLog.groupBy({ by: ["tipo"], _count: true }),
    ]);
    return { total, porTipo: porTipo.map(t => ({ tipo: t.tipo, quantidade: t._count })) };
  },
});
