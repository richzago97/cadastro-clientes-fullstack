import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { IClientRequest } from "../../interfaces/clients/clients";

const createClientService = async (
  clientData: IClientRequest
): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients: Client[] = await clientRepository.find();

  const emailAlreadyExists = clients.find(
    (client) => client.email === clientData.email
  );

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword: string = await hash(clientData.password, 10);

  const newClient: Client = new Client();
  newClient.name = clientData.name;
  newClient.telephone = clientData.telephone;
  newClient.email = clientData.email;
  newClient.password = hashedPassword;
  newClient.createdAt = new Date();
  newClient.updatedAt = new Date();

  const client: Client = clientRepository.create(newClient);
  await clientRepository.save(client);

  const clientCreated: Client | null = await clientRepository.findOneBy({
    id: client.id,
  });

  return clientCreated!;
};

export default createClientService;
