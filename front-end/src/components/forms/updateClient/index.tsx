import React, { useContext } from "react";
import { UpdateContext } from "../../../contexts/UpdateContext";
import { IClientDataUpdate } from "../../../interfaces/client";

interface IProps {
  client: IClientDataUpdate | null;
  onClose: () => void;
}
const ClientUpdateForm: React.FC<IProps> = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    telephone,
    setTelephone,
    updateClient,
  } = useContext(UpdateContext);

  const onSubmitFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateClient({ name, email, telephone });
  };

  return (
    <form onSubmit={onSubmitFunction}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telephone">Telefone:</label>
        <input
          type="tel"
          id="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </div>
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default ClientUpdateForm;
