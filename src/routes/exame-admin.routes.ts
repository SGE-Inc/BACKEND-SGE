import { Router } from "express";
import { ExameAdminController } from "../controllers/exame-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createExameSchema, updateExameSchema, changeExameEstadoSchema, lancarResultadosSchema, createEpocaExameSchema } from "../schemas/exame.schema.js";

const router = Router();
const controller = new ExameAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/exames:
 *   get:
 *     tags: [Admin - Exames]
 *     summary: Listar exames
 *     description: Retorna lista paginada de exames com filtros
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
 *         name: turma
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por turma
 *       - in: query
 *         name: estado
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por estado (AGENDADO, REALIZADO)
 *       - in: query
 *         name: trimestre
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por trimestre
 *       - in: query
 *         name: tipo
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por tipo de exame
 *       - in: query
 *         name: search
 *         required: false
 *         schema:
 *           type: string
 *         description: Pesquisar por disciplina
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
 *     responses:
 *       200:
 *         description: Lista de exames
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/exames/calendario:
 *   get:
 *     tags: [Admin - Exames]
 *     summary: Calendário de exames
 *     description: Retorna o calendário de exames filtrado por curso e trimestre
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
 *         description: Filtrar por trimestre
 *     responses:
 *       200:
 *         description: Calendário de exames
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/calendario", asyncHandler(controller.getCalendario));

/**
 * @openapi
 * /admin/exames/historico:
 *   get:
 *     tags: [Admin - Exames]
 *     summary: Histórico de exames
 *     description: Retorna o histórico de exames realizados
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
 *         name: ano
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por ano lectivo
 *     responses:
 *       200:
 *         description: Histórico de exames
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/historico", asyncHandler(controller.getHistorico));

/**
 * @openapi
 * /admin/exames/epocas:
 *   get:
 *     tags: [Admin - Exames]
 *     summary: Listar épocas de exame
 *     description: Retorna todas as épocas de exame cadastradas
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de épocas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EpocaExameResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/epocas", asyncHandler(controller.listEpocas));

/**
 * @openapi
 * /admin/exames/epocas:
 *   post:
 *     tags: [Admin - Exames]
 *     summary: Criar época de exame
 *     description: Cria uma nova época de exame
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEpocaExame'
 *     responses:
 *       201:
 *         description: Época criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.post("/epocas", validate(createEpocaExameSchema), asyncHandler(controller.createEpoca));

/**
 * @openapi
 * /admin/exames/{id}:
 *   get:
 *     tags: [Admin - Exames]
 *     summary: Obter exame por ID
 *     description: Retorna os dados de um exame específico
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do exame
 *     responses:
 *       200:
 *         description: Dados do exame
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExameResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Exame não encontrado
 */
router.get("/:id", asyncHandler(controller.getById));

/**
 * @openapi
 * /admin/exames/{id}/resultados:
 *   get:
 *     tags: [Admin - Exames]
 *     summary: Obter resultados de um exame
 *     description: Retorna os resultados (notas) de um exame
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do exame
 *     responses:
 *       200:
 *         description: Resultados do exame
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/:id/resultados", asyncHandler(controller.getResultados));

/**
 * @openapi
 * /admin/exames:
 *   post:
 *     tags: [Admin - Exames]
 *     summary: Criar exame
 *     description: Agenda um novo exame
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateExame'
 *     responses:
 *       201:
 *         description: Exame criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExameResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Já existe um exame agendado para esta turma na mesma data/hora
 */
router.post("/", validate(createExameSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/exames/{id}:
 *   put:
 *     tags: [Admin - Exames]
 *     summary: Actualizar exame
 *     description: Actualiza os dados de um exame
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do exame
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateExame'
 *     responses:
 *       200:
 *         description: Exame actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExameResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Exame não encontrado
 */
router.put("/:id", validate(updateExameSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/exames/{id}:
 *   delete:
 *     tags: [Admin - Exames]
 *     summary: Remover exame
 *     description: Remove um exame. Não permite remover exames já realizados
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do exame
 *     responses:
 *       200:
 *         description: Exame removido com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       400:
 *         description: Não é permitido remover um exame já realizado
 *       404:
 *         description: Exame não encontrado
 */
router.delete("/:id", asyncHandler(controller.delete));

/**
 * @openapi
 * /admin/exames/{id}/estado:
 *   patch:
 *     tags: [Admin - Exames]
 *     summary: Alterar estado do exame
 *     description: Altera o estado do exame (AGENDADO, REALIZADO)
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do exame
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangeExameEstado'
 *     responses:
 *       200:
 *         description: Estado actualizado com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Exame não encontrado
 */
router.patch("/:id/estado", validate(changeExameEstadoSchema), asyncHandler(controller.changeEstado));

/**
 * @openapi
 * /admin/exames/{id}/resultados:
 *   post:
 *     tags: [Admin - Exames]
 *     summary: Lançar resultados de exame
 *     description: Regista as notas dos alunos para um exame
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do exame
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LancarResultados'
 *     responses:
 *       200:
 *         description: Resultados lançados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Exame não encontrado
 */
router.post("/:id/resultados", validate(lancarResultadosSchema), asyncHandler(controller.lancarResultados));

export default router;
