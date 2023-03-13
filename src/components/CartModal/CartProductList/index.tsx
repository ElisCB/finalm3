import { useContext } from "react";
import CartProductCard from "./CartProductCard";
import { IVaccines } from "../../../providers/@types";
import { CartContext } from "../../../providers/CartContext/CartContext";
import { VaccinesContext } from "../../../providers/VaccinesContext";

const CartProductList = () => {
  const { shoppingCartList, valueCart, removeAllItens} = useContext(CartContext);
  const { addVaccineUser} = useContext(VaccinesContext);  

  return (
    <div>
      <ul>
        {shoppingCartList.map(
          (product: IVaccines) =>
            product.name && (
              <CartProductCard key={product.id} product={product} />
            )
        )}
      </ul>

      <div className=" flex flex-col">
        <div className=" flex flex-row  justify-around">
        <p>
          <strong>Total</strong>
        </p>
        <p>R$ {valueCart.toFixed(2)}</p>
        </div>
      <button className="bg-neutral-300 h-10" onClick={() => removeAllItens()}>Remover todos</button>

      {shoppingCartList.map((product: IVaccines) => (
        <button  className=" bg-teal-100 h-10" onClick={() => addVaccineUser(product)}>
          Finalizar Compras
        </button>
       
      ))}
       </div>
    </div>
  );
};

export default CartProductList;
