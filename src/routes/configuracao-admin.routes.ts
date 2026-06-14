import { Router } from "express";
import multer from "multer";
import { ConfiguracaoAdminController } from "../controllers/configuracao-admin.controller.js";
import { validate } from "../middlewares/validation.js";
import { authenticate, authorize } from "../middlewares/auth.js";
import { asyncHandler } from "../middlewares/async-handler.js";
import {
  updateInstituicaoSchema,
  createAnoLectivoSchema,
  updateAnoLectivoSchema,
} from "../schemas/configuracao.schema.js";
import { env } from "../config/env.js";

const router = Router();
const controller = new ConfiguracaoAdminController();

const upload = multer({
  dest: env.UPLOAD_DIR,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ["image/png", "image/jpeg", "image/svg+xml"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Formato não aceite. Use PNG, JPG ou SVG"));
    }
  },
});

router.use(authenticate);
router.use(authorize("ADMIN"));

/**
 * @openapi
 * /admin/configuracoes/instituicao:
 *   get:
 *     tags: [Admin - Configurações]
 *     summary: Obter dados da instituição
 *     description: Retorna os dados cadastrais da instituição de ensino
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Dados da instituição
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InstituicaoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/instituicao", asyncHandler(controller.getInstituicao));

/**
 * @openapi
 * /admin/configuracoes/instituicao:
 *   put:
 *     tags: [Admin - Configurações]
 *     summary: Actualizar dados da instituição
 *     description: Actualiza os dados cadastrais da instituição
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateInstituicao'
 *     responses:
 *       200:
 *         description: Dados actualizados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InstituicaoResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.put("/instituicao", validate(updateInstituicaoSchema), asyncHandler(controller.updateInstituicao));

/**
 * @openapi
 * /admin/configuracoes/instituicao/logotipo:
 *   post:
 *     tags: [Admin - Configurações]
 *     summary: Upload de logotipo
 *     description: Faz upload do logotipo da instituição (PNG, JPG, SVG - máx 2MB)
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               logotipo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Logotipo actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logotipo:
 *                   type: string
 *                   format: uri
 *       400:
 *         description: Ficheiro não enviado ou formato inválido
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.post("/instituicao/logotipo", upload.single("logotipo"), asyncHandler(controller.uploadLogotipo));

/**
 * @openapi
 * /admin/configuracoes/anos-lectivos:
 *   get:
 *     tags: [Admin - Configurações]
 *     summary: Listar anos lectivos
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de anos lectivos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AnoLectivoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 */
router.get("/anos-lectivos", asyncHandler(controller.listAnosLectivos));

/**
 * @openapi
 * /admin/configuracoes/anos-lectivos:
 *   post:
 *     tags: [Admin - Configurações]
 *     summary: Criar ano lectivo
 *     description: Cria um novo ano lectivo. Apenas um ano pode estar activo de cada vez
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAnoLectivo'
 *     responses:
 *       201:
 *         description: Ano lectivo criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnoLectivoResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       409:
 *         description: Ano lectivo já existe
 */
router.post("/anos-lectivos", validate(createAnoLectivoSchema), asyncHandler(controller.createAnoLectivo));

/**
 * @openapi
 * /admin/configuracoes/anos-lectivos/{id}/activar:
 *   patch:
 *     tags: [Admin - Configurações]
 *     summary: Definir ano lectivo activo
 *     description: Desactiva o ano actual e activa o especificado
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
 *         description: Ano activo actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnoLectivoResponse'
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Ano lectivo não encontrado
 */
router.patch("/anos-lectivos/:id/activar", asyncHandler(controller.activateAnoLectivo));

/**
 * @openapi
 * /admin/configuracoes/anos-lectivos/{id}:
 *   put:
 *     tags: [Admin - Configurações]
 *     summary: Actualizar ano lectivo
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
 *             $ref: '#/components/schemas/UpdateAnoLectivo'
 *     responses:
 *       200:
 *         description: Ano lectivo actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnoLectivoResponse'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token não fornecido ou inválido
 *       403:
 *         description: Sem permissão de administrador
 *       404:
 *         description: Ano lectivo não encontrado
 */
router.put("/anos-lectivos/:id", validate(updateAnoLectivoSchema), asyncHandler(controller.updateAnoLectivo));

export default router;
