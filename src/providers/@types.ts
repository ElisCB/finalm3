import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserRegisterFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  dateOfBirth: string;
  CPF: string;
}

export interface IUserLoginFormValues {
  accesToken(accesToken: string): unknown;
  email: string;
  password: string;
}

export type UserAutoLoginFunction = () => void;

export interface IUserContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (data: IUserRegisterFormValues) => Promise<void>;
  userLogin: (data: IUserLoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface VaccinesProviderProps {
  children: ReactNode;
}

export type loadVaccines = () => void;

export interface IUsersVaccines {
  name: string;
  data: string;
  img: string;
  vaccineId: number;
  userId: number;
}

export interface IRenderUserVaccine {
  name: string;
  data: string;
  img: string;
  vaccineId: number;
  userId: number;
}

export interface IVaccines {
  name: string;
  quantity: number;
  price: number;
  date: string;
  information: string;
  img: string;
  id: number;
}

export interface IVaccinesContext {
  loading: boolean;
  vaccines: IVaccines[];
  setVaccines: React.Dispatch<React.SetStateAction<IVaccines[]>>;
  renderVaccines: IRenderUserVaccine[] | undefined;
  setRenderVaccines: React.Dispatch<
    React.SetStateAction<IRenderUserVaccine[] | undefined>
  >;
  vaccinesCardUser: any;
  setVaccinesCardUser: React.Dispatch<any>
  addVaccineUser: (product: IVaccines) => void,

}

export interface IInputProps{
  label:string;
  register: UseFormRegisterReturn<string>;
  error?: string;
  type: 'text' | 'email' | 'password'
  placeholder: string
}