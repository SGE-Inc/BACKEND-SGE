import { config } from "dotenv";
config();

import { consoleLogger as ConsoleLogger } from "@/shared/providers/Logger/infraestructure/ConsoleLogger";
import { ApplicationProvider } from "@/main/providers/ApplicationProvider";

ApplicationProvider(ConsoleLogger)();
