import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";
import type { ProfessorResponse } from "../types/index.js";

export interface CreateProfessorData {
  nome: string;
  email: string;
  senha: string;
  cargo: string;
  contacto?: string;
}

export interface UpdateProfessorData {
  nome?: string;
  email?: string;
  cargo?: string;
  contacto?: string;
}

export class ProfessorAdminService {
  async create(data: CreateProfessorData): Promise<ProfessorResponse> {
    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      throw createError(409, "Email já registado");
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    const user = await prisma.user.create({
      data: {
        nome: data.nome,
        email: data.email,
        senhaHash,
        role: "PROFESSOR",
        professor: {
          create: {
            cargo: data.cargo,
            contacto: data.contacto,
          },
        },
      },
      include: { professor: true },
    });

    return {
      id: user.professor!.id,
      nome: user.nome,
      email: user.email,
      cargo: user.professor!.cargo,
      contacto: user.professor!.contacto,
      status: user.status.toLowerCase(),
    };
  }

  async list(): Promise<ProfessorResponse[]> {
    const professors = await prisma.professor.findMany({
      include: { user: true },
      orderBy: { user: { nome: "asc" } },
    });

    return professors.map((professor) => ({
      id: professor.id,
      nome: professor.user.nome,
      email: professor.user.email,
      cargo: professor.cargo,
      contacto: professor.contacto,
      status: professor.user.status.toLowerCase(),
    }));
  }

  async getById(id: string): Promise<ProfessorResponse> {
    const professor = await prisma.professor.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!professor) {
      throw createError(404, "Professor não encontrado");
    }

    return {
      id: professor.id,
      nome: professor.user.nome,
      email: professor.user.email,
      cargo: professor.cargo,
      contacto: professor.contacto,
      status: professor.user.status.toLowerCase(),
    };
  }

  async update(id: string, data: UpdateProfessorData): Promise<ProfessorResponse> {
    const professor = await prisma.professor.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!professor) {
      throw createError(404, "Professor não encontrado");
    }

    if (data.email && data.email !== professor.user.email) {
      const existing = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existing) {
        throw createError(409, "Email já está em uso");
      }
    }

    const updated = await prisma.professor.update({
      where: { id },
      data: {
        cargo: data.cargo,
        contacto: data.contacto,
        user: {
          update: {
            nome: data.nome,
            email: data.email,
          },
        },
      },
      include: { user: true },
    });

    return {
      id: updated.id,
      nome: updated.user.nome,
      email: updated.user.email,
      cargo: updated.cargo,
      contacto: updated.contacto,
      status: updated.user.status.toLowerCase(),
    };
  }

  async delete(id: string): Promise<{ message: string }> {
    const professor = await prisma.professor.findUnique({
      where: { id },
    });

    if (!professor) {
      throw createError(404, "Professor não encontrado");
    }

    await prisma.user.delete({
      where: { id: professor.userId },
    });

    return { message: "Professor removido com sucesso" };
  }

  async toggleStatus(id: string): Promise<ProfessorResponse> {
    const professor = await prisma.professor.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!professor) {
      throw createError(404, "Professor não encontrado");
    }

    const newStatus = professor.user.status === "ATIVO" ? "INATIVO" : "ATIVO";

    const updated = await prisma.user.update({
      where: { id: professor.userId },
      data: { status: newStatus },
    });

    return {
      id: professor.id,
      nome: updated.nome,
      email: updated.email,
      cargo: professor.cargo,
      contacto: professor.contacto,
      status: updated.status.toLowerCase(),
    };
  }
}
