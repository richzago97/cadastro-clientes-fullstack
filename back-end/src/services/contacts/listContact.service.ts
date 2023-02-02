import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = contactRepository.find({
    relations: { client: true },
  });

  return contacts;
};

export default listContactService;
