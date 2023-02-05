import { createContext, ReactNode, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";

interface IUpdateContext {
  updateClient: (data: object, id: string) => void;
  updateclientState: IClientUpdate;
  setUpdateClientState: React.Dispatch<any>;
}

interface IUpdateProps {
  children: ReactNode;
}

interface IClientUpdate {
  name: string;
  email: string;
  telephone: string;
  id?: string;
}

export const UpdateContext = createContext<IUpdateContext>(
  {} as IUpdateContext
);

const UpdateProvider = ({ children }: IUpdateProps) => {
  const [updateclientState, setUpdateClientState] = useState<IClientUpdate>({
    name: "",
    email: "",
    telephone: "",
  });

  const updateClient = async (data: object, id: string) => {
    console.log("data", data);
    console.log("Data Update Client", data);
    try {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        console.log("Making API call to update client..., post if");
        const response = await api.patch(`clients/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success("Client updated successfully!");
        } else {
          console.error("Failed to update client.");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Falha ao atualizar cliente.");
    }
  };

  return (
    <UpdateContext.Provider
      value={{
        updateClient,
        updateclientState,
        setUpdateClientState,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export default UpdateProvider;
