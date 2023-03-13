import React from "react";

import { useContext } from "react";
import HeaderDash from "../../components/HeaderDash";
import CartModal from "../../components/CartModal";
import ProductList from "../../components/ProductsList";
import { CartContext } from "../../providers/CartContext/CartContext";
import VaccinesUser from "../../components/VaccinesUser";
import FooterHomePage from "../../components/FooterHome";

const Dashboard = () => {
  const { modalCartShoppingList } = useContext(CartContext);

  return (
    <div className="w-full" >
      <HeaderDash />      
      <main className="m-14 flex sm ">
        <div className="w-2/5">
        <VaccinesUser/>
        </div>
        <aside >
        <ProductList />
        </aside>
      </main>
      {modalCartShoppingList ? <CartModal /> : null}
      <FooterHomePage/>
      
    </div>
  );
};

export default Dashboard;
