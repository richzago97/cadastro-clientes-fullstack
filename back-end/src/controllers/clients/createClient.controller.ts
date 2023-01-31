import { Request, Response } from "express";
import { Client } from "../../entities/client.entity";
import { instanceToPlain } from "class-transformer";
import createClientService from "../../services/clients/createClient.service";
import listClientService from "../../services/clients/listClient.service";
import deleteClientService from "../../services/clients/deleteClient.service";
import updateClienteService from "../../services/clients/updateClient.service";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData = req.body;
  console.log(clientData);
  const client: Client = await createClientService(clientData);
  return res.status(201).send(instanceToPlain(client));
};

const listClientController = async (req: Request, res: Response) => {
  const clients = await listClientService();
  return res.send(instanceToPlain(clients));
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const deletedClient: void = await deleteClientService(id);
  return res.status(204).json(deletedClient);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const dataUser = req.body;
  const updatedClient = await updateClienteService(dataUser, id);

  return res.json(
    instanceToPlain({
      message: "Data updated successfully!",
      client: updatedClient,
    })
  );
};

export {
  createClientController,
  listClientController,
  deleteClientController,
  updateClientController,
};
