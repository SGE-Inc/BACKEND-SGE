import { PrismaClient } from "@generated/prisma/index.js";
import { IProfessorRepository, IProfessorBase } from "../domain/IProfessor";
import { v4 as uuidv4 } from "uuid";

export const PrismaProfessorRepository = (client: PrismaClient): IProfessorRepository => ({
  async findAll() {
    const users = await client.user.findMany({
      where: { role: "PROFESSOR" },
      include: { professor: true },
      orderBy: { nome: "asc" },
    });
    return users.filter(u => u.professor).map(u => mapToProfessor(u, u.professor!));
  },
  async findById(id) {
    const user = await client.user.findFirst({
      where: { id, role: "PROFESSOR" },
      include: { professor: true },
    });
    if (!user || !user.professor) return null;
    return mapToProfessor(user, user.professor);
  },
  async save(data) {
    const user = await client.user.create({
      data: {
        id: data.userId,
        nome: data.nome,
        email: data.email,
        senhaHash: data.senhaHash,
        role: "PROFESSOR",
        status: "ATIVO",
        professor: {
          create: {
            id: data.id,
            cargo: data.cargo,
            contacto: data.contacto,
          },
        },
      },
      include: { professor: true },
    });
    return mapToProfessor(user, user.professor!);
  },
  async update(id, data) {
    const user = await client.user.update({
      where: { id },
      data: {
        nome: data.nome,
        email: data.email,
        updatedAt: new Date(),
        professor: {
          update: {
            cargo: data.cargo,
            contacto: data.contacto,
          },
        },
      },
      include: { professor: true },
    });
    return mapToProfessor(user, user.professor!);
  },
  async delete(id) {
    const user = await client.user.findFirst({ where: { id, role: "PROFESSOR" }, include: { professor: true } });
    if (user?.professor) {
      await client.professorDisciplina.deleteMany({ where: { professorId: user.professor.id } });
    }
    await client.professor.delete({ where: { userId: id } });
    await client.user.delete({ where: { id } });
  },
  async toggleStatus(id) {
    const user = await client.user.findUnique({ where: { id }, include: { professor: true } });
    if (!user || !user.professor) throw new Error("Professor não encontrado");
    const newStatus = user.status === "ATIVO" ? "INATIVO" : "ATIVO";
    const updated = await client.user.update({
      where: { id },
      data: { status: newStatus, updatedAt: new Date() },
      include: { professor: true },
    });
    return mapToProfessor(updated, updated.professor!);
  },
});

function mapToProfessor(user: any, professor: any): IProfessorBase {
  return {
    id: professor.id,
    userId: user.id,
    nome: user.nome,
    email: user.email || "",
    cargo: professor.cargo,
    contacto: professor.contacto,
    status: user.status,
  };
}
