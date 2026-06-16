import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createEstudanteDto, updateEstudanteDto, changeEstudanteStatusDto, transferirEstudanteDto } from "@/core/estudante/infraestructure/EstudanteDtos";
import { EstudanteContainer } from "@/core/estudante/infraestructure/EstudanteContainer";

export const register = (router: Router) => {
  router.get("/admin/estudantes", authenticate, authorize("ADMIN"), asyncHandler(EstudanteContainer.list));
  router.post("/admin/estudantes", authenticate, authorize("ADMIN"), validate(createEstudanteDto), asyncHandler(EstudanteContainer.create));
  router.get("/admin/estudantes/processo/:numeroProcesso", authenticate, authorize("ADMIN"), asyncHandler(EstudanteContainer.getByProcesso));
  router.get("/admin/estudantes/:id", authenticate, authorize("ADMIN"), asyncHandler(EstudanteContainer.getById));
  router.put("/admin/estudantes/:id", authenticate, authorize("ADMIN"), validate(updateEstudanteDto), asyncHandler(EstudanteContainer.update));
  router.delete("/admin/estudantes/:id", authenticate, authorize("ADMIN"), asyncHandler(EstudanteContainer.delete));
  router.patch("/admin/estudantes/:id/estado", authenticate, authorize("ADMIN"), validate(changeEstudanteStatusDto), asyncHandler(EstudanteContainer.changeStatus));
  router.post("/admin/estudantes/:id/transferir", authenticate, authorize("ADMIN"), validate(transferirEstudanteDto), asyncHandler(EstudanteContainer.transfer));
  router.get("/admin/estudantes/:id/historico", authenticate, authorize("ADMIN"), asyncHandler(EstudanteContainer.getHistorico));
};
