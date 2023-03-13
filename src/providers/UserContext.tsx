import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import {
  IUser,
  IUserContextData,
  IUserLoginFormValues,
  IUserProviderProps,
  IUserRegisterFormValues,
  UserAutoLoginFunction,
} from "./@types";

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  const userRegister = async (data: IUserRegisterFormValues) => {
    try {
      await api.post("register", data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    }
  };

  const userLogin = async (data: IUserLoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      setUser(response.data.user);
      setUserId(response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("Bem-vindo!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Dados inválidos, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const tokenId = localStorage.getItem("@USERID");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`users/${tokenId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          setUser(null);
        }
      };

      userAutoLogin();
    }
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
