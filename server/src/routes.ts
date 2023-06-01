import { Router } from "express";
import { userRouter } from "./routes/UserRoutes";

const routes = Router();

routes.use(userRouter)

export { routes }
