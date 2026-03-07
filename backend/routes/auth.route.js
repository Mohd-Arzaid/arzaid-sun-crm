import express from "express";
import { checkAdminSecret } from "../middlewares/check-admin-secret.js";
import { createUserPassword } from "../controllers/auth.controller.js";

const router = express.Router();
   
//Admin only : create/update user password 
router.post("/create-password",checkAdminSecret,createUserPassword);


export default router;