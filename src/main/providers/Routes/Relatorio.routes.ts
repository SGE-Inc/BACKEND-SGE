import { Router } from "express";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { RelatorioContainer } from "@/core/relatorio/infraestructure/RelatorioContainer";

export const register = (router: Router) => {
  router.get("/admin/relatorios/estudantes-por-curso", authenticate, authorize("ADMIN"), asyncHandler(RelatorioContainer.estudantesPorCurso));
  router.get("/admin/relatorios/aprovacao-por-turma", authenticate, authorize("ADMIN"), asyncHandler(RelatorioContainer.aprovacaoPorTurma));
  router.get("/admin/relatorios/desempenho-disciplinas", authenticate, authorize("ADMIN"), asyncHandler(RelatorioContainer.desempenhoDisciplinas));
  router.get("/admin/relatorios/professores-carga-horaria", authenticate, authorize("ADMIN"), asyncHandler(RelatorioContainer.professoresCargaHoraria));
};
