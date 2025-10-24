
import express from "express";
import { signup, login } from "../controllers/AuthController.js";
import { signupValidation, loginValidation } from "../middlewares/Validation.js";

const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

export default router;
