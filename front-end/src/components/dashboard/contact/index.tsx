import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { IContact } from "../../../interfaces/client";
import { Container, MainDiv } from "./style";

export const DashboardContact = () => {
  const [isListClientsShowing, setIsListClientsShowing] = useState(false);

  const { contacts, listContacts, deleteContact } = useContext(AuthContext);

  const toggleListClients = () => {
    setIsListClientsShowing(!isListClientsShowing);
    if (!isListClientsShowing) {
      listContacts({} as IContact);
    }
  };
  return (
    <Container>
      <MainDiv>
        <h3>List Contacts, Delete and Edit. Just click in Search Contacts!</h3>
        <button onClick={toggleListClients}>Search Contacts!</button>
        {isListClientsShowing && contacts.length === 0 ? (
          <p>There are no contacts to show</p>
        ) : (
          contacts.map((contact) => (
            <li key={String(contact.id)}>
              <p>Name: {String(contact.name)}</p>
              <p>Telephone: {String(contact.telephone)}</p>
              <p>E-mail: {String(contact.email)}</p>
              <p>Created at: {String(contact.createdAt)}</p>
              <button onClick={() => deleteContact(contact.id)}>
                Delete Contact
              </button>
            </li>
          ))
        )}
      </MainDiv>
    </Container>
  );
};
