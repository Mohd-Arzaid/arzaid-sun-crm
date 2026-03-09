import express from "express";
import { isAuthenticated } from "../middlewares/is-authenticated.js";
import { createApplicantAndProductInformation } from "../controllers/applicant-and-product-information.controller.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  createApplicantAndProductInformation
);

export default router;
