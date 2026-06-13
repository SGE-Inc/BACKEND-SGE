import { Router } from "express";
import { AdminAuthController } from "../controllers/admin-auth.controller.js";
import { validate } from "../middlewares/validation.js";
import { adminRegisterSchema, adminLoginSchema } from "../schemas/admin-auth.schema.js";

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
router.post("/register", validate(adminRegisterSchema), controller.register.bind(controller));

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
router.post("/login", validate(adminLoginSchema), controller.login.bind(controller));

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
router.post("/logout", controller.logout.bind(controller));

export default router;
