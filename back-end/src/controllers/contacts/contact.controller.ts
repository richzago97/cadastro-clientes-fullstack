import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Contact } from "../../entities/contact.entity";
import createContactService from "../../services/contacts/createContact.service";
import deleteContactService from "../../services/contacts/deleteClient.service";
import listContactService from "../../services/contacts/listContact.service";
import updateContactService from "../../services/contacts/updateContact.service";

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
  const contact = await listContactService();

  return res.json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const deletedContact: void = await deleteContactService(id);
  return res.status(204).json(deletedContact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const dataUser = req.body;
  const updatedContact = await updateContactService(dataUser, id);

  return res.json(
    instanceToPlain({
      message: "Data updated successfully!",
      contact: updatedContact,
    })
  );
};

export {
  createContactController,
  listContactController,
  deleteContactController,
  updateContactController,
};
