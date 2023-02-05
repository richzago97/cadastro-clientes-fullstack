import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  relatoryClientsController,
  updateClientController,
} from "../controllers/clients/client.controller";
import { authClient } from "../middlewares/authClient.middleware";
import isAccountExistsMiddleware from "../middlewares/handleError.middleware";
import validateSchema from "../middlewares/validateSchema.middleware";
import { createClientValidator } from "../schemas/createClient.schema";
import clientSessionRouter from "./session.routes";

const clientsRouter = Router();

clientsRouter.post(
  "",
  validateSchema(createClientValidator),
  createClientController
);
clientsRouter.get("", authClient, listClientController);
clientsRouter.get("/relatory", authClient, relatoryClientsController);
clientsRouter.delete(
  "/:id",
  authClient,
  isAccountExistsMiddleware,
  deleteClientController
);
clientsRouter.patch(
  "/:id",
  authClient,
  isAccountExistsMiddleware,
  updateClientController
);

export default clientsRouter;
