import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const listClientsRelatoryService = async (): Promise<Client[]> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = clientRepository.find({ relations: { contact: true } });

  return clients;
};
export default listClientsRelatoryService;
