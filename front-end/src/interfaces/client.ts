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
  updatedAt: string;
}

export interface IContactRegister {
  name: string;
  email: string;
  telephone: string;
}

export interface IClientDataUpdate {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}

export interface IContactDataUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}
