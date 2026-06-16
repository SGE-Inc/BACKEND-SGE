import { Router } from "express";
import { EstudanteAdminController } from "../controllers/estudante-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createEstudanteSchema, updateEstudanteSchema, transferirEstudanteSchema, changeEstudanteStatusSchema } from "../schemas/estudante.schema.js";

const router = Router();
const controller = new EstudanteAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/estudantes:
 *   get:
 *     tags: [Admin - Estudantes]
 *     summary: Listar estudantes
 *     description: Retorna lista paginada de estudantes com filtros
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: curso
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por sigla do curso
 *       - in: query
 *         name: turma
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por nome da turma
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrar por estado (ACTIVO, INACTIVO, TRANSFERIDO)
 *       - in: query
 *         name: search
 *         required: false
 *         schema:
 *           type: string
 *         description: Pesquisar por nome, email ou número de processo
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
 *         description: Lista de estudantes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstudanteListResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/estudantes/processo/{numeroProcesso}:
 *   get:
 *     tags: [Admin - Estudantes]
 *     summary: Obter estudante por número de processo
 *     description: Retorna os dados do estudante pelo número de processo
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: numeroProcesso
 *         required: true
 *         schema:
 *           type: string
 *         description: Número de processo do estudante
 *     responses:
 *       200:
 *         description: Dados do estudante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstudanteDetailResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.get("/processo/:numeroProcesso", asyncHandler(controller.getByProcesso));

/**
 * @openapi
 * /admin/estudantes/{id}:
 *   get:
 *     tags: [Admin - Estudantes]
 *     summary: Obter estudante por ID
 *     description: Retorna os dados de um estudante específico
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do estudante
 *     responses:
 *       200:
 *         description: Dados do estudante
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstudanteDetailResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.get("/:id", asyncHandler(controller.getById));

/**
 * @openapi
 * /admin/estudantes/{id}/historico:
 *   get:
 *     tags: [Admin - Estudantes]
 *     summary: Obter histórico do estudante
 *     description: Retorna o histórico académico do estudante
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do estudante
 *     responses:
 *       200:
 *         description: Histórico do estudante
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.get("/:id/historico", asyncHandler(controller.getHistorico));

/**
 * @openapi
 * /admin/estudantes:
 *   post:
 *     tags: [Admin - Estudantes]
 *     summary: Criar novo estudante
 *     description: Cria um novo registo de estudante
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEstudante'
 *     responses:
 *       201:
 *         description: Estudante criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstudanteDetailResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Já existe um estudante com este email ou número de processo
 */
router.post("/", validate(createEstudanteSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/estudantes/{id}:
 *   put:
 *     tags: [Admin - Estudantes]
 *     summary: Actualizar estudante
 *     description: Actualiza os dados de um estudante existente
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do estudante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateEstudante'
 *     responses:
 *       200:
 *         description: Estudante actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstudanteDetailResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.put("/:id", validate(updateEstudanteSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/estudantes/{id}:
 *   delete:
 *     tags: [Admin - Estudantes]
 *     summary: Remover estudante
 *     description: Remove o registo de um estudante
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do estudante
 *     responses:
 *       200:
 *         description: Estudante removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.delete("/:id", asyncHandler(controller.delete));

/**
 * @openapi
 * /admin/estudantes/{id}/estado:
 *   patch:
 *     tags: [Admin - Estudantes]
 *     summary: Alterar estado do estudante
 *     description: Altera o estado do estudante (ACTIVO, INACTIVO, TRANSFERIDO)
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do estudante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangeEstudanteStatus'
 *     responses:
 *       200:
 *         description: Estado actualizado com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.patch("/:id/estado", validate(changeEstudanteStatusSchema), asyncHandler(controller.changeStatus));

/**
 * @openapi
 * /admin/estudantes/{id}/transferir:
 *   post:
 *     tags: [Admin - Estudantes]
 *     summary: Transferir estudante de turma
 *     description: Transfere um estudante para uma nova turma
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do estudante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransferirEstudante'
 *     responses:
 *       200:
 *         description: Estudante transferido com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Estudante não encontrado
 */
router.post("/:id/transferir", validate(transferirEstudanteSchema), asyncHandler(controller.transfer));

export default router;
