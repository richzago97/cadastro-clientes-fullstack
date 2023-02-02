import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  await contactRepository.delete(id);
};

export default deleteContactService;
