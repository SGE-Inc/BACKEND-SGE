import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorAuthRepository, IProfessorUserBase } from "../domain/IProfessorAuth";

export const PrismaProfessorAuthRepository = (client: PrismaClient): IProfessorAuthRepository => ({
  async findByNumeroUtilizador(numero) {
    const user = await client.user.findFirst({
      where: { numeroUtilizador: numero, role: "PROFESSOR" },
      include: { professor: true },
    });
    if (!user || !user.professor) return null;
    return mapToProfessorBase(user, user.professor);
  },
  async findById(id) {
    const user = await client.user.findFirst({
      where: { id, role: "PROFESSOR" },
      include: { professor: { include: { disciplinas: { include: { disciplina: true, turma: true } } } } },
    });
    if (!user || !user.professor) return null;
    return mapToProfessorBase(user, user.professor);
  },
  async updateSenha(id, senhaHash) {
    await client.user.update({ where: { id }, data: { senhaHash, updatedAt: new Date() } });
  },
});

function mapToProfessorBase(user: any, professor: any): IProfessorUserBase {
  return {
    id: user.id,
    professorId: professor.id,
    nome: user.nome,
    email: user.email,
    numeroUtilizador: user.numeroUtilizador,
    senhaHash: user.senhaHash,
    cargo: professor.cargo,
    contacto: professor.contacto,
    status: user.status,
  };
}
