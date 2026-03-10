import express from "express";
import { isAuthenticated } from "../middlewares/is-authenticated.js";
import { checkApplicationProgress } from "../controllers/application-progress.controller.js";

const router = express.Router();

router.get("/check-application-progress", isAuthenticated, checkApplicationProgress);

export default router;

