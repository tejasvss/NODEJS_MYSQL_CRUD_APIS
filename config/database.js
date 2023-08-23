import mysql from "mysql";
import { envs } from "./index.js";

export const mysqlConnection = mysql.createPool({
    connectionLimit: 5,
    host: envs.db.host,
    port: envs.db.port,
    user: envs.db.username,
    password: envs.db.password,
    database: envs.db.database,
    charset: "utf8mb4",
    multipleStatements: true,
    // timezone: 'UTC',
    dateStrings: ["DATE", "DATETIME"],
});

export const connect = () => {
    mysqlConnection.getConnection((err, connection) => {
        if (err) {
            if (err.code === "PROTOCOL_CONNECTION_LOST") {
                console.error("Database connection was closed.");
            }
            if (err.code === "ER_CON_COUNT_ERROR") {
                console.error("Database has too many connections.");
            }
            if (err.code === "ECONNREFUSED") {
                console.error("Database connection was refused.");
            }
        }
        if (connection) connection.release();
        console.log("MYSQL Connection Established Successfully");
        return;
    });
};