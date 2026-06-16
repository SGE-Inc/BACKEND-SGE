import { PrismaClient } from "@generated/prisma/index.js";
import { IConfiguracaoRepository } from "../domain/IConfiguracao";
import { v2 as cloudinary } from "cloudinary";

export const PrismaConfiguracaoRepository = (client: PrismaClient): IConfiguracaoRepository => ({
  async getInstituicao() {
    const inst = await client.instituicao.findFirst();
    if (!inst) return null;
    return inst;
  },
  async updateInstituicao(data) {
    const inst = await client.instituicao.findFirst();
    if (!inst) throw new Error("Instituição não encontrada");
    return client.instituicao.update({ where: { id: inst.id }, data });
  },
  async uploadLogotipo(filePath) {
    const inst = await client.instituicao.findFirst();
    if (!inst) throw new Error("Instituição não encontrada");
    const result = await cloudinary.uploader.upload(filePath, { folder: "instituicao" });
    return client.instituicao.update({
      where: { id: inst.id },
      data: { logotipo: result.secure_url },
    });
  },
  async listAnosLectivos() {
    return client.anoLectivo.findMany({ orderBy: { ano: "desc" } });
  },
  async createAnoLectivo(data) {
    return client.anoLectivo.create({
      data: { ano: data.ano, dataInicio: new Date(data.dataInicio), dataFim: new Date(data.dataFim), adminId: data.adminId },
    });
  },
  async activateAnoLectivo(id) {
    await client.anoLectivo.updateMany({ where: { activo: true }, data: { activo: false } });
    return client.anoLectivo.update({ where: { id }, data: { activo: true } });
  },
  async updateAnoLectivo(id, data) {
    const updateData: any = {};
    if (data.ano) updateData.ano = data.ano;
    if (data.dataInicio) updateData.dataInicio = new Date(data.dataInicio);
    if (data.dataFim) updateData.dataFim = new Date(data.dataFim);
    return client.anoLectivo.update({ where: { id }, data: updateData });
  },
});
