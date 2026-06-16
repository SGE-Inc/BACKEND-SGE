import { Router } from "express";
import { AdminAuthController } from "../controllers/admin-auth.controller.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { validate } from "../middlewares/validation.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { adminRegisterSchema, adminLoginSchema, adminResetSenhaSchema } from "../schemas/admin-auth.schema.js";

const router = Router();
const controller = new AdminAuthController();

/**
 * @openapi
 * /admin/auth/register:
 *   post:
 *     tags: [Admin Auth]
 *     summary: Registar novo administrador
 *     description: Cria um novo utilizador com role ADMIN
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminRegister'
 *     responses:
 *       201:
 *         description: Administrador criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthUserResponse'
 *       400:
 *         description: Dados inválidos
 *       409:
 *         description: Email já registado
 */
router.post("/register", validate(adminRegisterSchema), asyncHandler(controller.register));

/**
 * @openapi
 * /admin/auth/login:
 *   post:
 *     tags: [Admin Auth]
 *     summary: Iniciar sessão como administrador
 *     description: Autentica o administrador e define o cookie httpOnly sge_token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminLogin'
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/AuthUserResponse'
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               example: sge_token=eyJhbGc...; HttpOnly; Secure; SameSite=Strict
 *             description: Cookie httpOnly com o JWT
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", validate(adminLoginSchema), asyncHandler(controller.login));

/**
 * @openapi
 * /admin/auth/logout:
 *   post:
 *     tags: [Admin Auth]
 *     summary: Terminar sessão
 *     description: Limpa o cookie sge_token
 *     responses:
 *       200:
 *         description: Sessão terminada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sessão terminada com sucesso
 */
router.post("/logout", asyncHandler(controller.logout));

/**
 * @openapi
 * /admin/auth/me:
 *   get:
 *     tags: [Admin Auth]
 *     summary: Obter perfil do administrador autenticado
 *     description: Retorna os dados do administrador actualmente autenticado
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Dados do administrador
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *       401:
 *         description: Não autenticado
 *       403:
 *         description: Sem permissão
 */
router.get("/me", authenticate, authorize("ADMIN"), asyncHandler(controller.me));

/**
 * @openapi
 * /admin/auth/reset-senha:
 *   put:
 *     tags: [Admin Auth]
 *     summary: Alterar senha do administrador
 *     description: Permite ao administrador autenticado alterar a sua senha
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senhaActual:
 *                 type: string
 *               novaSenha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Senha alterada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Senha actual incorrecta
 */
router.put(
  "/reset-senha",
  authenticate,
  authorize("ADMIN"),
  validate(adminResetSenhaSchema),
  asyncHandler(controller.resetSenha),
);

export default router;
