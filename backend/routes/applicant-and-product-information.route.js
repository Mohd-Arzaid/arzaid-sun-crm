import express from "express";
import { isAuthenticated } from "../middlewares/is-authenticated.js";
import {
  createApplicantAndProductInformation,
  getApplicantAndProductInformation,
} from "../controllers/applicant-and-product-information.controller.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  createApplicantAndProductInformation
);

router.get("/get-form-data", isAuthenticated, getApplicantAndProductInformation);

export default router;
