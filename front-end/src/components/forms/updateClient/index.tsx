import React, { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { IClientUpdate } from "../../../contexts/UpdateContext";
import api from "../../../services/api";
const UpdateClientForm: React.FC<any> = () => {
  const { client } = useContext(AuthContext);

  const [clientValue1, setClientValue1] = useState("");
  const [clientValue2, setClientValue2] = useState("");
  const [clientValue3, setClientValue3] = useState("");

  const { register, handleSubmit } = useForm<IClientUpdate>({});

  const onSubmitFunction = async (data: FieldValues) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      console.log(token);

      console.log("Chamando api ", data);
      const response = await api.patch(`clients/${client.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Sucess");
      } else {
        console.error("Failed to update client.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(clientValue1, clientValue2, clientValue3);

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <input
        type="text"
        value={clientValue1}
        placeholder="Name"
        {...register("name")}
        onChange={(event) => setClientValue1(event.target.value)}
      />
      <input
        type="email"
        value={clientValue2}
        placeholder="Email"
        {...register("email")}
        onChange={(event) => setClientValue2(event.target.value)}
      />
      <input
        type="text"
        value={clientValue3}
        {...register("telephone")}
        placeholder="Phone"
        onChange={(event) => setClientValue3(event.target.value)}
      />
      <button>Update</button>
    </form>
  );
};

export default UpdateClientForm;
