export interface IContactRequest {
  name: string;
  email: string;
  telephone: string;
}

export interface IContact {
  name: string;
  email: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}
