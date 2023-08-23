import { Router } from "express";
import { contentController } from "../../controllers/index.js";

const contentRouter = Router();

contentRouter.post(
    "/add-content",
    contentController.addContent
);

contentRouter.get(
    "/get-content",
    contentController.fetchContent
);

contentRouter.put(
    "/update-content",
    contentController.updateContent
);

export { contentRouter };

