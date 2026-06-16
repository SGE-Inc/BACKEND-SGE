import { PrismaClient } from "@generated/prisma/index.js";
import { IDashboardRepository } from "../domain/IDashboard";

export const PrismaDashboardRepository = (client: PrismaClient): IDashboardRepository => ({
  async getStats() {
    const [totalEstudantes, estudantesActivos, totalProfessores, professoresActivos, totalTurmas] = await Promise.all([
      client.user.count({ where: { role: "ALUNO" } }),
      client.user.count({ where: { role: "ALUNO", status: "ATIVO" } }),
      client.user.count({ where: { role: "PROFESSOR" } }),
      client.user.count({ where: { role: "PROFESSOR", status: "ATIVO" } }),
      client.turma.count(),
    ]);
    return {
      totalEstudantes,
      estudantesActivos,
      estudantesInactivos: totalEstudantes - estudantesActivos,
      totalProfessores,
      professoresActivos,
      professoresLicenca: totalProfessores - professoresActivos,
      totalTurmas,
      taxaAprovacao: 78,
      anoLectivo: "2025-2026",
    };
  },
  async getDistribuicaoCursos() {
    const cursos = await client.curso.findMany({ include: { _count: { select: { turmas: true } } } });
    return cursos.map(c => ({ curso: c.nome, abrev: c.sigla, total: c._count.turmas }));
  },
  async getEvolucaoMatriculas(_ano) {
    return [];
  },
  async getMediaDisciplinas() {
    const disciplinas = await client.disciplina.findMany({ include: { _count: { select: { exames: true } } } });
    return disciplinas.map(d => ({ disciplina: d.nome, abrev: d.sigla, media: 14, positivas: Math.floor(Math.random() * 30) + 10 }));
  },
  async getUltimosLogs(limite = 8) {
    const logs = await client.auditoriaLog.findMany({ orderBy: { data: "desc" }, take: limite });
    return logs.map(l => ({
      id: l.id,
      tipo: l.tipo,
      descricao: l.descricao,
      utilizador: l.utilizador,
      role: l.role,
      data: l.data,
    }));
  },
  async getProximosEventos() {
    return [];
  },
});
