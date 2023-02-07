import { useContext, useState } from "react";
import { Container, MainDiv } from "./style";
import ClientUpdateForm from "../../../components/forms/updateClient";

import { AuthContext } from "../../../contexts/AuthContext";
import { IClientDataUpdate, IClientsList } from "../../../interfaces/client";

export const DashboardClient = () => {
  const [showModal, setShowModal] = useState(false);
  const [isListClientsShowing, setIsListClientsShowing] = useState(false);
  const { clients, listClients, deleteClient } = useContext(AuthContext);

  const handleEditClick = (client: IClientDataUpdate) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleListClients = () => {
    listClients({} as IClientsList);
    setIsListClientsShowing(!isListClientsShowing);
  };

  return (
    <Container>
      <MainDiv>
        <h3>Your information, Delete and Edit. Just click in Client!</h3>

        <button onClick={toggleListClients}> Client</button>
        {isListClientsShowing &&
          clients.map((client) => (
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
              <button onClick={() => handleEditClick(client)}>
                Edit Client
              </button>
            </li>
          ))}
      </MainDiv>
      {showModal && (
        <div
          className="modal_1"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="modal_2"
            style={{
              background: "white",
              padding: "20px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ClientUpdateForm onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </Container>
  );
};
