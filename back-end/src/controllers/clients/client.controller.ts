import { Request, Response } from "express";
import { Client } from "../../entities/client.entity";
import { instanceToPlain } from "class-transformer";
import createClientService from "../../services/clients/createClient.service";
import listClientsRelatoryService from "../../services/clients/listClient.service";
import deleteClientService from "../../services/clients/deleteClient.service";
import updateClientService from "../../services/clients/updateClient.service";
import generateHTML from "../../utils/generateHTML";
import convertToPDF from "../../utils/convertToPDF";
import listClientsService from "../../services/clients/listClient.service";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData = req.body;
  const client: Client = await createClientService(clientData);
  return res.status(201).send(instanceToPlain(client));
};

const listClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();
  return res.send(instanceToPlain(clients));
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.client.id;
  const deletedClient: void = await deleteClientService(id);
  return res.status(204).send();
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const dataUser = req.body;
  const updatedClient = await updateClientService(dataUser, id);

  return res.json(
    instanceToPlain({
      message: "Data updated successfully!",
      client: updatedClient,
    })
  );
};

const relatoryClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();
  const clientsWithContacts: any = clients.map((client) => ({
    client,
    contacts: client.contact,
  }));
  const html = generateHTML(clientsWithContacts);

  return convertToPDF(html, res);
};

export {
  createClientController,
  listClientsController,
  deleteClientController,
  updateClientController,
  relatoryClientsController,
};
