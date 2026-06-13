import { Router } from "express";
import { ProfessorAdminController } from "../controllers/professor-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { createProfessorSchema, updateProfessorSchema } from "../schemas/professor.schema.js";

const router = Router();
const controller = new ProfessorAdminController();

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/professors:
 *   post:
 *     tags: [Admin - Professores]
 *     summary: Criar um novo professor
 *     description: Cria um utilizador com role PROFESSOR e o respetivo registo de professor
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProfessor'
 *     responses:
 *       201:
 *         description: Professor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessorResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Email já registado
 */
router.post("/", validate(createProfessorSchema), controller.create.bind(controller));

/**
 * @openapi
 * /admin/professors:
 *   get:
 *     tags: [Admin - Professores]
 *     summary: Listar todos os professores
 *     description: Retorna a lista completa de professores ordenada por nome
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de professores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProfessorResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/", controller.list.bind(controller));

/**
 * @openapi
 * /admin/professors/{id}:
 *   get:
 *     tags: [Admin - Professores]
 *     summary: Obter professor por ID
 *     description: Retorna os dados de um professor específico
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do professor
 *     responses:
 *       200:
 *         description: Dados do professor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessorResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Professor não encontrado
 */
router.get("/:id", controller.getById.bind(controller));

/**
 * @openapi
 * /admin/professors/{id}:
 *   put:
 *     tags: [Admin - Professores]
 *     summary: Atualizar dados de um professor
 *     description: Atualiza os campos do utilizador e/ou do professor
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do professor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProfessor'
 *     responses:
 *       200:
 *         description: Professor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessorResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Professor não encontrado
 *       409:
 *         description: Email já está em uso
 */
router.put("/:id", validate(updateProfessorSchema), controller.update.bind(controller));

/**
 * @openapi
 * /admin/professors/{id}:
 *   delete:
 *     tags: [Admin - Professores]
 *     summary: Remover um professor
 *     description: Elimina o utilizador e o registo de professor associado
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do professor
 *     responses:
 *       200:
 *         description: Professor removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Professor removido com sucesso
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Professor não encontrado
 */
router.delete("/:id", controller.delete.bind(controller));

/**
 * @openapi
 * /admin/professors/{id}/status:
 *   patch:
 *     tags: [Admin - Professores]
 *     summary: Ativar ou desativar um professor
 *     description: Alterna o estado do professor entre ATIVO e INATIVO
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do professor
 *     responses:
 *       200:
 *         description: Estado atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfessorResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Professor não encontrado
 */
router.patch("/:id/status", controller.toggleStatus.bind(controller));

export default router;
