import { Router } from "express";
import { DisciplinaAdminController } from "../controllers/disciplina-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createDisciplinaSchema, updateDisciplinaSchema } from "../schemas/disciplina.schema.js";

const router = Router();
const controller = new DisciplinaAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/disciplinas:
 *   get:
 *     tags: [Admin - Disciplinas]
 *     summary: Listar disciplinas
 *     description: Retorna lista de disciplinas filtradas por curso e ou classe
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: query
 *         name: curso
 *         required: false
 *         schema:
 *           type: string
 *         description: "Filtrar por sigla do curso (ex: IN, EL)"
 *       - in: query
 *         name: classe
 *         required: false
 *         schema:
 *           type: string
 *         description: "Filtrar por classe (ex: 10, 11, 12)"
 *     responses:
 *       200:
 *         description: Lista de disciplinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DisciplinaResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/disciplinas:
 *   post:
 *     tags: [Admin - Disciplinas]
 *     summary: Criar disciplina
 *     description: Cria uma nova disciplina. Combinação nome + curso + classe deve ser única
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDisciplina'
 *     responses:
 *       201:
 *         description: Disciplina criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DisciplinaResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Disciplina já existe para este curso e classe
 */
router.post("/", validate(createDisciplinaSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/disciplinas/{id}:
 *   put:
 *     tags: [Admin - Disciplinas]
 *     summary: Actualizar disciplina
 *     description: Actualiza os dados de uma disciplina existente
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
 *             $ref: '#/components/schemas/UpdateDisciplina'
 *     responses:
 *       200:
 *         description: Disciplina actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DisciplinaResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Disciplina não encontrada
 */
router.put("/:id", validate(updateDisciplinaSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/disciplinas/{id}:
 *   delete:
 *     tags: [Admin - Disciplinas]
 *     summary: Remover disciplina
 *     description: Remove uma disciplina. Não permite remover disciplina com professores atribuídos
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
 *         description: Disciplina removida com sucesso
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
 *         description: Disciplina não encontrada
 *       409:
 *         description: Não permitido remover disciplina com professores atribuídos
 */
router.delete("/:id", asyncHandler(controller.delete));

export default router;
