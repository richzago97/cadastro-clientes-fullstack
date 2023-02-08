import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { IContact, IContactDataUpdate } from "../../../interfaces/client";
import UpdateContactForm from "../../forms/updateContact";
import { Container, MainDiv } from "./style";

export const DashboardContact = () => {
  const [isListClientsShowing, setIsListClientsShowing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { contacts, listContacts, deleteContact } = useContext(AuthContext);

  const toggleListContacts = () => {
    setIsListClientsShowing(!isListClientsShowing);
    if (!isListClientsShowing) {
      listContacts({} as IContact);
    }
  };

  const handleEditClick = (contact: IContactDataUpdate) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <MainDiv>
        <h3>List Contacts, Delete and Edit. Just click in Search Contacts!</h3>
        <button onClick={toggleListContacts}>Search Contacts!</button>
        {isListClientsShowing && contacts.length === 0 ? (
          <p>There are no contacts to show</p>
        ) : (
          contacts.map((contact) => (
            <li key={String(contact.id)}>
              <p>Name: {String(contact.name)}</p>
              <p>Telephone: {String(contact.telephone)}</p>
              <p>E-mail: {String(contact.email)}</p>
              <p>Created at: {String(contact.createdAt)}</p>
              <p>Updated at: {String(contact.updatedAt)}</p>
              <button onClick={() => deleteContact(contact.id)}>
                Delete Contact
              </button>
              <button onClick={() => handleEditClick(contact)}>
                Edit Client
              </button>
            </li>
          ))
        )}
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
            <UpdateContactForm onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </Container>
  );
};
