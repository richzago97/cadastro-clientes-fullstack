import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IContactDataUpdate } from "../../../interfaces/client";
import api from "../../../services/api";

const UpdateContactForm: React.FC<any> = ({ onClose }) => {
  const [contactValue1, setContactValue1] = useState("");
  const [contactValue2, setContactValue2] = useState("");
  const [contactValue3, setContactValue3] = useState("");

  const { register, handleSubmit } = useForm<IContactDataUpdate>({});

  const onSubmitFunction = async (data: FieldValues) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const contactID = localStorage.getItem("@CONTACT_ID");
      const response = await api.patch(`contacts/${contactID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        toast.success("Contact updated successfully!");
      } else {
        console.error("Failed to update client.");
        toast.error("Email already exists!");
      }
    } catch (error) {
      console.log(error);
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
        value={contactValue1}
        placeholder="Name"
        {...register("name")}
        onChange={(event) => setContactValue1(event.target.value)}
      />

      <input
        type="text"
        value={contactValue2}
        placeholder="Email"
        {...register("email")}
        onChange={(event) => setContactValue2(event.target.value)}
      />

      <input
        type="text"
        value={contactValue3}
        placeholder="Phone"
        {...register("telephone")}
        onChange={(event) => setContactValue3(event.target.value)}
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
export default UpdateContactForm;
