import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface IUpdateContext {
  getClientInfo: () => void;
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  clientEmail: string;
  setClientEmail: React.Dispatch<React.SetStateAction<string>>;
  clientTelephone: string;
  setClientTelephone: React.Dispatch<React.SetStateAction<string>>;
  // updateClient: (data: object) => Promise<void>;
}

interface IUpdateProps {
  children: ReactNode;
}

export interface IClientUpdate {
  name: string;
  email: string;
  telephone: string;
}

export const UpdateContext = createContext<IUpdateContext>(
  {} as IUpdateContext
);

const UpdateProvider = ({ children }: IUpdateProps) => {
  const { client, setClient } = useContext(AuthContext);

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientTelephone, setClientTelephone] = useState("");

  const getClientInfo = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      if (client) {
        const response = await api.get(`clients/${client?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setClient(response.data);
          setClientName(client.name);
          setClientEmail(client.email);
          setClientTelephone(client.telephone);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Failure get client.");
    }
  };

  // const updateClient = async (data: object) => {
  //   console.log('Ta chamando ')
  //   try {
  //     const token = localStorage.getItem("@TOKEN");

  //     console.log("Chamando api ");
  //     const response = await api.patch(`clients/${client.id}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (response.status === 200) {
  //       toast.success("Client updated successfully!");
  //     } else {
  //       console.error("Failed to update client.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failure to update client.");
  //   }
  // };

  return (
    <UpdateContext.Provider
      value={{
        // updateClient,
        clientName,
        setClientName,
        clientEmail,
        setClientEmail,
        clientTelephone,
        setClientTelephone,
        getClientInfo,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export default UpdateProvider;
