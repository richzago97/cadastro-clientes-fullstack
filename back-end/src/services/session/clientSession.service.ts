import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IClientSession } from "../../interfaces/session/session";

const clientLoginService = async ({
  email,
  password,
}: IClientSession): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.findOneBy({ email });

  if (!clients) {
    throw new AppError("Account not found");
  }
  if (!clients.password) {
    throw new AppError("Password not found", 401);
  }

  if (!bcrypt.compareSync(password, clients.password)) {
    throw new AppError("Wrong email/password", 403);
  }

  const token = jwt.sign({ email: email }, String("shauhusajas"), {
    expiresIn: "24h",
    subject: clients.id,
  });

  return token;
};
export default clientLoginService;
