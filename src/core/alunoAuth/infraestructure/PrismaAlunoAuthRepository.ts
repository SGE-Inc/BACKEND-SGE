import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoAuthRepository, IAlunoUserBase } from "../domain/IAlunoAuth";

export const PrismaAlunoAuthRepository = (client: PrismaClient): IAlunoAuthRepository => ({
  async findByNumeroUtilizador(numero) {
    const user = await client.user.findFirst({
      where: { numeroUtilizador: numero, role: "ALUNO" },
      include: { aluno: true },
    });
    if (!user || !user.aluno) return null;
    return mapToAlunoBase(user, user.aluno);
  },
  async findById(id) {
    const user = await client.user.findFirst({
      where: { id, role: "ALUNO" },
      include: { aluno: true },
    });
    if (!user || !user.aluno) return null;
    return mapToAlunoBase(user, user.aluno);
  },
  async save(data) {
    const created = await client.user.create({
      data: {
        id: data.userId,
        nome: data.nome,
        email: data.email,
        numeroUtilizador: data.numeroUtilizador,
        senhaHash: data.senhaHash,
        role: "ALUNO",
        status: "ATIVO",
        aluno: {
          create: {
            id: data.id,
            dataNascimento: data.dataNascimento,
            tipoIdentificacao: data.tipoIdentificacao,
            numeroIdentificacao: data.numeroIdentificacao,
            numeroProcesso: data.numeroProcesso,
            curso: data.curso,
            classe: data.classe,
            encarregadoNome: data.encarregadoNome,
            encarregadoParentesco: data.encarregadoParentesco,
            encarregadoTelefone: data.encarregadoTelefone,
          },
        },
      },
      include: { aluno: true },
    });
    return mapToAlunoBase(created, (created as any).aluno);
  },
  async updateSenha(id, senhaHash) {
    await client.user.update({ where: { id }, data: { senhaHash, updatedAt: new Date() } });
  },
  async findLastNumeroProcesso() {
    const last = await client.aluno.findFirst({ orderBy: { numeroProcesso: "desc" } });
    return last ? parseInt(last.numeroProcesso.replace(/\D/g, ""), 10) || 0 : 0;
  },
});

function mapToAlunoBase(user: any, aluno: any): IAlunoUserBase {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    numeroUtilizador: user.numeroUtilizador,
    senhaHash: user.senhaHash,
    role: user.role,
    status: user.status,
    dataNascimento: aluno.dataNascimento,
    tipoIdentificacao: aluno.tipoIdentificacao,
    numeroIdentificacao: aluno.numeroIdentificacao,
    numeroProcesso: aluno.numeroProcesso,
  };
}
