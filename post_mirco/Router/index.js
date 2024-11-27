import { Router } from "express";
import PostRoutes from "./PostRouter.js";
const router = Router();

router.use("/api", PostRoutes);

export default router;