import { Router } from "express";

export const register = (router: Router) => {
  router.get("/health", (_req: any, res: any) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });
};
