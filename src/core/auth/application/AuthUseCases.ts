import { StatusCodes } from "http-status-codes";
import { TRegisterUseCase, TLoginUseCase, TMeUseCase, TResetSenhaUseCase } from "../domain/IAuth";
import { v4 as uuidv4 } from "uuid";

export const RegisterUseCase: TRegisterUseCase = (ResponseProvider, hash, saveUser) => async (req) => {
  try {
    const hashedPassword = await hash(req.body.senha);
    const user: any = {
      id: uuidv4(),
      nome: req.body.nome,
      email: req.body.email || null,
      telefone: req.body.telefone || null,
      senhaHash: hashedPassword,
      role: req.body.role,
      status: "ATIVO",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await saveUser(user);
    return ResponseProvider(StatusCodes.CREATED, "Utilizador registado com sucesso", {
      id: user.id,
      nome: user.nome,
      email: user.email,
      role: user.role,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return ResponseProvider(StatusCodes.CONFLICT, "Email já registado", null);
    }
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const LoginUseCase: TLoginUseCase = (ResponseProvider, compare, createJwt, findUserByIdentifier) => async (req) => {
  try {
    const user = await findUserByIdentifier(req.body.identificador);
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
      user: { id: user.id, nome: user.nome, email: user.email, role: user.role },
    });
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const MeUseCase: TMeUseCase = (ResponseProvider, findUserById) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findUserById(userId);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    }
    const { senhaHash, ...rest } = user;
    return ResponseProvider(StatusCodes.OK, "Perfil do utilizador", rest);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ResetSenhaUseCase: TResetSenhaUseCase = (ResponseProvider, compare, hash, findUserById, updateSenha) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findUserById(userId);
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
