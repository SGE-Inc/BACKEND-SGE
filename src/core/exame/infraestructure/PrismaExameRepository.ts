import { PrismaClient } from "@generated/prisma/index.js";
import { IExameRepository, IExameBase, IEpocaExame, ExameFilters } from "../domain/IExame";
import { v4 as uuidv4 } from "uuid";

export const PrismaExameRepository = (client: PrismaClient): IExameRepository => ({
  async findAll(filters: ExameFilters) {
    const where: any = {};
    if (filters.disciplinaId) where.disciplinaId = filters.disciplinaId;
    if (filters.turmaId) where.turmaId = filters.turmaId;
    if (filters.tipo) where.tipo = filters.tipo;
    if (filters.trimestre) where.trimestre = filters.trimestre;
    if (filters.estado) where.estado = filters.estado;
    if (filters.curso) where.curso = filters.curso;
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const skip = (page - 1) * limit;
    const [exames, total] = await Promise.all([
      client.exame.findMany({
        where,
        include: { disciplina: true, turma: true, resultados: true },
        skip,
        take: limit,
        orderBy: { data: "desc" },
      }),
      client.exame.count({ where }),
    ]);
    return {
      data: exames.map(e => mapToExame(e)),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },
  async findById(id) {
    const exame = await client.exame.findUnique({
      where: { id },
      include: { disciplina: true, turma: true, resultados: { include: { aluno: { include: { user: true } } } } },
    });
    if (!exame) return null;
    return mapToExame(exame);
  },
  async save(data) {
    const id = uuidv4();
    const exame = await client.exame.create({
      data: {
        id,
        disciplinaId: data.disciplinaId,
        turmaId: data.turmaId,
        data: new Date(data.data),
        hora: data.hora,
        sala: data.sala,
        tipo: data.tipo,
        trimestre: data.trimestre,
        estado: "AGENDADO",
        curso: data.curso,
        observacoes: data.observacoes,
      },
      include: { disciplina: true, turma: true },
    });
    return mapToExame(exame);
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.disciplinaId) updateData.disciplinaId = data.disciplinaId;
    if (data.turmaId) updateData.turmaId = data.turmaId;
    if (data.data) updateData.data = new Date(data.data);
    if (data.hora) updateData.hora = data.hora;
    if (data.sala) updateData.sala = data.sala;
    if (data.tipo) updateData.tipo = data.tipo;
    if (data.trimestre) updateData.trimestre = data.trimestre;
    if (data.curso !== undefined) updateData.curso = data.curso;
    if (data.observacoes !== undefined) updateData.observacoes = data.observacoes;
    const updated = await client.exame.update({
      where: { id },
      data: updateData,
      include: { disciplina: true, turma: true },
    });
    return mapToExame(updated);
  },
  async delete(id) {
    await client.exame.delete({ where: { id } });
  },
  async changeEstado(id, estado) {
    const updated = await client.exame.update({
      where: { id },
      data: { estado: estado as any },
      include: { disciplina: true, turma: true },
    });
    return mapToExame(updated);
  },
  async lancarResultados(id, resultados) {
    const exame = await client.exame.findUnique({ where: { id } });
    if (!exame) throw new Error("Exame não encontrado");
    const created = await client.resultado.createMany({
      data: resultados.map((r: any) => ({
        id: uuidv4(),
        exameId: id,
        alunoId: r.alunoId,
        nota: r.nota,
      })),
      skipDuplicates: true,
    });
    await client.exame.update({ where: { id }, data: { estado: "REALIZADO" } });
    return { count: created.count };
  },
  async getResultados(id) {
    const exame = await client.exame.findUnique({
      where: { id },
      include: {
        disciplina: true,
        resultados: {
          include: { aluno: { include: { user: true } } },
          orderBy: { aluno: { user: { nome: "asc" } } },
        },
      },
    });
    if (!exame) throw new Error("Exame não encontrado");
    return {
      exame: { id: exame.id, tipo: exame.tipo, data: exame.data, disciplina: exame.disciplina?.nome },
      resultados: exame.resultados.map((r: any) => ({
        id: r.id,
        alunoId: r.alunoId,
        nome: r.aluno?.user?.nome,
        nota: r.nota,
      })),
    };
  },
  async getCalendario(filters) {
    const where: any = {};
    if (filters.turmaId) where.turmaId = filters.turmaId;
    if (filters.disciplinaId) where.disciplinaId = filters.disciplinaId;
    if (filters.trimestre) where.trimestre = filters.trimestre;
    const exames = await client.exame.findMany({
      where,
      include: { disciplina: true, turma: true },
      orderBy: { data: "asc" },
    });
    return exames.map(e => mapToExame(e));
  },
  async getHistorico(id) {
    const exame = await client.exame.findUnique({
      where: { id },
      include: {
        disciplina: true,
        turma: true,
        resultados: {
          include: { aluno: { include: { user: true } } },
          orderBy: { nota: "desc" },
        },
      },
    });
    if (!exame) throw new Error("Exame não encontrado");
    return {
      exame: { id: exame.id, tipo: exame.tipo, data: exame.data, disciplina: exame.disciplina?.nome, turma: exame.turma?.nome },
      resultados: exame.resultados.map(r => ({
        aluno: r.aluno?.user?.nome,
        nota: r.nota,
      })),
    };
  },
  async listEpocas() {
    const epocas = await client.epocaExame.findMany({ orderBy: { dataInicio: "desc" } });
    return epocas.map(e => ({
      id: e.id,
      label: e.label,
      trimestre: e.trimestre,
      dataInicio: e.dataInicio,
      dataFim: e.dataFim,
      tipo: e.tipo,
    }));
  },
  async createEpoca(data) {
    const id = uuidv4();
    const epoca = await client.epocaExame.create({
      data: {
        id,
        label: data.label,
        trimestre: data.trimestre,
        dataInicio: new Date(data.dataInicio),
        dataFim: new Date(data.dataFim),
        tipo: data.tipo,
      },
    });
    return {
      id: epoca.id,
      label: epoca.label,
      trimestre: epoca.trimestre,
      dataInicio: epoca.dataInicio,
      dataFim: epoca.dataFim,
      tipo: epoca.tipo,
    };
  },
});

function mapToExame(exame: any): IExameBase {
  return {
    id: exame.id,
    disciplinaId: exame.disciplinaId,
    turmaId: exame.turmaId,
    data: exame.data,
    hora: exame.hora,
    sala: exame.sala,
    tipo: exame.tipo,
    trimestre: exame.trimestre,
    estado: exame.estado,
    curso: exame.curso,
    observacoes: exame.observacoes,
    disciplina: exame.disciplina,
    turma: exame.turma,
    resultados: exame.resultados,
  };
}
