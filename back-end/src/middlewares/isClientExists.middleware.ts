import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";

const isAccountExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const userRepository = AppDataSource.getRepository(Client);
  const client = await userRepository.findOneBy({ id });

  if (!client) {
    return res.status(404).json({
      message: "Account not found",
    });
  }

  return next();
};

export default isAccountExistsMiddleware;
