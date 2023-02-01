import { Router } from "express";
import clientLoginController from "../controllers/session/clientSession.controller";

const clientSessionRouter = Router();

clientSessionRouter.post("", clientLoginController);

export default clientSessionRouter;
