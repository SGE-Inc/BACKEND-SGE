import { PrismaClient } from "@generated/prisma/index.js";
import { IAlunoPerfilRepository } from "../domain/IAlunoPerfil";

export const PrismaAlunoPerfilRepository = (client: PrismaClient): IAlunoPerfilRepository => ({
  async findById(userId) {
    const user = await client.user.findFirst({
      where: { id: userId, role: "ALUNO" },
      include: {
        aluno: {
          include: {
            turma: { include: { curso: true } },
            _count: { select: { faltas: true, resultados: true } },
          },
        },
      },
    });
    if (!user || !user.aluno) return null;
    const a = user.aluno;
    return {
      id: a.id,
      userId: user.id,
      nome: user.nome,
      email: user.email,
      telefone: user.telefone,
      numeroUtilizador: user.numeroUtilizador,
      status: user.status,
      avatar: user.avatar,
      dataNascimento: a.dataNascimento,
      tipoIdentificacao: a.tipoIdentificacao,
      numeroIdentificacao: a.numeroIdentificacao,
      numeroProcesso: a.numeroProcesso,
      ultimaClasseFrequentada: a.ultimaClasseFrequentada,
      turmaId: a.turmaId,
      turmaNome: a.turma?.nome || null,
      cursoNome: a.turma?.curso?.nome || a.curso || null,
      cursoSigla: a.turma?.curso?.sigla || null,
      classe: a.classe,
      turno: a.turno,
      genero: a.genero,
      estadoCivil: a.estadoCivil,
      nomePai: a.nomePai,
      nomeMae: a.nomeMae,
      naturalidade: a.naturalidade,
      provincia: a.provincia,
      municipio: a.municipio,
      comuna: a.comuna,
      encarregadoNome: a.encarregadoNome,
      encarregadoParentesco: a.encarregadoParentesco,
      encarregadoGenero: a.encarregadoGenero,
      encarregadoDataNascimento: a.encarregadoDataNascimento,
      encarregadoTelefone: a.encarregadoTelefone,
      encarregadoEmail: a.encarregadoEmail,
      totalFaltas: a._count.faltas,
      totalResultados: a._count.resultados,
    };
  },
});
