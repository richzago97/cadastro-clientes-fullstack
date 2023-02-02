import { object, string, SchemaOf } from "yup";

import { IContactRequest } from "../interfaces/contacts/contacts";

const createContactValidator: SchemaOf<IContactRequest> = object().shape({
  name: string().required(),
  email: string().required(),
  telephone: string().required(),
});

export { createContactValidator };
