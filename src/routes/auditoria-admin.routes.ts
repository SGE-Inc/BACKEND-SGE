import { Router } from "express";
import { AuditoriaAdminController } from "../controllers/auditoria-admin.controller.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";

const router = Router();
const controller = new AuditoriaAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/auditoria:
 *   get:
 *     tags: [Admin - Auditoria]
 *     summary: Listar logs de auditoria
 *     description: Retorna lista paginada de logs de auditoria com filtros
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Quantidade por página
 *       - in: query
 *         name: tipo
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por tipo de acção
 *       - in: query
 *         name: role
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por role do utilizador
 *       - in: query
 *         name: utilizador
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por nome do utilizador
 *       - in: query
 *         name: dataInicio
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Data de início do período
 *       - in: query
 *         name: dataFim
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Data de fim do período
 *     responses:
 *       200:
 *         description: Lista de logs de auditoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuditoriaLogResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/auditoria/estatisticas:
 *   get:
 *     tags: [Admin - Auditoria]
 *     summary: Estatísticas de auditoria
 *     description: Retorna estatísticas dos logs de auditoria
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: periodo
 *         required: false
 *         schema:
 *           type: string
 *         description: Período para filtrar (ex: 7d, 30d)
 *     responses:
 *       200:
 *         description: Estatísticas de auditoria
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/estatisticas", asyncHandler(controller.getEstatisticas));

/**
 * @openapi
 * /admin/auditoria/{id}:
 *   get:
 *     tags: [Admin - Auditoria]
 *     summary: Obter log de auditoria por ID
 *     description: Retorna os detalhes de um log de auditoria específico
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do log de auditoria
 *     responses:
 *       200:
 *         description: Log de auditoria
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Log não encontrado
 */
router.get("/:id", asyncHandler(controller.getById));

export default router;
