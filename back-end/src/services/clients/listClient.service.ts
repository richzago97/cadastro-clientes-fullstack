import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const listClientsService = async (id: string): Promise<Client[]> => {
    const clientRepository = AppDataSource.getRepository(Client);
  
    const clients = clientRepository.find({
      where: { id: id },
    });
  
    return clients;
  };
  export default listClientsService;
  