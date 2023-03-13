import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import HeaderRegister from "../../components/header/headerRegister";
import InputComponent from "../../components/input/Input";
import { IUserRegisterFormValues } from "../../providers/@types";
import { UserContext } from "../../providers/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FooterHomePage from "../../components/FooterHome";

const formSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "A senha deve ter pelo menos 8 caracteres, incluindo letras, números e um símbolo"
    ),
  confirmPassword: yup
    .string()
    .required("confirmar a senha")
    .oneOf([yup.ref("password"), ""], "As senhas não correspondem"),
  name: yup.string().required("Nome obrigatório"),
  dateOfBirth: yup.string().required("Campo obrigatório"),
  CPF: yup.string().required("Campo obrigatório"),

  course_module: yup.string().required("Campo obrigatório"),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterFormValues>({
    resolver: yupResolver(formSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit = (data: IUserRegisterFormValues) => {
    userRegister(data);
  };

  return (
    <>
      <HeaderRegister/>
      <main className="bg-[url('assets/Cadastro.png')] bg-cover  w-screen w-full h-screen -mt-50" >
      <div className="w-full h-full  md:max-w-lg  mb-8  ml-64">
        <h3 className="px-6 text-lg md:text-2xl text-center  mb-8 font-bold">
          Cadastrar
        </h3>

        <form onSubmit={handleSubmit(submit)}>
          <div className="grid gap-4">
            <div>
              <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
                <InputComponent
                  label="Seu email"
                  placeholder="Seu email"
                  type="email"
                  register={register("email")}
                  error={errors.email?.message}
                />
              </div>
              <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
                <span className="text-red-500">
                  {errors.email && errors.email.message}
                </span>
              </div>
            </div>

            <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
              <InputComponent
                label="Seu password"
                type="password"
                register={register("password")}
                error={errors.password?.message}
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
              <InputComponent
                label="Confirme o seu password"
                type="password"
                register={register("confirmPassword")}
                error={errors.confirmPassword?.message}
                placeholder="Confirme seu password"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
              <InputComponent
                label="Seu nome"
                type="text"
                register={register("name")}
                error={errors.name?.message}
                placeholder="Digite o seu nome"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
              <InputComponent
                label="Data de Nascimento"
                type="text"
                register={register("dateOfBirth")}
                error={errors.dateOfBirth?.message}
                placeholder="Data de Nascimento"
              />
              {errors.dateOfBirth && (
                <span className="text-red-500">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
              <InputComponent
                label="CPF"
                type="text"
                register={register("CPF")}
                error={errors.CPF?.message}
                placeholder="CPF"
              />
              {errors.CPF && (
                <span className="text-red-500">{errors.CPF.message}</span>
              )}
            </div>
          </div>
          <div className="w-full max-w-xs md:max-w-lg mx-auto mt-4 mb-8">
            <div className="flex">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full"
                sx={{
                  backgroundColor: "#87BF9A",
                  "&:hover": {
                    backgroundColor: "#87BF9A",
                  },
                }}
              >
                Cadastro
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

export default RegisterPage;
