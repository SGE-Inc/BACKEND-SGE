import { Router } from "express";
import adminAuthRoutes from "./admin-auth.routes.js";
import professorAdminRoutes from "./professor-admin.routes.js";
import turmaAdminRoutes from "./turma-admin.routes.js";
import disciplinaAdminRoutes from "./disciplina-admin.routes.js";
import configuracaoAdminRoutes from "./configuracao-admin.routes.js";
import cursoAdminRoutes from "./curso-admin.routes.js";
import alunoAuthRoutes from "./aluno-auth.routes.js";
import dashboardAdminRoutes from "./dashboard-admin.routes.js";
import estudanteAdminRoutes from "./estudante-admin.routes.js";
import exameAdminRoutes from "./exame-admin.routes.js";
import auditoriaAdminRoutes from "./auditoria-admin.routes.js";
import cargoAdminRoutes from "./cargo-admin.routes.js";
import permissaoAdminRoutes from "./permissao-admin.routes.js";
import trimestreAdminRoutes from "./trimestre-admin.routes.js";
import parametroAvaliacaoRoutes from "./parametro-avaliacao.routes.js";
import adminUtilizadorRoutes from "./admin-utilizador.routes.js";
import relatorioAdminRoutes from "./relatorio-admin.routes.js";

const router = Router();

router.use("/admin/auth", adminAuthRoutes);
router.use("/admin/professors", professorAdminRoutes);
router.use("/admin/turmas", turmaAdminRoutes);
router.use("/admin/disciplinas", disciplinaAdminRoutes);
router.use("/admin/configuracoes", configuracaoAdminRoutes);
router.use("/admin/cursos", cursoAdminRoutes);
router.use("/aluno/auth", alunoAuthRoutes);
router.use("/admin/dashboard", dashboardAdminRoutes);
router.use("/admin/estudantes", estudanteAdminRoutes);
router.use("/admin/exames", exameAdminRoutes);
router.use("/admin/auditoria", auditoriaAdminRoutes);
router.use("/admin/cargos", cargoAdminRoutes);
router.use("/admin/permissoes", permissaoAdminRoutes);
router.use("/admin/trimestres", trimestreAdminRoutes);
router.use("/admin/parametros-avaliacao", parametroAvaliacaoRoutes);
router.use("/admin/utilizadores", adminUtilizadorRoutes);
router.use("/admin/relatorios", relatorioAdminRoutes);

router.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default router;
