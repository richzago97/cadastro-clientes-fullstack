import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/clients/client.controller";
import { authClient } from "../middlewares/authClient.middleware";
import isAccountExistsMiddleware from "../middlewares/handleError.middleware";
import validateSchema from "../middlewares/validateSchema.middleware";
import { createClienteValidator } from "../schemas/createClient.schema";

const clientsRouter = Router();

clientsRouter.post(
  "",
  validateSchema(createClienteValidator),
  createClientController
);
clientsRouter.get("", authClient, listClientController);
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
