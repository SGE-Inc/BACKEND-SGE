import { Router } from "express";
import { DashboardAdminController } from "../controllers/dashboard-admin.controller.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";

const router = Router();
const controller = new DashboardAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/dashboard/stats:
 *   get:
 *     tags: [Admin - Dashboard]
 *     summary: Estatísticas gerais do dashboard
 *     description: Retorna estatísticas como total de estudantes, professores, turmas, etc.
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Estatísticas do dashboard
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DashboardStats'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/stats", asyncHandler(controller.getStats));

/**
 * @openapi
 * /admin/dashboard/distribuicao-cursos:
 *   get:
 *     tags: [Admin - Dashboard]
 *     summary: Distribuição de estudantes por curso
 *     description: Retorna a quantidade de estudantes por curso
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Distribuição por curso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CursoDistribuicao'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/distribuicao-cursos", asyncHandler(controller.getDistribuicaoCursos));

/**
 * @openapi
 * /admin/dashboard/evolucao-matriculas:
 *   get:
 *     tags: [Admin - Dashboard]
 *     summary: Evolução de matrículas ao longo do tempo
 *     description: Retorna dados da evolução de matrículas por ano
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: ano
 *         required: false
 *         schema:
 *           type: string
 *         description: Ano lectivo para filtrar (ex: 2025)
 *     responses:
 *       200:
 *         description: Dados de evolução de matrículas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/evolucao-matriculas", asyncHandler(controller.getEvolucaoMatriculas));

/**
 * @openapi
 * /admin/dashboard/media-disciplinas:
 *   get:
 *     tags: [Admin - Dashboard]
 *     summary: Média de notas por disciplina
 *     description: Retorna a média de notas agrupada por disciplina
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Média por disciplina
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MediaDisciplina'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/media-disciplinas", asyncHandler(controller.getMediaDisciplinas));

/**
 * @openapi
 * /admin/dashboard/ultimos-logs:
 *   get:
 *     tags: [Admin - Dashboard]
 *     summary: Últimos logs de auditoria
 *     description: Retorna os registos de auditoria mais recentes
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: limite
 *         required: false
 *         schema:
 *           type: integer
 *           default: 8
 *         description: Número de logs a retornar
 *     responses:
 *       200:
 *         description: Últimos logs de auditoria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AuditLog'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/ultimos-logs", asyncHandler(controller.getUltimosLogs));

/**
 * @openapi
 * /admin/dashboard/proximos-eventos:
 *   get:
 *     tags: [Admin - Dashboard]
 *     summary: Próximos eventos académicos
 *     description: Retorna os próximos eventos académicos agendados
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Próximos eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EventoAcademico'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/proximos-eventos", asyncHandler(controller.getProximosEventos));

export default router;
