import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/clients/createClient.controller";
import isAccountExistsMiddleware from "../middlewares/handleError.middleware";
import validateSchema from "../middlewares/validateSchema.middleware";
import { createClienteValidator } from "../schemas/createClient.schema";

const clientsRouter = Router();

clientsRouter.post(
  "",
  validateSchema(createClienteValidator),
  createClientController
);
clientsRouter.get("", listClientController);
clientsRouter.delete("/:id", isAccountExistsMiddleware, deleteClientController);
clientsRouter.patch("/:id", isAccountExistsMiddleware, updateClientController);

export default clientsRouter;
