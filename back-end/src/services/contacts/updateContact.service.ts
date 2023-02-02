import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const updateContactService = async (
  dataContact: Partial<Contact>,
  id: string
): Promise<Contact | undefined> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
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

  if (!contact) {
    throw new AppError("Contact not found");
  }

  return contact;
};
export default updateContactService;
