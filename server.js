import bodyParser from "body-parser";
import {
    connect as dbConnect,
} from "./config/index.js";
import cors from "cors";
import { v1Router } from "./routes/index.js";
import { envs } from "./config/envs.js";
import express from 'express';

const app = express();



/**
 * Basic header configuartion
 * It is recomanded to update this section, depending on application's needs
 */
app.use(cors());

/**
 * All express middleware goes here
 * parsing request body
 * `bearerToken` = For `Basic Auth` token
 */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));


/**
 * Handaling database connection
 */
dbConnect();


/**
 * Initializing APIs base routes
 */
app.use("/api", v1Router);

/**
 * Default Route
 */
app.get("/content-api/", (_req, res) => res.send({ message: "content Service is Ok" }));

/**
 * 404 Route
 */
app.get("*", (req, res) => res.status(404).send({ message: "Not found!" }));

/**
 * Overriding the express response
 * ok = 200
 * created = 201
 * noData = 204
 * badRequest = 400
 * forbidden = 403
 * severError = 500
 */

app.listen(envs.port, function () {
    console.log(`Content service is running on PORT: ${envs.port}`);
});
