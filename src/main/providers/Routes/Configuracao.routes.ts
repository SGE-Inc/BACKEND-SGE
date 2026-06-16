import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { updateInstituicaoDto, createAnoLectivoDto, updateAnoLectivoDto } from "@/core/configuracao/infraestructure/ConfiguracaoDtos";
import { ConfiguracaoContainer } from "@/core/configuracao/infraestructure/ConfiguracaoContainer";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

export const register = (router: Router) => {
  router.get("/admin/configuracoes/instituicao", authenticate, authorize("ADMIN"), asyncHandler(ConfiguracaoContainer.getInstituicao));
  router.put("/admin/configuracoes/instituicao", authenticate, authorize("ADMIN"), validate(updateInstituicaoDto), asyncHandler(ConfiguracaoContainer.updateInstituicao));
  router.post("/admin/configuracoes/instituicao/logotipo", authenticate, authorize("ADMIN"), upload.single("logotipo"), asyncHandler(ConfiguracaoContainer.uploadLogotipo));
  router.get("/admin/configuracoes/anos-lectivos", authenticate, authorize("ADMIN"), asyncHandler(ConfiguracaoContainer.listAnosLectivos));
  router.post("/admin/configuracoes/anos-lectivos", authenticate, authorize("ADMIN"), validate(createAnoLectivoDto), asyncHandler(ConfiguracaoContainer.createAnoLectivo));
  router.patch("/admin/configuracoes/anos-lectivos/:id/activar", authenticate, authorize("ADMIN"), asyncHandler(ConfiguracaoContainer.activateAnoLectivo));
  router.put("/admin/configuracoes/anos-lectivos/:id", authenticate, authorize("ADMIN"), validate(updateAnoLectivoDto), asyncHandler(ConfiguracaoContainer.updateAnoLectivo));
};
