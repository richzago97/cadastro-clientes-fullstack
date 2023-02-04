import React, { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";

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
}
const AuthProvider = ({ children }: IClientProps) => {
  const clientUser = localStorage.getItem("clientObject");
  const [client, setClient] = useState(JSON.parse(clientUser!));
  const navigate = useNavigate();

  const clientRegister = (data: IDataRegister) => {
    console.log("clientRegister", data);
    const postAPI = async () => {
      return api.post("/clients", data).then((response) => {
        console.log("response", response);
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

  return (
    <AuthContext.Provider
      value={{
        clientRegister,
        clientLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
