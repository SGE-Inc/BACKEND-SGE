import { Router } from "express";
import { TurmaAdminController } from "../controllers/turma-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createTurmaSchema, updateTurmaSchema } from "../schemas/turma.schema.js";

const router = Router();
const controller = new TurmaAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/turmas:
 *   get:
 *     tags: [Admin - Turmas]
 *     summary: Listar turmas
 *     description: Retorna lista de turmas com dados do curso, classe, vagas e numero de estudantes
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: curso
 *         required: false
 *         schema:
 *           type: string
 *         description: "Filtrar por sigla do curso (ex: IN, EL)"
 *     responses:
 *       200:
 *         description: Lista de turmas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TurmaResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/turmas:
 *   post:
 *     tags: [Admin - Turmas]
 *     summary: Criar turma
 *     description: "Cria uma nova turma. O nome deve ser unico no curso (ex: IN10A)"
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTurma'
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TurmaResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Já existe uma turma com este nome no curso
 */
router.post("/", validate(createTurmaSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/turmas/{id}:
 *   put:
 *     tags: [Admin - Turmas]
 *     summary: Actualizar turma
 *     description: Actualiza os dados de uma turma existente
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTurma'
 *     responses:
 *       200:
 *         description: Turma actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TurmaResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Turma não encontrada
 */
router.put("/:id", validate(updateTurmaSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/turmas/{id}:
 *   delete:
 *     tags: [Admin - Turmas]
 *     summary: Remover turma
 *     description: Remove uma turma. Não permite remover turma com estudantes activos
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Turma removida com sucesso
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
 *         description: Turma não encontrada
 *       409:
 *         description: Não permitido remover turma com estudantes activos
 */
router.delete("/:id", asyncHandler(controller.delete));

/**
 * @openapi
 * /admin/turmas/{id}/estudantes:
 *   get:
 *     tags: [Admin - Turmas]
 *     summary: Listar estudantes da turma
 *     description: Retorna lista de estudantes matriculados na turma
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Lista de estudantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EstudanteResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Turma não encontrada
 */
router.get("/:id/estudantes", asyncHandler(controller.listEstudantes));

export default router;
