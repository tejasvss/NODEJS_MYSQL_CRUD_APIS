import { config } from "dotenv";
config();

export const envs = {
    env: process.env.NODE_ENV || "dev",
    port: Number(process.env.NODE_PORT) || 4000,
    db: {
        host: process.env.MYSQL_HOST || "localhost",
        port: process.env.MYSQL_PORT || 3306,
        database: process.env.MYSQL_DATABASE || "aubank",
        username: process.env.MYSQL_USERNAME || "root",
        password: process.env.MYSQL_PASSWORD || "classic",
    },
    apiKey: process.env.API_KEY || "",
    passwordSalt: Number(process.env.PASSWORD_SALT_ROUND) || 12,
    jwt: {
        accessToken: {
            secret: process.env.ACCESS_TOKEN_SECRET || "",
            expiry: Number(process.env.ACCESS_TOKEN_EXPIRED) || 3600,
        },
    },
};