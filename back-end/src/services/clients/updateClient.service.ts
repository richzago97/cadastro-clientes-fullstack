import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const updateClientService = async (
  dataClient: Partial<Client>,
  id: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  let client = await clientRepository.findOne({
    where: {
      id,
    },
  });

  if (!client) {
    throw new AppError("Client not found");
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
  if (dataClient.contact) {
    const contact = await contactRepository.findOne({
      where: {
        client: { id: id },
      },
    });

    if (contact && contact.id) {
      await contactRepository.update(contact.id, { ...dataClient.contact[0] });
    } else {
      await contactRepository.save({ ...dataClient.contact, client });
    }
    client = await clientRepository.findOne({
      where: {
        id,
      },
    });
    return client;
  }
};
export default updateClientService;
