export interface IClientRequest {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IClient {
  name: string;
  email: string;
  password: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
}


export interface IClientUpdate {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}

import { IContact } from "../../interfaces/contacts/contacts";

export interface IClientWithContacts {
  client: IClient;
  contact: IContact[];
}
