import express from "express";
import { isAuthenticated } from "../middlewares/is-authenticated.js";
import {
  createApplicationForm,
  getApplicationForm,
} from "../controllers/application-form.controller.js";

const router = express.Router();

router.post("/create", isAuthenticated, createApplicationForm);

router.get("/get-form-data", isAuthenticated, getApplicationForm);

export default router;

