import { object, string, SchemaOf } from "yup";

import { IClientRequest } from "../interfaces/clients/clients";

const createClienteValidator: SchemaOf<IClientRequest> = object().shape({
  name: string().required(),
  email: string().required(),
  password: string().required(),
  telephone: string().required(),
});

export { createClienteValidator };
