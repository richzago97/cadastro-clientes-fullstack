import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts/contacts";

const createContactService = async (
  contactData: IContactRequest,
  clientID: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const getClient = await clientRepository.findOneBy({
    id: clientID,
  });

  if (!getClient) {
    throw new AppError("Not found", 404);
  }

  const contacts: Contact[] = await contactRepository.find();

  const emailAlreadyExists = contacts.find(
    (contact) => contact.email === contactData.email
  );

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const newContact: Contact = new Contact();
  newContact.name = contactData.name;
  newContact.telephone = contactData.telephone;
  newContact.email = contactData.email;
  newContact.createdAt = new Date();
  newContact.client = getClient;

  await contactRepository.save(newContact);

  const contactCreated: Contact | null = await contactRepository.findOneBy({
    id: newContact.id,
  });

  return contactCreated!;
};

export default createContactService;
