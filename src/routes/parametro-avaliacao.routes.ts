import { Router } from "express";
import { ParametroAvaliacaoController } from "../controllers/parametro-avaliacao.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { updateParametrosAvaliacaoSchema } from "../schemas/parametro-avaliacao.schema.js";

const router = Router();
const controller = new ParametroAvaliacaoController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/parametros-avaliacao:
 *   get:
 *     tags: [Admin - Parâmetros de Avaliação]
 *     summary: Listar parâmetros de avaliação
 *     description: Retorna os parâmetros de avaliação configurados
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Parâmetros de avaliação
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ParametroAvaliacaoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/parametros-avaliacao:
 *   put:
 *     tags: [Admin - Parâmetros de Avaliação]
 *     summary: Actualizar parâmetros de avaliação
 *     description: Actualiza os parâmetros de avaliação do sistema
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateParametrosAvaliacao'
 *     responses:
 *       200:
 *         description: Parâmetros actualizados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.put("/", validate(updateParametrosAvaliacaoSchema), asyncHandler(controller.update));

export default router;
