import { useState } from "react";
import { Container, MainDiv } from "./style";
import api from "../../../services/api";
import { IClientsList } from "../../../interfaces/client";
import { useNavigate } from "react-router-dom";

export const DashboardClient = () => {
  const [clients, setClients] = useState<IClientsList[]>([]);
  const navigate = useNavigate();

  const listClients = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        const response = await api.get("clients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClients(response.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      localStorage.removeItem("@TOKEN");
      console.error(error);
    }
  };
  const deleteClient = async (id: string) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const response = await api.delete(`/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 204) {
          setClients(clients.filter((client) => client.id !== id));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            {client.contact && (
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
