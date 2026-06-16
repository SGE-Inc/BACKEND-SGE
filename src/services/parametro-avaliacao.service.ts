import { prisma } from "../lib/prisma.js";

export class ParametroAvaliacaoService {
  async list() {
    const params = await prisma.parametroAvaliacao.findMany({ orderBy: { ordem: "asc" } });
    return params.map((p) => ({
      id: p.id,
      nome: p.nome,
      sigla: p.sigla,
      descricao: p.descricao,
      peso: p.peso,
      ordem: p.ordem,
    }));
  }

  async update(parametros: { id?: string; nome: string; sigla: string; descricao?: string; peso: number; ordem: number }[]) {
    for (const p of parametros) {
      if (p.id) {
        await prisma.parametroAvaliacao.update({ where: { id: p.id }, data: p });
      } else {
        await prisma.parametroAvaliacao.upsert({
          where: { sigla: p.sigla },
          update: p,
          create: p,
        });
      }
    }
    return { message: "Parâmetros de avaliação actualizados com sucesso" };
  }
}
