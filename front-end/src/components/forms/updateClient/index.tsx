import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { IClientDataUpdate } from "../../../interfaces/client";
import api from "../../../services/api";
const UpdateClientForm: React.FC<any> = ({ onClose }) => {
  const [clientValue1, setClientValue1] = useState("");
  const [clientValue2, setClientValue2] = useState("");
  const [clientValue3, setClientValue3] = useState("");

  const { register, handleSubmit } = useForm<IClientDataUpdate>({});

  const onSubmitFunction = async (data: FieldValues) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const clientID = localStorage.getItem("@CLIENT_ID");
      const response = await api.patch(`clients/${clientID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        toast.success("Client updated successfully!");
      } else {
        console.error("Failed to update client.");
        toast.error("Email already exists!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
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
      <button
        className="x"
        onClick={closeModal}
        style={{
          position: "absolute",
          right: "-15px",
          top: "-18px",
          height: "15px",
          borderRadius: "15px",
          fontSize: "10px",
        }}
      >
        X
      </button>
    </form>
  );
};

export default UpdateClientForm;
