import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authClient = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    if (decoded) {
      req.client = {
        email: decoded.email,
        id: decoded.sub,
      };
    }

    return next();
  });
};
