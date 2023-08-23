import { Router } from "express";
import { contentRouter } from "./content/index.js";


const v1Router = Router();

// All routes go here
v1Router.use("/content-apis", contentRouter);

export { v1Router };