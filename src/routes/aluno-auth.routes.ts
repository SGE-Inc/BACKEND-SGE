import { Router } from "express";
import { AlunoAuthController } from "../controllers/aluno-auth.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { registerAlunoSchema, alunoLoginSchema, resetSenhaSchema } from "../schemas/aluno-auth.schema.js";

const router = Router();
const controller = new AlunoAuthController();

/**
 * @openapi
 * /aluno/auth/registar:
 *   post:
 *     tags: [Aluno - Autenticação]
 *     summary: Registar novo aluno
 *     description: Regista um novo aluno e retorna credenciais de acesso geradas automaticamente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterAluno'
 *     responses:
 *       201:
 *         description: Aluno registado com credenciais
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AlunoRegisteredResponse'
 *       400:
 *         description: Dados inválidos
 *       409:
 *         description: Nº de processo já registado
 */
router.post("/registar", validate(registerAlunoSchema), asyncHandler(controller.register));

/**
 * @openapi
 * /aluno/auth/login:
 *   post:
 *     tags: [Aluno - Autenticação]
 *     summary: Login do aluno
 *     description: Autentica o aluno com utilizador e senha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoLogin'
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/AlunoSession'
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", validate(alunoLoginSchema), asyncHandler(controller.login));

/**
 * @openapi
 * /aluno/auth/logout:
 *   post:
 *     tags: [Aluno - Autenticação]
 *     summary: Logout do aluno
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Sessão terminada
 */
router.post("/logout", asyncHandler(controller.logout));

/**
 * @openapi
 * /aluno/auth/me:
 *   get:
 *     tags: [Aluno - Autenticação]
 *     summary: Dados do aluno autenticado
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Dados do aluno
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AlunoMeResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 */
router.get("/me", authenticate, asyncHandler(controller.me));

/**
 * @openapi
 * /aluno/auth/reset-senha:
 *   put:
 *     tags: [Aluno - Autenticação]
 *     summary: Redefinir senha
 *     description: Altera a senha do aluno autenticado
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetSenha'
 *     responses:
 *       200:
 *         description: Senha alterada com sucesso
 *       401:
 *         description: Senha actual incorrecta
 */
router.put("/reset-senha", authenticate, validate(resetSenhaSchema), asyncHandler(controller.resetSenha));

export default router;
