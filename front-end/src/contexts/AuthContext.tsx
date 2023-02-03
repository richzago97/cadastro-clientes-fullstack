import React, { createContext, ReactNode } from "react";
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

interface IClientProps {
  children: ReactNode;
}

interface clientContextData {
  clientRegister: (IDataRegister: IDataRegister) => void;
}
const AuthProvider = ({ children }: IClientProps) => {
  const navigate = useNavigate();

  const clientRegister = (data: IDataRegister) => {
    console.log("clientRegister", data);
    const postAPI = async () => {
      return api.post("/clients", data).then((response) => {
        console.log("response", response);
        response.status === 201 && navigate("/");
        return response;
      });
    };
    return toast.promise(postAPI(), {
      loading: "Loading",
      success: "Conta criada com sucesso!",
      error: "Cliente já cadastrado!",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        clientRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
