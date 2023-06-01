import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController;

userRouter.post('/users/sign-up', (req, res) => userController.signUp(req, res));
userRouter.post('/users/sign-in', (req, res) => userController.signIn(req, res));

export { userRouter }
