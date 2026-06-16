import { Router } from "express";
import { AdminUtilizadorController } from "../controllers/admin-utilizador.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createAdminUtilizadorSchema, updateAdminUtilizadorSchema, toggleAdminUtilizadorStatusSchema } from "../schemas/admin-utilizador.schema.js";

const router = Router();
const controller = new AdminUtilizadorController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/utilizadores:
 *   get:
 *     tags: [Admin - Utilizadores]
 *     summary: Listar utilizadores administradores
 *     description: Retorna a lista de utilizadores com role ADMIN ou SUPERADMIN
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de utilizadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AdminUtilizadorResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/utilizadores:
 *   post:
 *     tags: [Admin - Utilizadores]
 *     summary: Criar utilizador administrador
 *     description: Cria um novo utilizador com role ADMIN ou SUPERADMIN
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAdminUtilizador'
 *     responses:
 *       201:
 *         description: Utilizador criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Email já registado
 */
router.post("/", validate(createAdminUtilizadorSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/utilizadores/{id}:
 *   put:
 *     tags: [Admin - Utilizadores]
 *     summary: Actualizar utilizador administrador
 *     description: Actualiza os dados de um utilizador administrador
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do utilizador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAdminUtilizador'
 *     responses:
 *       200:
 *         description: Utilizador actualizado
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Utilizador não encontrado
 *       409:
 *         description: Email já está em uso
 */
router.put("/:id", validate(updateAdminUtilizadorSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/utilizadores/{id}/estado:
 *   patch:
 *     tags: [Admin - Utilizadores]
 *     summary: Activar/desactivar utilizador administrador
 *     description: Alterna o estado do utilizador entre ACTIVO e INACTIVO
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do utilizador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ToggleAdminUtilizadorStatus'
 *     responses:
 *       200:
 *         description: Estado actualizado com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Utilizador não encontrado
 */
router.patch("/:id/estado", validate(toggleAdminUtilizadorStatusSchema), asyncHandler(controller.toggleStatus));

/**
 * @openapi
 * /admin/utilizadores/{id}:
 *   delete:
 *     tags: [Admin - Utilizadores]
 *     summary: Remover utilizador administrador
 *     description: Remove um utilizador administrador. Não permite remover o último SUPERADMIN
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do utilizador
 *     responses:
 *       200:
 *         description: Utilizador removido com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       400:
 *         description: Não é permitido remover o último superadmin
 *       404:
 *         description: Utilizador não encontrado
 */
router.delete("/:id", asyncHandler(controller.delete));

export default router;
