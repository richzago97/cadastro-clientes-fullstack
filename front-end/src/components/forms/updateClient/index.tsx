import React, { useContext, useEffect } from "react";
import { UpdateContext } from "../../../contexts/UpdateContext";
import api from "../../../services/api";
const UpdateClientForm: React.FC<any> = () => {
  const { updateClient, updateclientState, setUpdateClientState } =
    useContext(UpdateContext);

  useEffect(() => {
    const loadClient = async () => {
      try {
        const response = await api.get(`clients/${updateclientState.id}`);
        console.log("Update useEffect, id", updateclientState.id);
        setUpdateClientState(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadClient();
  }, [setUpdateClientState, updateclientState.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateClientState({
      ...updateclientState,
      [e.target.name]: e.target.value,
    });
  };

  console.log("update client state", updateclientState);
  console.log("name", updateclientState.name);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(updateclientState);
    // updateClient( updateclientState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={updateclientState.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={updateclientState.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="telephone"
        placeholder="Phone"
        value={updateclientState.telephone}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateClientForm;
