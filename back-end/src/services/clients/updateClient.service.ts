import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const updateClientService = async (dataClient: Partial<Client>, id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id,
    },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const dataKeys = Object.keys(dataClient);
  if (
    dataKeys.includes("id") ||
    dataKeys.includes("createdAt") ||
    dataKeys.includes("updatedAt")
  ) {
    throw new AppError("Not possible update id, createdAt or updatedAt");
  }

  await clientRepository.update(id, {
    ...dataClient,
  });

  return client;
};
export default updateClientService;
