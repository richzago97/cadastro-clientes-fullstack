import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface IUpdateContext {
  getClientInfo: () => void;
  updateClient: (data: object) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  telephone: string;
  setTelephone: React.Dispatch<React.SetStateAction<string>>;
}

interface IUpdateProps {
  children: ReactNode;
}

export const UpdateContext = createContext<IUpdateContext>(
  {} as IUpdateContext
);

const UpdateProvider = ({ children }: IUpdateProps) => {
  const { client, setClient } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const getClientInfo = () => {
    if (client) {
      api.get(`/clients/${client?.id}`).then((res) => {
        setClient(res.data);
        setName(client.name);
        setEmail(client.email);
        setTelephone(client.telephone);
      });
    }
  };

  const updateClient = (data: object) => {
    if (client) {
      const patchAPI = () => {
        const response = api
          .patch(`clients/${client.id}`, data)
          .then((res) => res);
        return response;
      };
      toast.promise(patchAPI(), {
        loading: "Loading",
        success: "Perfil editado com sucesso",
        error: "Infelizmente, não conseguimos editar seu perfil",
      });
    }
  };

  return (
    <UpdateContext.Provider
      value={{
        getClientInfo,
        updateClient,
        name,
        setName,
        email,
        setEmail,
        telephone,
        setTelephone,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export default UpdateProvider;
