export interface IClientsList {
  id: string;
  name: string;
  telephone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  contact?: IContact[];
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  createdAt: string;
}
