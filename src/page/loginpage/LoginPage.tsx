import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header";
import InputComponent from "../../components/input/Input";
import { IUserLoginFormValues } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { ClassNames } from "@emotion/react";
import FooterHomePage from "../../components/FooterHome";

const formSchema = yup.object().shape({
  email: yup.string().required('Email Inválido').email('Email Inválido'),
  password: yup.string().required("Senha Inválida"),
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginFormValues>({
    resolver: yupResolver(formSchema)
});

  const { userLogin } = useContext(UserContext);

  const submit = (data: IUserLoginFormValues) => {
    userLogin(data);
  };

  return (
    <>
      <Header/> 
      <main className="bg-[url('assets/Login.png')] bg-cover  w-screen w-full h-screen -mt-50" >
      <div className="w-full h-full  md:max-w-lg  mb-8  ml-64">
     
        <h3 className=" text-lg md:text-2xl text-center  mb-8 font-bold">
          Login
        </h3>
      
        <form  
        onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col mb-4">
            <InputComponent
              label="Seu email"
              placeholder="Seu email"
              type="email"
              register={register("email")}
        
            />
            <span className="text-red-500" >{errors.email && errors.email.message}</span>
          </div>
          <div className="flex flex-col mb-4">
            <InputComponent
              label="Seu password"
              type="password"
              register={register("password")}
              
              placeholder="Password"
            />
            <span className="text-red-500" >{errors.password && errors.password.message}</span>
          </div>
          <div className="flex">
            <div className="flex-1">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full hover:bg-blue-700"
                style={{ backgroundColor: "#87BF9A" }}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    
      </main>
      <FooterHomePage/>
      </>
     
  );
};
export default LoginPage;


