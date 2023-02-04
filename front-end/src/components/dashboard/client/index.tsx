import { useContext } from "react";
import { Container, MainDiv } from "./style";

import { AuthContext } from "../../../contexts/AuthContext";

export const DashboardClient = () => {
  const { clients, listClients, deleteClient } = useContext(AuthContext);

  return (
    <Container>
      <MainDiv>
        <h3>List Clients</h3>
        <button onClick={listClients}>Search Clients</button>
        {clients.map((client) => (
          <li key={String(client.id)}>
            <p>Name: {String(client.name)}</p>
            <p>Telephone: {String(client.telephone)}</p>
            <p>E-mail: {String(client.email)}</p>
            <p>Created at: {String(client.createdAt)}</p>
            <p>Updated At: {String(client.updatedAt)}</p>
            {client.contact && client.contact.length ? (
              <>
                <p>Contacts:</p>
                <ul>
                  {client.contact.map((contact) => (
                    <li key={contact.id}>
                      <p>Name: {contact.name}</p>
                      <p>E-mail: {contact.email}</p>
                      <p>Telephone: {contact.telephone}</p>
                      <p>Created at: {contact.createdAt}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Contact: This client doesn't have any contacts</p>
            )}
            <button onClick={() => deleteClient(client.id)}>
              Delete Client
            </button>
          </li>
        ))}
      </MainDiv>
    </Container>
  );
};
