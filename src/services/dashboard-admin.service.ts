import { prisma } from "../lib/prisma.js";

export class DashboardAdminService {
  async getStats() {
    const totalEstudantes = await prisma.user.count({ where: { role: "ALUNO" } });
    const estudantesActivos = await prisma.user.count({ where: { role: "ALUNO", status: "ATIVO" } });
    const estudantesInactivos = await prisma.user.count({ where: { role: "ALUNO", status: "INATIVO" } });
    const totalProfessores = await prisma.user.count({ where: { role: "PROFESSOR" } });
    const professoresActivos = await prisma.user.count({ where: { role: "PROFESSOR", status: "ATIVO" } });
    const professoresLicenca = await prisma.user.count({ where: { role: "PROFESSOR", status: "INATIVO" } });
    const totalTurmas = await prisma.turma.count();

    const anoLectivo = await prisma.anoLectivo.findFirst({ where: { activo: true } });

    return {
      totalEstudantes,
      estudantesActivos,
      estudantesInactivos,
      totalProfessores,
      professoresActivos,
      professoresLicenca,
      totalTurmas,
      taxaAprovacao: 78,
      anoLectivo: anoLectivo?.ano ?? "N/A",
    };
  }

  async getDistribuicaoCursos() {
    const cursos = await prisma.curso.findMany({ include: { turmas: { include: { alunos: true } } } });
    return cursos.map((c) => ({
      curso: c.nome,
      abrev: c.sigla,
      total: c.turmas.reduce((sum, t) => sum + t.alunos.length, 0),
    }));
  }

  async getEvolucaoMatriculas(ano?: string) {
    const anos = ano ? [ano] : ["2024", "2025", "2026"];
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return meses.map((mes, i) => {
      const entry: Record<string, unknown> = { mes };
      for (const a of anos) {
        entry[a] = Math.floor(150 + Math.random() * 100);
      }
      return entry;
    });
  }

  async getMediaDisciplinas() {
    const disciplinas = await prisma.disciplina.findMany({ orderBy: { nome: "asc" } });
    return disciplinas.map((d) => ({
      disciplina: d.nome,
      abrev: d.sigla,
      media: Number((10 + Math.random() * 8).toFixed(1)),
      positivas: Math.floor(60 + Math.random() * 30),
    }));
  }

  async getUltimosLogs(limite = 8) {
    const logs = await prisma.auditoriaLog.findMany({
      orderBy: { data: "desc" },
      take: limite,
    });
    return logs.map((l) => ({
      id: l.id,
      tipo: l.tipo.toLowerCase(),
      descricao: l.descricao,
      utilizador: l.utilizador,
      role: l.role,
      data: l.data.toLocaleDateString("pt-PT"),
      hora: l.data.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" }),
    }));
  }

  async getProximosEventos() {
    const exames = await prisma.exame.findMany({
      where: { estado: "AGENDADO", data: { gte: new Date() } },
      orderBy: { data: "asc" },
      take: 10,
    });
    return exames.map((e) => ({
      id: e.id,
      titulo: `${e.tipo} — ${e.sala}`,
      data: e.data.toISOString().split("T")[0],
      tipo: "exame",
    }));
  }
}
