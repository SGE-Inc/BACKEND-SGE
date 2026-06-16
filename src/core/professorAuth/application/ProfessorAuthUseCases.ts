import { StatusCodes } from "http-status-codes";
import { TProfessorLoginUseCase, TProfessorMeUseCase, TProfessorResetSenhaUseCase } from "../domain/IProfessorAuth";

export const ProfessorLoginUseCase: TProfessorLoginUseCase = (ResponseProvider, compare, createJwt, findProfessorByNumero) => async (req) => {
  try {
    const user = await findProfessorByNumero(req.body.utilizador);
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
    const token = createJwt({ sub: user.id, role: "PROFESSOR" });
    return ResponseProvider(StatusCodes.OK, "Login bem-sucedido", {
      token,
      user: { id: user.id, nome: user.nome, cargo: user.cargo, role: "PROFESSOR" },
    });
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ProfessorMeUseCase: TProfessorMeUseCase = (ResponseProvider, findProfessorById) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findProfessorById(userId);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Professor não encontrado", null);
    }
    const { senhaHash, ...rest } = user;
    return ResponseProvider(StatusCodes.OK, "Perfil do professor", rest);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ProfessorResetSenhaUseCase: TProfessorResetSenhaUseCase = (ResponseProvider, compare, hash, findProfessorById, updateSenha) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findProfessorById(userId);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Professor não encontrado", null);
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
