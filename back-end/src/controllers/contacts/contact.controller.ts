import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Contact } from "../../entities/contact.entity";
import createContactService from "../../services/contacts/createContact.service";
import listContactService from "../../services/contacts/listContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData = await req.body;
  const clientID = req.client.id;
  const client: Contact = await createContactService(contactData, clientID);
  return res.status(201).send(instanceToPlain(client));
};

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const contact = await listContactService(id);

  return res.json(contact);
};

export { createContactController };
