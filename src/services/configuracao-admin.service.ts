import { prisma } from "../lib/prisma.js";
import { createError } from "../middlewares/error-handler.js";
import type { InstituicaoResponse, AnoLectivoResponse } from "../types/index.js";
import { CloudinaryService } from "./cloudinary.service.js";

const cloudinarySvc = new CloudinaryService();

async function getAdminId(userId: string): Promise<string> {
  const admin = await prisma.admin.findUnique({ where: { userId } });
  if (!admin) throw createError(404, "Admin não encontrado");
  return admin.id;
}

export class ConfiguracaoAdminService {
  async getInstituicao(): Promise<InstituicaoResponse | null> {
    const inst = await prisma.instituicao.findFirst({
      orderBy: { createdAt: "desc" },
    });
    if (!inst) return null;
    return {
      id: inst.id,
      nome: inst.nome,
      sigla: inst.sigla,
      endereco: inst.endereco,
      telefone: inst.telefone,
      email: inst.email,
      website: inst.website,
      diretor: inst.diretor,
      logotipo: inst.logotipo,
    };
  }

  async updateInstituicao(userId: string, data: Record<string, unknown>): Promise<InstituicaoResponse> {
    const adminId = await getAdminId(userId);
    let inst = await prisma.instituicao.findFirst({ orderBy: { createdAt: "desc" } });
    if (inst) {
      inst = await prisma.instituicao.update({
        where: { id: inst.id },
        data: { ...data, adminId },
      });
    } else {
      inst = await prisma.instituicao.create({
        data: { ...data as { nome: string; sigla: string }, adminId },
      });
    }
    return {
      id: inst.id,
      nome: inst.nome,
      sigla: inst.sigla,
      endereco: inst.endereco,
      telefone: inst.telefone,
      email: inst.email,
      website: inst.website,
      diretor: inst.diretor,
      logotipo: inst.logotipo,
      message: "Instituição actualizada com sucesso",
    };
  }

  async uploadLogotipo(userId: string, filePath: string): Promise<{ logotipo: string }> {
    const adminId = await getAdminId(userId);
    const result = await cloudinarySvc.upload(filePath, {
      folder: "sge/instituicao",
      public_id: "logotipo",
      overwrite: true,
    });
    const inst = await prisma.instituicao.findFirst({ orderBy: { createdAt: "desc" } });
    if (inst) {
      await prisma.instituicao.update({ where: { id: inst.id }, data: { logotipo: result.secure_url } });
    } else {
      await prisma.instituicao.create({
        data: { nome: "", sigla: "", logotipo: result.secure_url, adminId },
      });
    }
    return { logotipo: result.secure_url, message: "Logotipo actualizado com sucesso" };
  }

  async listAnosLectivos(): Promise<AnoLectivoResponse[]> {
    const anos = await prisma.anoLectivo.findMany({
      orderBy: { ano: "desc" },
    });
    return anos.map(a => ({
      id: a.id,
      ano: a.ano,
      dataInicio: a.dataInicio.toISOString(),
      dataFim: a.dataFim.toISOString(),
      activo: a.activo,
    }));
  }

  async createAnoLectivo(userId: string, data: { ano: string; dataInicio: string; dataFim: string }): Promise<AnoLectivoResponse> {
    const adminId = await getAdminId(userId);
    const existing = await prisma.anoLectivo.findUnique({ where: { ano: data.ano } });
    if (existing) throw createError(409, "Ano lectivo já existe");

    const ano = await prisma.anoLectivo.create({
      data: {
        ano: data.ano,
        dataInicio: new Date(data.dataInicio),
        dataFim: new Date(data.dataFim),
        adminId,
      },
    });
    return {
      id: ano.id,
      ano: ano.ano,
      dataInicio: ano.dataInicio.toISOString(),
      dataFim: ano.dataFim.toISOString(),
      activo: ano.activo,
      message: "Ano lectivo criado com sucesso",
    };
  }

  async activateAnoLectivo(id: string): Promise<AnoLectivoResponse> {
    const ano = await prisma.anoLectivo.findUnique({ where: { id } });
    if (!ano) throw createError(404, "Ano lectivo não encontrado");

    await prisma.anoLectivo.updateMany({
      where: { activo: true },
      data: { activo: false },
    });
    const updated = await prisma.anoLectivo.update({
      where: { id },
      data: { activo: true },
    });
    return {
      id: updated.id,
      ano: updated.ano,
      dataInicio: updated.dataInicio.toISOString(),
      dataFim: updated.dataFim.toISOString(),
      activo: updated.activo,
      message: "Ano lectivo activado com sucesso",
    };
  }

  async updateAnoLectivo(id: string, data: Record<string, unknown>): Promise<AnoLectivoResponse> {
    const existing = await prisma.anoLectivo.findUnique({ where: { id } });
    if (!existing) throw createError(404, "Ano lectivo não encontrado");

    const updateData: Record<string, unknown> = { ...data };
    if (data.dataInicio) updateData.dataInicio = new Date(data.dataInicio as string);
    if (data.dataFim) updateData.dataFim = new Date(data.dataFim as string);

    const ano = await prisma.anoLectivo.update({ where: { id }, data: updateData });
    return {
      id: ano.id,
      ano: ano.ano,
      dataInicio: ano.dataInicio.toISOString(),
      dataFim: ano.dataFim.toISOString(),
      activo: ano.activo,
      message: "Ano lectivo actualizado com sucesso",
    };
  }
}
