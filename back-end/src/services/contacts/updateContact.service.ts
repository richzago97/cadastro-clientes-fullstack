import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const updateContactService = async (
  dataContact: Partial<Contact>,
  id: string
): Promise<Contact | undefined> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  let contact = await contactRepository.findOne({
    where: {
      id,
    },
  });

  const dataKeys = Object.keys(dataContact);
  if (
    dataKeys.includes("id") ||
    dataKeys.includes("createdAt") ||
    dataKeys.includes("updatedAt")
  ) {
    throw new AppError("Not possible update id, createdAt or updatedAt");
  }

  if (contact?.id != id) {
    throw new AppError(
      "Not allowed to update this contact, id does not match the token"
    );
  }

  await contactRepository.update(id, {
    ...dataContact,
  });
  if (dataContact.client) {
    const client = await clientRepository.findOne({
      where: {
        id: dataContact.client.id,
      },
    });

    if (client && client.id) {
      await clientRepository.update(client.id, { ...dataContact.client });
    } else {
      await clientRepository.save({ ...dataContact.client, client });
    }
    contact = await contactRepository.findOne({
      where: {
        id,
      },
    });

    if (!contact) {
      throw new AppError("Contact not found");
    }

    return contact;
  }
};
export default updateContactService;
