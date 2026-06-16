import { PrismaClient } from "@generated/prisma/index.js";
import { IPermissaoRepository, IPermissaoBase, PermissaoFilters } from "../domain/IPermissao";

export const PrismaPermissaoRepository = (client: PrismaClient): IPermissaoRepository => ({
  async findAll(filters: PermissaoFilters) {
    const where: any = {};
    if (filters.modulo) where.modulo = { contains: filters.modulo, mode: "insensitive" };
    if (filters.search) {
      where.OR = [
        { modulo: { contains: filters.search, mode: "insensitive" } },
        { descricao: { contains: filters.search, mode: "insensitive" } },
      ];
    }
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const skip = (page - 1) * limit;
    const [permissoes, total] = await Promise.all([
      client.permissao.findMany({
        where,
        skip,
        take: limit,
        orderBy: { modulo: "asc" },
      }),
      client.permissao.count({ where }),
    ]);
    return {
      data: permissoes.map(p => mapToPermissao(p)),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },
  async findById(id) {
    const permissao = await client.permissao.findUnique({ where: { id } });
    if (!permissao) return null;
    return mapToPermissao(permissao);
  },
  async update(id, data) {
    const updateData: any = {};
    if (data.admin !== undefined) updateData.admin = data.admin;
    if (data.professor !== undefined) updateData.professor = data.professor;
    if (data.aluno !== undefined) updateData.aluno = data.aluno;
    if (data.descricao !== undefined) updateData.descricao = data.descricao;
    const updated = await client.permissao.update({
      where: { id },
      data: updateData,
    });
    return mapToPermissao(updated);
  },
  async getMeuPerfil(userId) {
    const user = await client.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new Error("Utilizador não encontrado");
    const permissoes = await client.permissao.findMany();
    return {
      user: { id: user.id, nome: user.nome, email: user.email, role: user.role },
      permissoes: permissoes.map(p => ({
        modulo: p.modulo,
        descricao: p.descricao,
        acesso: user.role === "ADMIN" ? p.admin : user.role === "PROFESSOR" ? p.professor : p.aluno,
      })),
    };
  },
});

function mapToPermissao(permissao: any): IPermissaoBase {
  return {
    id: permissao.id,
    modulo: permissao.modulo,
    descricao: permissao.descricao,
    admin: permissao.admin,
    professor: permissao.professor,
    aluno: permissao.aluno,
  };
}
