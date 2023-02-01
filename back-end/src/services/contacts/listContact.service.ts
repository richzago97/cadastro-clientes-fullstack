import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const listContactService = async (id: string) => {
  try {
    const clientsRepository = AppDataSource.getRepository(Client);

    const clients = await clientsRepository.findOne({
      where: {
        id,
      },
      relations: {
        contact: true,
      },
    });
    if (!clients) {
      throw new AppError("Client not found", 404);
    }
  } catch (error) {
    throw new AppError("ID Invalid", 404);
  }
};

export default listContactService;
