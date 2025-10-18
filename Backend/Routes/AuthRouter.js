
import express from "express";
import { signup, login } from "../Controllers/AuthController.js";
import { signupValidation, loginValidation } from "../Middlewares/Validation.js";

const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

export default router;
