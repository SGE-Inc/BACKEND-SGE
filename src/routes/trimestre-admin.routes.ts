import { Router } from "express";
import { TrimestreAdminController } from "../controllers/trimestre-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { defineTrimestresSchema } from "../schemas/trimestre.schema.js";

const router = Router();
const controller = new TrimestreAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/trimestres:
 *   get:
 *     tags: [Admin - Trimestres]
 *     summary: Listar trimestres
 *     description: Retorna os trimestres definidos para um ano lectivo
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: anoLectivo
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por ano lectivo
 *     responses:
 *       200:
 *         description: Lista de trimestres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TrimestreResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/trimestres:
 *   put:
 *     tags: [Admin - Trimestres]
 *     summary: Definir trimestres
 *     description: Define as datas dos trimestres para um ano lectivo
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DefineTrimestres'
 *     responses:
 *       200:
 *         description: Trimestres definidos com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.put("/", validate(defineTrimestresSchema), asyncHandler(controller.define));

export default router;
