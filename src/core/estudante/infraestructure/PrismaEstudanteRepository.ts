import { PrismaClient } from "@generated/prisma/index.js";
import { IEstudanteRepository, IEstudanteBase, EstudanteFilters } from "../domain/IEstudante";
import { v4 as uuidv4 } from "uuid";

export const PrismaEstudanteRepository = (client: PrismaClient): IEstudanteRepository => ({
  async findAll(filters: EstudanteFilters) {
    const where: any = {};
    if (filters.curso) where.curso = filters.curso;
    if (filters.turma) where.turma = { nome: filters.turma };
    if (filters.status) where.user = { status: filters.status };
    if (filters.search) {
      where.OR = [
        { user: { nome: { contains: filters.search, mode: "insensitive" } } },
        { numeroProcesso: { contains: filters.search } },
        { user: { email: { contains: filters.search, mode: "insensitive" } } },
      ];
    }
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const skip = (page - 1) * limit;
    const [alunos, total] = await Promise.all([
      client.aluno.findMany({
        where,
        include: { user: true, turma: { include: { curso: true } } },
        skip,
        take: limit,
        orderBy: { user: { nome: "asc" } },
      }),
      client.aluno.count({ where }),
    ]);
    return {
      data: alunos.map(a => mapToEstudante(a)),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },
  async findById(id) {
    const aluno = await client.aluno.findUnique({
      where: { id },
      include: { user: true, turma: { include: { curso: true } } },
    });
    if (!aluno) return null;
    return mapToEstudante(aluno);
  },
  async findByProcesso(numeroProcesso) {
    const aluno = await client.aluno.findFirst({
      where: { numeroProcesso },
      include: { user: true, turma: { include: { curso: true } } },
    });
    if (!aluno) return null;
    return mapToEstudante(aluno);
  },
  async save(data) {
    const userId = uuidv4();
    const alunoId = uuidv4();
    const created = await client.user.create({
      data: {
        id: userId,
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        senhaHash: "temporary-hash",
        role: "ALUNO",
        status: "ATIVO",
        aluno: {
          create: {
            id: alunoId,
            dataNascimento: new Date(data.dataNascimento),
            tipoIdentificacao: data.tipoIdentificacao,
            numeroIdentificacao: data.numeroIdentificacao,
            numeroProcesso: data.numeroProcesso,
            turmaId: data.turmaId,
            curso: data.curso,
            classe: data.classe,
            genero: data.genero,
            turno: data.turno,
            nomePai: data.nomePai,
            nomeMae: data.nomeMae,
            encarregadoNome: data.encarregadoNome,
            encarregadoParentesco: data.encarregadoParentesco,
            encarregadoTelefone: data.encarregadoTelefone,
          },
        },
      },
      include: { aluno: { include: { turma: { include: { curso: true } } } } },
    });
    return mapToEstudante((created as any).aluno!);
  },
  async update(id, data) {
    const aluno = await client.aluno.findUnique({ where: { id }, include: { user: true } });
    if (!aluno) throw new Error("Estudante não encontrado");
    const userData: any = {};
    if (data.nome) userData.nome = data.nome;
    if (data.email !== undefined) userData.email = data.email;
    if (data.telefone !== undefined) userData.telefone = data.telefone;
    const alunoData: any = {};
    if (data.dataNascimento) alunoData.dataNascimento = new Date(data.dataNascimento);
    if (data.genero) alunoData.genero = data.genero;
    if (data.turno) alunoData.turno = data.turno;
    if (data.curso) alunoData.curso = data.curso;
    if (data.classe) alunoData.classe = data.classe;
    if (data.nomePai !== undefined) alunoData.nomePai = data.nomePai;
    if (data.nomeMae !== undefined) alunoData.nomeMae = data.nomeMae;
    if (data.encarregadoNome !== undefined) alunoData.encarregadoNome = data.encarregadoNome;
    if (data.encarregadoParentesco !== undefined) alunoData.encarregadoParentesco = data.encarregadoParentesco;
    if (data.encarregadoTelefone !== undefined) alunoData.encarregadoTelefone = data.encarregadoTelefone;
    if (data.turmaId) alunoData.turmaId = data.turmaId;
    if (Object.keys(userData).length > 0) {
      await client.user.update({ where: { id: aluno.userId }, data: { ...userData, updatedAt: new Date() } });
    }
    if (Object.keys(alunoData).length > 0) {
      await client.aluno.update({ where: { id }, data: alunoData });
    }
    return this.findById(id) as Promise<any>;
  },
  async delete(id) {
    const aluno = await client.aluno.findUnique({ where: { id } });
    if (!aluno) throw new Error("Estudante não encontrado");
    await client.aluno.delete({ where: { id } });
    await client.user.delete({ where: { id: aluno.userId } });
  },
  async changeStatus(id, status, motivo?) {
    const aluno = await client.aluno.findUnique({ where: { id }, include: { user: true } });
    if (!aluno) throw new Error("Estudante não encontrado");
    await client.user.update({
      where: { id: aluno.userId },
      data: { status: status as any, updatedAt: new Date() },
    });
    if (motivo) {
      await client.auditoriaLog.create({
        data: {
          id: uuidv4(),
          tipo: "ACTUALIZAR",
          descricao: `Estado alterado para ${status}: ${motivo}`,
          utilizador: aluno.user.nome,
          role: "ALUNO",
          entidade: "Aluno",
          entidadeId: id,
          data: new Date().toISOString(),
        },
      });
    }
    return this.findById(id) as Promise<any>;
  },
  async transfer(id, novaTurmaId, motivo?) {
    const aluno = await client.aluno.findUnique({ where: { id }, include: { user: true, turma: true } });
    if (!aluno) throw new Error("Estudante não encontrado");
    const updated = await client.aluno.update({
      where: { id },
      data: { turmaId: novaTurmaId },
      include: { user: true, turma: { include: { curso: true } } },
    });
    await client.auditoriaLog.create({
      data: {
        id: uuidv4(),
        tipo: "TRANSFERIR",
        descricao: `Transferido para nova turma${motivo ? `: ${motivo}` : ""}`,
        utilizador: aluno.user.nome,
        role: "ALUNO",
        entidade: "Aluno",
        entidadeId: id,
        data: new Date().toISOString(),
      },
    });
    return mapToEstudante(updated);
  },
  async getHistorico(id) {
    const aluno = await client.aluno.findUnique({
      where: { id },
      include: {
        user: true,
        resultados: {
          include: { exame: { include: { disciplina: true } } },
          orderBy: { exame: { data: "desc" } },
        },
      },
    });
    if (!aluno) throw new Error("Estudante não encontrado");
    return {
      estudante: aluno.user.nome,
      numeroProcesso: aluno.numeroProcesso,
      resultados: aluno.resultados.map(r => ({
        exameId: r.exameId,
        disciplina: r.exame.disciplina.nome,
        nota: r.nota,
        data: r.exame.data,
        tipo: r.exame.tipo,
      })),
    };
  },
});

function mapToEstudante(aluno: any): IEstudanteBase {
  return {
    id: aluno.id || aluno.aluno?.id || aluno.user?.aluno?.id,
    userId: aluno.userId || aluno.user?.id,
    nome: aluno.user?.nome || aluno.nome,
    email: aluno.user?.email || aluno.email,
    telefone: aluno.user?.telefone || aluno.telefone,
    numeroProcesso: aluno.numeroProcesso,
    turma: aluno.turma?.nome || aluno.turmaNome,
    turmaId: aluno.turmaId,
    curso: aluno.curso || aluno.turma?.curso?.sigla,
    classe: aluno.classe,
    dataNascimento: aluno.dataNascimento,
    tipoIdentificacao: aluno.tipoIdentificacao,
    numeroIdentificacao: aluno.numeroIdentificacao,
    genero: aluno.genero,
    turno: aluno.turno,
    nomePai: aluno.nomePai,
    nomeMae: aluno.nomeMae,
    encarregadoNome: aluno.encarregadoNome,
    encarregadoParentesco: aluno.encarregadoParentesco,
    encarregadoTelefone: aluno.encarregadoTelefone,
    status: aluno.user?.status || aluno.status,
  };
}
