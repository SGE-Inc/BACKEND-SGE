import { Router } from "express";
import { CargoAdminController } from "../controllers/cargo-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createCargoSchema, updateCargoSchema } from "../schemas/cargo.schema.js";

const router = Router();
const controller = new CargoAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/cargos:
 *   get:
 *     tags: [Admin - Cargos]
 *     summary: Listar cargos
 *     description: Retorna a lista de cargos disponíveis
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de cargos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CargoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/cargos:
 *   post:
 *     tags: [Admin - Cargos]
 *     summary: Criar cargo
 *     description: Cria um novo cargo
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCargo'
 *     responses:
 *       201:
 *         description: Cargo criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Já existe um cargo com este nome
 */
router.post("/", validate(createCargoSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/cargos/{id}:
 *   put:
 *     tags: [Admin - Cargos]
 *     summary: Actualizar cargo
 *     description: Actualiza os dados de um cargo existente
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do cargo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCargo'
 *     responses:
 *       200:
 *         description: Cargo actualizado
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Cargo não encontrado
 */
router.put("/:id", validate(updateCargoSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/cargos/{id}:
 *   delete:
 *     tags: [Admin - Cargos]
 *     summary: Remover cargo
 *     description: Remove um cargo existente
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do cargo
 *     responses:
 *       200:
 *         description: Cargo removido com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Cargo não encontrado
 */
router.delete("/:id", asyncHandler(controller.delete));

export default router;
