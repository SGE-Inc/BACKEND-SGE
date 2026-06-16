const config = () => {
    const port = process.env.PORT || "2000";
    const node_env = process.env.NODE_ENV || "development";
    const jwtSecret = process.env.JWT_SECRET || "sge-jwt-secret";
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "24h";
    return { port, node_env, jwtSecret, jwtExpiresIn };
};

export { config };
