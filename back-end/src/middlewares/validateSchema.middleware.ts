import { ValidationError } from "yup";
import { NextFunction, Response, Request } from "express";

function validateSchema(schema: any) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validate(request.body, { abortEarly: false });
      next();
    } catch (err) {
      return response.status(400).json({
        message: (err as ValidationError).errors,
      });
    }
  };
}

export default validateSchema;
