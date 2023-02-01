import { Request, Response } from "express";
import { IClientSession } from "../../interfaces/session/session";
import clientLoginService from "../../services/session/clientSession.service";

const clientLoginController = async (req: Request, res: Response) => {
  const { email, password }: IClientSession = req.body;
  const token = await clientLoginService({ email, password });
  return res.json({ token });
};

export default clientLoginController;
