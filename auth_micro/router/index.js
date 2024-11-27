import express from "express";
import authRouter from "./authRouter.js"; // Ensure this matches the actual file path

const router = express.Router();

// Use the authRouter
router.use("/api", authRouter);

export default router;
