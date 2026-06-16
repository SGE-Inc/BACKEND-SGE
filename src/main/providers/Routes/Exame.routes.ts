import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createExameDto, updateExameDto, changeExameEstadoDto, lancarResultadosDto, createEpocaExameDto } from "@/core/exame/infraestructure/ExameDtos";
import { ExameContainer } from "@/core/exame/infraestructure/ExameContainer";

export const register = (router: Router) => {
  router.get("/admin/exames", authenticate, authorize("ADMIN"), asyncHandler(ExameContainer.list));
  router.post("/admin/exames", authenticate, authorize("ADMIN"), validate(createExameDto), asyncHandler(ExameContainer.create));
  router.get("/admin/exames/calendario", authenticate, asyncHandler(ExameContainer.getCalendario));
  router.get("/admin/exames/epocas", authenticate, asyncHandler(ExameContainer.listEpocas));
  router.post("/admin/exames/epocas", authenticate, authorize("ADMIN"), validate(createEpocaExameDto), asyncHandler(ExameContainer.createEpoca));
  router.get("/admin/exames/:id", authenticate, asyncHandler(ExameContainer.getById));
  router.put("/admin/exames/:id", authenticate, authorize("ADMIN"), validate(updateExameDto), asyncHandler(ExameContainer.update));
  router.delete("/admin/exames/:id", authenticate, authorize("ADMIN"), asyncHandler(ExameContainer.delete));
  router.patch("/admin/exames/:id/estado", authenticate, authorize("ADMIN"), validate(changeExameEstadoDto), asyncHandler(ExameContainer.changeEstado));
  router.post("/admin/exames/:id/resultados", authenticate, authorize("ADMIN"), validate(lancarResultadosDto), asyncHandler(ExameContainer.lancarResultados));
  router.get("/admin/exames/:id/resultados", authenticate, asyncHandler(ExameContainer.getResultados));
  router.get("/admin/exames/:id/historico", authenticate, asyncHandler(ExameContainer.getHistorico));
};
