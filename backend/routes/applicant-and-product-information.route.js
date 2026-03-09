import express from "express";
import { isAuthenticated } from "../middlewares/is-authenticated";
import { createApplicantAndProductInformation } from "../controllers/applicant-and-product-information.controller";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  createApplicantAndProductInformation
);

export default router;
