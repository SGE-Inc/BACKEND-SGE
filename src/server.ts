import { config } from "dotenv";
config();

import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, () => {
  console.log(`Meu servidor rodando em http://localhost:${env.PORT}`);
  console.log(`Variaveis de ambiente: ${env.NODE_ENV}`);
});
