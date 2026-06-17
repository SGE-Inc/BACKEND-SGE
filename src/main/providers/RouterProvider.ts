import { Router } from "express";
import { globSync } from "glob";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function RegisterRoutes(router: Router) {
    const pattern = resolve(__dirname, "Routes/**/*.routes.js");
    const routes = globSync(pattern);
    await Promise.all(routes.map(route => register(route, router)));
}

async function register(routePath: string, router: Router) {
    const route = await import(routePath);
    route.register(router);
}
