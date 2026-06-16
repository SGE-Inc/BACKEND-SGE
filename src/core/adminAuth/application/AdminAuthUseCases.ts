import { StatusCodes } from "http-status-codes";
import { TAdminRegisterUseCase, TAdminLoginUseCase, TAdminMeUseCase, TAdminResetSenhaUseCase } from "../domain/IAdminAuth";
import { v4 as uuidv4 } from "uuid";

export const AdminRegisterUseCase: TAdminRegisterUseCase = (ResponseProvider, hash, saveAdmin) => async (req) => {
  try {
    const hashedPassword = await hash(req.body.senha);
    const user: any = {
      id: uuidv4(),
      nome: req.body.nome,
      email: req.body.email,
      senhaHash: hashedPassword,
      role: "ADMIN",
      status: "ATIVO",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await saveAdmin(user);
    return ResponseProvider(StatusCodes.CREATED, "Administrador registado com sucesso", {
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

export const AdminLoginUseCase: TAdminLoginUseCase = (ResponseProvider, compare, createJwt, findAdminByEmail) => async (req) => {
  try {
    const user = await findAdminByEmail(req.body.email);
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

export const AdminMeUseCase: TAdminMeUseCase = (ResponseProvider, findAdminById) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findAdminById(userId);
    if (!user) {
      return ResponseProvider(StatusCodes.NOT_FOUND, "Utilizador não encontrado", null);
    }
    const { senhaHash, ...rest } = user;
    return ResponseProvider(StatusCodes.OK, "Perfil do administrador", rest);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const AdminResetSenhaUseCase: TAdminResetSenhaUseCase = (ResponseProvider, compare, hash, findAdminById, updateSenha) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) {
      return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    }
    const user = await findAdminById(userId);
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
