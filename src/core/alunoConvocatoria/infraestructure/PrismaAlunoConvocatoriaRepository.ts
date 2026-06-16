import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoConvocatoriaRepository } from "../domain/IAlunoConvocatoria";

export const PrismaAlunoConvocatoriaRepository = (client: PrismaClient): IAlunoConvocatoriaRepository => ({
  async findByAlunoId(alunoId) {
    const aluno = await client.aluno.findUnique({ where: { userId: alunoId } });
    if (!aluno) return [];
    return client.convocatoria.findMany({
      where: { alunoId: aluno.id },
      orderBy: { dataRealizacao: "desc" },
    });
  },
});
