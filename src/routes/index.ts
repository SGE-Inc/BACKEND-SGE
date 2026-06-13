import { Router } from "express";
import adminAuthRoutes from "./admin-auth.routes.js";
import professorAdminRoutes from "./professor-admin.routes.js";

const router = Router();

router.use("/admin/auth", adminAuthRoutes);
router.use("/admin/professors", professorAdminRoutes);

router.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default router;
