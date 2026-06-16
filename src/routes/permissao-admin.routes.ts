import { Router } from "express";
import { PermissaoAdminController } from "../controllers/permissao-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { updatePermissoesSchema } from "../schemas/permissao.schema.js";

const router = Router();
const controller = new PermissaoAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/permissoes:
 *   get:
 *     tags: [Admin - Permissões]
 *     summary: Listar permissões
 *     description: Retorna todas as permissões disponíveis no sistema
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de permissões
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PermissaoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/permissoes/meu-perfil:
 *   get:
 *     tags: [Admin - Permissões]
 *     summary: Obter permissões do perfil actual
 *     description: Retorna as permissões associadas ao cargo do administrador autenticado
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Permissões do perfil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/meu-perfil", asyncHandler(controller.getMeuPerfil));

/**
 * @openapi
 * /admin/permissoes:
 *   put:
 *     tags: [Admin - Permissões]
 *     summary: Actualizar permissões
 *     description: Actualiza as permissões de um cargo
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePermissoes'
 *     responses:
 *       200:
 *         description: Permissões actualizadas com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.put("/", validate(updatePermissoesSchema), asyncHandler(controller.update));

export default router;
