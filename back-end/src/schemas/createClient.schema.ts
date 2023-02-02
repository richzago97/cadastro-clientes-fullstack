import { object, string, SchemaOf } from "yup";

import { IClientRequest } from "../interfaces/clients/clients";

const createClientValidator: SchemaOf<IClientRequest> = object().shape({
  name: string().required(),
  email: string().required(),
  password: string().required(),
  telephone: string().required(),
});

export { createClientValidator };
