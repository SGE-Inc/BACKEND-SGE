import { Router } from "express";
import { RelatorioAdminController } from "../controllers/relatorio-admin.controller.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";

const router = Router();
const controller = new RelatorioAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/relatorios/estudantes-por-curso:
 *   get:
 *     tags: [Admin - Relatórios]
 *     summary: Relatório de estudantes por curso
 *     description: Retorna a quantidade de estudantes agrupados por curso
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: anoLectivo
 *         required: false
 *         schema:
 *           type: string
 *         description: Ano lectivo para filtrar
 *     responses:
 *       200:
 *         description: Relatório de estudantes por curso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RelatorioCursoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/estudantes-por-curso", asyncHandler(controller.estudantesPorCurso));

/**
 * @openapi
 * /admin/relatorios/aprovacao-por-turma:
 *   get:
 *     tags: [Admin - Relatórios]
 *     summary: Relatório de aprovação por turma
 *     description: Retorna as taxas de aprovação agrupadas por turma
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: trimestre
 *         required: false
 *         schema:
 *           type: string
 *         description: Trimestre para filtrar
 *       - in: query
 *         name: anoLectivo
 *         required: false
 *         schema:
 *           type: string
 *         description: Ano lectivo para filtrar
 *     responses:
 *       200:
 *         description: Relatório de aprovação por turma
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RelatorioAprovacaoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/aprovacao-por-turma", asyncHandler(controller.aprovacaoPorTurma));

/**
 * @openapi
 * /admin/relatorios/desempenho-disciplinas:
 *   get:
 *     tags: [Admin - Relatórios]
 *     summary: Relatório de desempenho por disciplina
 *     description: Retorna as médias de notas agrupadas por disciplina
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: curso
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por curso
 *       - in: query
 *         name: trimestre
 *         required: false
 *         schema:
 *           type: string
 *         description: Trimestre para filtrar
 *     responses:
 *       200:
 *         description: Relatório de desempenho por disciplina
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RelatorioDesempenhoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/desempenho-disciplinas", asyncHandler(controller.desempenhoDisciplinas));

/**
 * @openapi
 * /admin/relatorios/professores-carga-horaria:
 *   get:
 *     tags: [Admin - Relatórios]
 *     summary: Relatório de carga horária dos professores
 *     description: Retorna a carga horária total de cada professor
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Relatório de carga horária
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RelatorioCargaHorariaResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/professores-carga-horaria", asyncHandler(controller.professoresCargaHoraria));

export default router;
