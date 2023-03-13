import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const HeaderRegister = () => {
    return (
      <div>
      <header className="bg-blue-100 sm:h-87 flex flex-wrap justify-between  py-4 px-6">
    <div className=" flex items-center mb-4 sm:mb-0 h-full">
      <img
            src={Logo}
            alt="Logo"
            className="h-6 sm:h-80p ml-14 "
          />
          <span className="text-green-600 text-base sm:text-2xl md:text-4xl font-bold mr-60 ">
            VacTracker
          </span>
        <nav className="ml-64 space-x-4 space-x-reverse">
        <div className="flex flex-row sm:flex-row ml-64  ">
          <Link className='  ml-64 '   to={"/"}>Voltar</Link>
          <Link  className=' ml-12 ' to={"/login"}>Login</Link>
         </div> 
        </nav>
        </div>
      </header>
      </div>
  
    )
  }
  export default HeaderRegister