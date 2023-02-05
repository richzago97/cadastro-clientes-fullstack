import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = contactRepository.find({
    where: { client: { id: id } },
    relations: { client: true },
  });

  return contact;
};

export default listContactService;
