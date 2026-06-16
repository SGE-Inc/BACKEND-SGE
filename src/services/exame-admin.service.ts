import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class ExameAdminService {
  async list(params: { curso?: string; turma?: string; estado?: string; trimestre?: string; tipo?: string; search?: string; page: number; limit: number }) {
    const where: Record<string, unknown> = {};
    if (params.curso) where.curso = params.curso;
    if (params.turma) where.turmaId = params.turma;
    if (params.estado) where.estado = params.estado?.toUpperCase();
    if (params.trimestre) where.trimestre = params.trimestre;
    if (params.tipo) where.tipo = params.tipo;
    if (params.search) {
      where.OR = [
        { sala: { contains: params.search, mode: "insensitive" } },
        { disciplina: { nome: { contains: params.search, mode: "insensitive" } } },
      ];
    }

    const [total, exames] = await Promise.all([
      prisma.exame.count({ where: where as any }),
      prisma.exame.findMany({
        where: where as any,
        include: { disciplina: { select: { nome: true, sigla: true } }, turma: { select: { nome: true } } },
        orderBy: { data: "asc" },
        skip: (params.page - 1) * params.limit,
        take: params.limit,
      }),
    ]);

    const data = exames.map((e) => ({
      id: e.id,
      disciplina: e.disciplina.nome,
      disciplinaId: e.disciplinaId,
      turma: e.turma.nome,
      turmaId: e.turmaId,
      data: e.data.toISOString().split("T")[0],
      hora: e.hora,
      sala: e.sala,
      tipo: e.tipo,
      trimestre: e.trimestre,
      estado: e.estado.toLowerCase(),
      curso: e.curso,
      observacoes: e.observacoes,
    }));

    return {
      data,
      pagination: { page: params.page, limit: params.limit, total, totalPages: Math.ceil(total / params.limit) },
    };
  }

  async getById(id: string) {
    const exame = await prisma.exame.findUnique({
      where: { id },
      include: { disciplina: true, turma: true, resultados: { include: { aluno: { include: { user: { select: { nome: true } } } } } } },
    });
    if (!exame) throw createError(404, "Exame não encontrado");
    return {
      id: exame.id,
      disciplina: exame.disciplina.nome,
      disciplinaId: exame.disciplinaId,
      turma: exame.turma.nome,
      turmaId: exame.turmaId,
      data: exame.data.toISOString().split("T")[0],
      hora: exame.hora,
      sala: exame.sala,
      tipo: exame.tipo,
      trimestre: exame.trimestre,
      estado: exame.estado.toLowerCase(),
      curso: exame.curso,
      observacoes: exame.observacoes,
      resultados: exame.resultados.map((r) => ({
        id: r.id,
        alunoId: r.alunoId,
        alunoNome: r.aluno.user.nome,
        nota: r.nota,
      })),
    };
  }

  async create(data: { disciplinaId: string; turmaId: string; data: string; hora: string; sala: string; tipo: string; trimestre: string; curso: string; observacoes?: string }) {
    const existing = await prisma.exame.findFirst({
      where: { turmaId: data.turmaId, data: new Date(data.data), hora: data.hora },
    });
    if (existing) throw createError(409, "Já existe um exame agendado para esta turma na mesma data/hora");

    const exame = await prisma.exame.create({
      data: {
        disciplinaId: data.disciplinaId,
        turmaId: data.turmaId,
        data: new Date(data.data),
        hora: data.hora,
        sala: data.sala,
        tipo: data.tipo,
        trimestre: data.trimestre,
        curso: data.curso,
        observacoes: data.observacoes,
      },
      include: { disciplina: { select: { nome: true } }, turma: { select: { nome: true } } },
    });

    await prisma.auditoriaLog.create({
      data: {
        tipo: "EXAME",
        descricao: `Exame criado: ${exame.tipo} — ${exame.disciplina.nome} · ${exame.turma.nome}`,
        utilizador: "Admin",
        role: "admin",
        entidade: "Exame",
        entidadeId: exame.id,
      },
    });

    return this.getById(exame.id);
  }

  async update(id: string, data: Record<string, unknown>) {
    const exame = await prisma.exame.findUnique({ where: { id } });
    if (!exame) throw createError(404, "Exame não encontrado");

    const updateData: Record<string, unknown> = { ...data };
    if (data.data) updateData.data = new Date(data.data as string);

    const updated = await prisma.exame.update({ where: { id }, data: updateData as any });
    return this.getById(updated.id);
  }

  async delete(id: string) {
    const exame = await prisma.exame.findUnique({ where: { id } });
    if (!exame) throw createError(404, "Exame não encontrado");
    if (exame.estado === "REALIZADO") throw createError(400, "Não é permitido remover um exame já realizado");

    await prisma.resultado.deleteMany({ where: { exameId: id } });
    await prisma.exame.delete({ where: { id } });
    return { message: "Exame removido com sucesso" };
  }

  async changeEstado(id: string, estado: string) {
    const exame = await prisma.exame.findUnique({ where: { id } });
    if (!exame) throw createError(404, "Exame não encontrado");

    const updated = await prisma.exame.update({ where: { id }, data: { estado: estado as any } });
    return this.getById(updated.id);
  }

  async lancarResultados(exameId: string, resultados: { alunoId: string; nota: number }[]) {
    const exame = await prisma.exame.findUnique({ where: { id: exameId } });
    if (!exame) throw createError(404, "Exame não encontrado");
    if (exame.estado !== "REALIZADO") throw createError(400, "Apenas é possível lançar resultados para exames realizados");

    for (const r of resultados) {
      await prisma.resultado.upsert({
        where: { exameId_alunoId: { exameId, alunoId: r.alunoId } },
        update: { nota: r.nota },
        create: { exameId, alunoId: r.alunoId, nota: r.nota },
      });
    }

    await prisma.auditoriaLog.create({
      data: {
        tipo: "NOTA",
        descricao: `Resultados lançados — ${exame.tipo}`,
        utilizador: "Admin",
        role: "admin",
        entidade: "Exame",
        entidadeId: exameId,
      },
    });

    return { message: "Resultados lançados com sucesso" };
  }

  async getResultados(exameId: string) {
    const exame = await prisma.exame.findUnique({
      where: { id: exameId },
      include: { resultados: { include: { aluno: { include: { user: { select: { nome: true } } } } } } },
    });
    if (!exame) throw createError(404, "Exame não encontrado");

    const resultados = exame as typeof exame & { resultados: Array<{ id: string; alunoId: string; nota: number; aluno: { user: { nome: string }; numeroProcesso: string } }> };
    return resultados.resultados.map((r) => ({
      id: r.id,
      alunoId: r.alunoId,
      alunoNome: r.aluno.user.nome,
      numeroProcesso: r.aluno.numeroProcesso,
      nota: r.nota,
    }));
  }

  async getCalendario(curso?: string, trimestre?: string) {
    const where: Record<string, unknown> = {};
    if (curso) where.curso = curso;
    if (trimestre) where.trimestre = trimestre;

    const exames = await prisma.exame.findMany({
      where: where as any,
      include: { disciplina: { select: { nome: true } }, turma: { select: { nome: true } } },
      orderBy: { data: "asc" },
    });

    const grouped: Record<string, unknown[]> = {};
    for (const e of exames) {
      const key = e.data.toISOString().split("T")[0];
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push({
        id: e.id,
        disciplina: e.disciplina.nome,
        turma: e.turma.nome,
        hora: e.hora,
        sala: e.sala,
        tipo: e.tipo,
        estado: e.estado.toLowerCase(),
      });
    }
    return grouped;
  }

  async listEpocas() {
    return prisma.epocaExame.findMany({ orderBy: { dataInicio: "asc" } });
  }

  async createEpoca(data: { label: string; trimestre: string; dataInicio: string; dataFim: string; tipo: string }) {
    return prisma.epocaExame.create({
      data: {
        label: data.label,
        trimestre: data.trimestre,
        dataInicio: new Date(data.dataInicio),
        dataFim: new Date(data.dataFim),
        tipo: data.tipo,
      },
    });
  }

  async getHistorico(curso?: string, ano?: string) {
    const where: Record<string, unknown> = { estado: "REALIZADO" };
    if (curso) where.curso = curso;
    if (ano) {
      const year = parseInt(ano);
      where.data = { gte: new Date(`${year}-01-01`), lte: new Date(`${year}-12-31`) };
    }

    const exames = await prisma.exame.findMany({
      where: where as any,
      include: { disciplina: { select: { nome: true } }, turma: { select: { nome: true } } },
      orderBy: { data: "desc" },
    });

    return exames.map((e) => ({
      id: e.id,
      disciplina: e.disciplina.nome,
      turma: e.turma.nome,
      data: e.data.toISOString().split("T")[0],
      tipo: e.tipo,
      trimestre: e.trimestre,
      sala: e.sala,
    }));
  }
}
