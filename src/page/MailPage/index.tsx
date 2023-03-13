import React from "react";
import { useState } from "react";
import EmailJSResponseStatus from "@emailjs/browser";
import HeaderMail from "../../components/header/headerInfo";

const ClientMail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templeteParames = {
      from_name: name,
      message: message,
      email: email,
    };

    EmailJSResponseStatus.send(
      "service_rwy8aos",
      "template_yklu18x",
      templeteParames,
      "0PEM1LGePqTA-9Jda"
    ).then(
      (response: { status: any; text: any }) => {
        console.log("Email enviado", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error: any) => console.log("ERRO", error)
    );
  }

  return (
    <>
      <HeaderMail />
      <main className="bg-[url('assets/Vac.png')] bg-cover  w-screen w-full h-screen " >
      <div className=" flex flex-col ml-64  self-center">
        <div className=""> </div>
        <section>
      
          <h2 className="text-lg  mr-64 text-center  mb-8 font-bold">Contato</h2>
        </section>

        <form className=" flex flex-col justify-center text-center ml-80 " onSubmit={sendEmail}>
          <input
            className="border rounded-lg py-2 px-6 mb-2 w-80 opacity-50"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="border rounded-lg py-2 px-6 mb-2 w-80 opacity-50"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="border rounded-lg py-2 px-6 mb-2 w-80 h-80 opacity-50"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className=" bg-sky-300 text-lg  mr-96 text-center mt-4 mb-8 font-bold border rounded-lg py-2 px-6 mb-2 w-80 opacity-50" type="submit" value="Enviar" />
        </form>
      </div>
      </main>
    </>
  );
};
export default ClientMail;
