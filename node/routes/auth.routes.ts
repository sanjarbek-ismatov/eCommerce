import express from "express";
import authController from "../controllers/auth.controller";
const authRouter = express.Router();
authRouter.post("/signup", authController.signUpController);
authRouter.post('/login', authController.loginController)
export { authRouter };
