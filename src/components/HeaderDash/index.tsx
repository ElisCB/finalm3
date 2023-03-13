import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { CartContext } from '../../providers/CartContext/CartContext';
import Logo from "../../assets/Logo.png";
import Dashboard from "../../assets/Dashboard.png"
import SearchForm from './Search';

const HeaderDash = () => {
  const {userLogout} = useContext(UserContext);
  const {modalCartShoppingList, setModalCartShoppingList} = useContext(CartContext);

  const handleOpenCartModal = () => {
    setModalCartShoppingList(true); // abre o modal
  };

return (
  <div>
    <header className="bg-blue-100 sm:h-87 flex flex-wrap justify-between  py-4 px-6">
  <div className=" flex items-center mb-4 sm:mb-0 h-full">
    <img
          src={Logo}
          alt="Logo"
          className="h-6 sm:h-80p ml-14 "
        />
        <span className="text-green-600 text-base sm:text-2xl md:text-4xl font-bold">
          VacTracker
        </span>
        <div className='ml-44'>
        <div className="flex flex-row sm:flex-row ml-44  h-full">
          <SearchForm/>
  
        <div className=' ml-12'>
        <button className='ml-44' type="button" onClick={handleOpenCartModal}>
            <MdShoppingCart  />
          </button>
          <button className=' ml-8' type='button'
          onClick={() =>{userLogout()}}
          >
            <MdLogout />
          </button>
        </div>
        </div>
</div>
    </div>
</header>

<div>
  <img src={Dashboard} className="w-full"/>
</div>
  </div>


)
}
export default HeaderDash;