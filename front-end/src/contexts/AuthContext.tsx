import React, { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";
import { IClientsList } from "../interfaces/client";

export const AuthContext = createContext<clientContextData>(
  {} as clientContextData
);

export interface IDataRegister {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IDataClientLogin {
  email: string;
  password: string;
}

interface IClientProps {
  children: ReactNode;
}

interface clientContextData {
  clientRegister: (IDataRegister: IDataRegister) => void;
  clientLogin: (IDataClientLogin: IDataClientLogin) => void;
  listClients: (
    IClientsList: IClientsList | React.MouseEvent<HTMLButtonElement>
  ) => void;
  deleteClient: (id: string) => void;
  clients: IClientsList[];
}
const AuthProvider = ({ children }: IClientProps) => {
  const clientUser = localStorage.getItem("clientObject");
  const [client, setClient] = useState(JSON.parse(clientUser!));
  const [clients, setClients] = useState<IClientsList[]>([]);
  const navigate = useNavigate();

  const clientRegister = (data: IDataRegister) => {
    const postAPI = async () => {
      return api.post("/clients", data).then((response) => {
        response.status === 201 && navigate("/login");
        return response;
      });
    };
    return toast.promise(postAPI(), {
      loading: "Loading",
      success: "Conta criada com sucesso!",
      error: "Cliente já cadastrado!",
    });
  };

  const clientLogin = (data: IDataClientLogin) => {
    console.log("Login", data);
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@TOKEN", response.data.token);
        setClient(response.data.token);
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Login ou senha incorreta");
      });
  };

  const listClients = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        const response = await api.get("clients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClients(response.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      localStorage.removeItem("@TOKEN");
      console.error(error);
    }
  };

  const deleteClient = async (id: string) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const response = await api.delete(`/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 204) {
          setClients(clients.filter((client) => client.id !== id));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateClient = async (id: string) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const response = await api.patch(`/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        clientRegister,
        clientLogin,
        listClients,
        clients,
        deleteClient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
