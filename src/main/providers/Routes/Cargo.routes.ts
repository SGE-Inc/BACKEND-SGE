import { Router } from "express";
import { validate } from "@/shared/middlewares/validate";
import { authenticate, authorize } from "@/shared/middlewares/authenticate";
import { asyncHandler } from "@/shared/middlewares/asyncHandler";
import { createCargoDto, updateCargoDto } from "@/core/cargo/infraestructure/CargoDtos";
import { CargoContainer } from "@/core/cargo/infraestructure/CargoContainer";

export const register = (router: Router) => {
  router.get("/admin/cargos", authenticate, authorize("ADMIN"), asyncHandler(CargoContainer.list));
  router.post("/admin/cargos", authenticate, authorize("ADMIN"), validate(createCargoDto), asyncHandler(CargoContainer.create));
  router.get("/admin/cargos/:id", authenticate, authorize("ADMIN"), asyncHandler(CargoContainer.getById));
  router.put("/admin/cargos/:id", authenticate, authorize("ADMIN"), validate(updateCargoDto), asyncHandler(CargoContainer.update));
  router.delete("/admin/cargos/:id", authenticate, authorize("ADMIN"), asyncHandler(CargoContainer.delete));
};
