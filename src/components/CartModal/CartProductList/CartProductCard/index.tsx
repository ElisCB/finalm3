import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../../../providers/CartContext/CartContext";
import { IProductsProps } from "../../../../providers/CartContext/@typesCart";

const CartProductCard = ({ product }: IProductsProps) => {
  const { removeCartShopping } = useContext(CartContext);

  return (
    <li className="w-90 bg-slate-50  ml-10 mr-10 mb-10 rounded flex flex-col ">
      <div className=" flex flex-row justify-around">
        <img src={`${product.img}`} alt="Vacinas" className="w-40" />
        <button className="ml-10  "
          type="button"
          aria-label="Remover"
          onClick={() => removeCartShopping(product.id)}
        >
          <MdDelete />
        </button>
      </div>
      <h3 className="ml-30">{product.name}</h3>
    </li>
  );
};

export default CartProductCard;
