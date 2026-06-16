import { StatusCodes } from "http-status-codes";
import { TAlunoRegisterUseCase, TAlunoLoginUseCase, TAlunoMeUseCase, TAlunoResetSenhaUseCase } from "../domain/IAlunoAuth";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export const AlunoRegisterUseCase: TAlunoRegisterUseCase = (ResponseProvider, hash, saveAluno, findLastNumero) => async (req) => {
  try {
    const randomSenha = crypto.randomBytes(6).toString("hex");
    const hashedPassword = await hash(randomSenha);
    const lastNumero = await findLastNumero();
    const nextNumero = lastNumero + 1;

    const userId = uuidv4();
    const alunoId = uuidv4();

    await saveAluno({
      id: alunoId,
      userId,
      nome: req.body.nome,
      dataNascimento: new Date(req.body.dataNascimento),
      tipoIdentificacao: req.body.tipoIdentificacao,
      numeroIdentificacao: req.body.numeroIdentificacao,
      numeroProcesso: req.body.numeroProcesso,
      numeroUtilizador: `${req.body.numeroProcesso}-${req.body.tipoIdentificacao}`,
      senhaHash: hashedPassword,
      role: "ALUNO",
      status: "ATIVO",
      curso: req.body.curso,
      classe: req.body.classe,
      telefone: req.body.telefone,
      email: req.body.email,
      encarregadoNome: req.body.encarregadoNome,
      encarregadoParentesco: req.body.encarregadoParentesco,
      encarregadoTelefone: req.body.encarregadoTelefone,
    });

    return ResponseProvider(StatusCodes.CREATED, "Aluno registado com sucesso", {
      numeroProcesso: req.body.numeroProcesso,
      numeroUtilizador: `${req.body.numeroProcesso}-${req.body.tipoIdentificacao}`,
      senha: randomSenha,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return ResponseProvider(StatusCodes.CONFLICT, "Número de processo ou identificação já existente", null);
    }
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const AlunoLoginUseCase: TAlunoLoginUseCase = (ResponseProvider, compare, createJwt, findAlunoByNumero) => async (req) => {
  try {
    const user = await findAlunoByNumero(req.body.utilizador);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    }
    if (user.status !== "ATIVO") {
      return ResponseProvider(StatusCodes.FORBIDDEN, "Conta desactivada", null);
    }
    const isMatch = await compare(req.body.senha, user.senhaHash);
    if (!isMatch) {
      return ResponseProvider(StatusCodes.BAD_REQUEST, "Credenciais inválidas", null);
    }
    const token = createJwt({ sub: user.id, role: user.role });
    return ResponseProvider(StatusCodes.OK, "Login bem-sucedido", {
      token,
      user: { id: user.id, nome: user.nome, numeroProcesso: user.numeroProcesso, role: user.role },
    });
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const AlunoMeUseCase: TAlunoMeUseCase = (ResponseProvider, findAlunoById) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findAlunoById(userId);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    }
    const { senhaHash, ...rest } = user;
    return ResponseProvider(StatusCodes.OK, "Perfil do aluno", rest);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const AlunoResetSenhaUseCase: TAlunoResetSenhaUseCase = (ResponseProvider, compare, hash, findAlunoById, updateSenha) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findAlunoById(userId);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    }
    const isMatch = await compare(req.body.senhaActual, user.senhaHash);
    if (!isMatch) {
      return ResponseProvider(StatusCodes.BAD_REQUEST, "Senha actual incorrecta", null);
    }
    const hashedPassword = await hash(req.body.novaSenha);
    await updateSenha(userId, hashedPassword);
    return ResponseProvider(StatusCodes.OK, "Senha actualizada com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};
