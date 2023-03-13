import React, { useContext, useState } from "react";
import { VaccinesContext } from "../../providers/VaccinesContext";
import VaccinesUserList from "./VaccinesUserList";

function VaccinesUser() {
  const {vaccinesCardUser} = useContext(VaccinesContext);

  return (
    <section className=" sticky mt-50 w-96 border-r-4 h-full ">
      <header className="w-60">
        <h2 className=" text-center mb-10 mt-3 text-lg font-medium text-gray-900" >Caderneta de Vacinação</h2>
      </header>

      <div>
        {vaccinesCardUser.length > 0 ? (
          <VaccinesUserList/>
        ) : (
          <div className="w-60">
            <h3 className="mt-1 text-sm font-medium text-gray-700" >Você ainda não possui registro de vacina!</h3>
            <div>
              <p className="mt-1 text-sm font-medium text-gray-600" >
              Caso precise de ajuda para adquirir nossas vacinas, entre em
              contato!
              </p>
            </div>
          </div>
        )}
      </div>
      </section>
  );
}

export default VaccinesUser;
