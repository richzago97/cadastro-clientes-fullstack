import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  await clientRepository.delete(id);
};

export default deleteClientService;
