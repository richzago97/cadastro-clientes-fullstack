import { Router } from "express";
import {
  createContactController,
  listContactController,
} from "../controllers/contacts/contact.controller";
import { authClient } from "../middlewares/authClient.middleware";

const contactsRouter = Router();

contactsRouter.post("", authClient, createContactController);
contactsRouter.get("", authClient, listContactController);

export default contactsRouter;
