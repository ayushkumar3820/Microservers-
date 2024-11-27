import { Router } from "express";
import PostController from "../Controller/PostController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = Router();

router.get("/post", PostController.index);
router.post("/post", authMiddleware, PostController.store);

export default router;