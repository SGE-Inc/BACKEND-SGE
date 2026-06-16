import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class AuditoriaAdminService {
  async list(params: { page: number; limit: number; tipo?: string; role?: string; utilizador?: string; dataInicio?: string; dataFim?: string }) {
    const where: Record<string, unknown> = {};
    if (params.tipo) where.tipo = params.tipo?.toUpperCase();
    if (params.role) where.role = params.role;
    if (params.utilizador) where.utilizador = { contains: params.utilizador, mode: "insensitive" };
    if (params.dataInicio || params.dataFim) {
      where.data = {};
      if (params.dataInicio) (where.data as Record<string, unknown>).gte = new Date(params.dataInicio);
      if (params.dataFim) (where.data as Record<string, unknown>).lte = new Date(params.dataFim);
    }

    const [total, logs] = await Promise.all([
      prisma.auditoriaLog.count({ where: where as any }),
      prisma.auditoriaLog.findMany({
        where: where as any,
        orderBy: { data: "desc" },
        skip: (params.page - 1) * params.limit,
        take: params.limit,
      }),
    ]);

    const data = logs.map((l) => ({
      id: l.id,
      tipo: l.tipo.toLowerCase(),
      descricao: l.descricao,
      utilizador: l.utilizador,
      role: l.role,
      entidade: l.entidade,
      entidadeId: l.entidadeId,
      data: l.data.toISOString(),
    }));

    return {
      data,
      pagination: { page: params.page, limit: params.limit, total, totalPages: Math.ceil(total / params.limit) },
    };
  }

  async getById(id: string) {
    const log = await prisma.auditoriaLog.findUnique({ where: { id } });
    if (!log) throw createError(404, "Log não encontrado");
    return log;
  }

  async getEstatisticas(periodo?: string) {
    const logs = await prisma.auditoriaLog.findMany();
    const stats: Record<string, number> = {};
    for (const l of logs) {
      const tipo = l.tipo.toLowerCase();
      stats[tipo] = (stats[tipo] || 0) + 1;
    }
    return stats;
  }
}
