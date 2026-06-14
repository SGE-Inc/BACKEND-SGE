import { Router } from "express";
import adminAuthRoutes from "./admin-auth.routes.js";
import professorAdminRoutes from "./professor-admin.routes.js";
import turmaAdminRoutes from "./turma-admin.routes.js";
import disciplinaAdminRoutes from "./disciplina-admin.routes.js";
import configuracaoAdminRoutes from "./configuracao-admin.routes.js";
import cursoAdminRoutes from "./curso-admin.routes.js";
import alunoAuthRoutes from "./aluno-auth.routes.js";

const router = Router();

router.use("/admin/auth", adminAuthRoutes);
router.use("/admin/professors", professorAdminRoutes);
router.use("/admin/turmas", turmaAdminRoutes);
router.use("/admin/disciplinas", disciplinaAdminRoutes);
router.use("/admin/configuracoes", configuracaoAdminRoutes);
router.use("/admin/cursos", cursoAdminRoutes);
router.use("/aluno/auth", alunoAuthRoutes);

router.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default router;
