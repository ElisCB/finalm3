import React from 'react'
import { Link } from "react-router-dom";
/*import ClientMail from '../../components/FooterDash/Mensage'*/
const FooterHomePage = () => {
  return (
    <footer className=" flex flex-row bg-blue-100 sm:h-87 text-sm   py-4 px-6">
      <div className=' flex flex-col'>
      <span className='text-emerald-800'>Central de Atendimento: 0800-1234-5678</span>
        <span className='text-emerald-800'>Atendimento 24 horas</span>
      </div>
      <div>
      <Link className='  ml-64 '   to={"/mail"}>Ajuda</Link>
  

      </div>
    </footer>
  )
}
export default FooterHomePage;
