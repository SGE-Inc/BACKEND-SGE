import { Router } from "express";
import { CursoAdminController } from "../controllers/curso-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import { createCursoSchema, updateCursoSchema } from "../schemas/curso.schema.js";

const router = Router();
const controller = new CursoAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/cursos:
 *   get:
 *     tags: [Admin - Cursos]
 *     summary: Listar cursos
 *     description: Retorna lista de cursos com número de turmas e disciplinas
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CursoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", asyncHandler(controller.list));

/**
 * @openapi
 * /admin/cursos:
 *   post:
 *     tags: [Admin - Cursos]
 *     summary: Criar curso
 *     description: Cria um novo curso com nome e sigla únicos
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCurso'
 *     responses:
 *       201:
 *         description: Curso criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Curso já existe
 */
router.post("/", validate(createCursoSchema), asyncHandler(controller.create));

/**
 * @openapi
 * /admin/cursos/{id}:
 *   get:
 *     tags: [Admin - Cursos]
 *     summary: Obter curso por ID
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
 *         description: Dados do curso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Curso não encontrado
 */
router.get("/:id", asyncHandler(controller.getById));

/**
 * @openapi
 * /admin/cursos/{id}:
 *   put:
 *     tags: [Admin - Cursos]
 *     summary: Actualizar curso
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
 *             $ref: '#/components/schemas/UpdateCurso'
 *     responses:
 *       200:
 *         description: Curso actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CursoResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Curso não encontrado
 */
router.put("/:id", validate(updateCursoSchema), asyncHandler(controller.update));

/**
 * @openapi
 * /admin/cursos/{id}:
 *   delete:
 *     tags: [Admin - Cursos]
 *     summary: Remover curso
 *     description: Remove um curso. Não permite remover com turmas ou disciplinas associadas
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
 *         description: Curso removido
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Curso não encontrado
 *       409:
 *         description: Curso tem turmas ou disciplinas associadas
 */
router.delete("/:id", asyncHandler(controller.delete));

export default router;
