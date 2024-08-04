import { SignIn, SignUp } from "../controllers/auth.controller.js";
import express from "express";
const router = express.Router();

router.post("/signUp", SignUp);
router.post("/login", SignIn);

export default router;
