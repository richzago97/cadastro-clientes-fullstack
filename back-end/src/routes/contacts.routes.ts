import { Router } from "express";
import { listClientController } from "../controllers/clients/client.controller";
import { createContactController } from "../controllers/contacts/contact.controller";
import { authClient } from "../middlewares/authClient.middleware";

const contactsRouter = Router();

contactsRouter.post("", authClient, createContactController);
contactsRouter.get("", authClient, listClientController);

export default contactsRouter;
