import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";

export class PermissaoAdminService {
  async list() {
    const permissoes = await prisma.permissao.findMany({ orderBy: { modulo: "asc" } });
    return permissoes.map((p) => ({
      id: p.id,
      modulo: p.modulo,
      descricao: p.descricao,
      admin: p.admin,
      professor: p.professor,
      aluno: p.aluno,
    }));
  }

  async update(permissoes: { modulo: string; admin: boolean; professor: boolean; aluno: boolean }[]) {
    for (const p of permissoes) {
      await prisma.permissao.upsert({
        where: { modulo: p.modulo },
        update: { admin: p.admin, professor: p.professor, aluno: p.aluno },
        create: { modulo: p.modulo, admin: p.admin, professor: p.professor, aluno: p.aluno },
      });
    }

    await prisma.auditoriaLog.create({
      data: {
        tipo: "CONFIG",
        descricao: "Permissões actualizadas",
        utilizador: "Admin",
        role: "admin",
        entidade: "Permissao",
      },
    });

    return { message: "Permissões actualizadas com sucesso" };
  }

  async getMeuPerfil(role: string) {
    const permissoes = await prisma.permissao.findMany({ orderBy: { modulo: "asc" } });
    return permissoes.map((p) => ({
      modulo: p.modulo,
      descricao: p.descricao,
      permitido: role === "ADMIN" ? p.admin : role === "PROFESSOR" ? p.professor : p.aluno,
    }));
  }
}
