declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        NODE_ENV: "dev" | "prod" | "development" | "production" | "test";
        JWT_SECRET: string;
        JWT_EXPIRES_IN: string;
        DATABASE_URL: string;
    }
}
