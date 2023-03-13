import { useContext } from "react";
import { IProductsProps } from "../../providers/CartContext/@typesCart";
import { CartContext } from "../../providers/CartContext/CartContext";

const ProductCardHome = ({ product }: IProductsProps) => {
  const { addCartShopping } = useContext(CartContext);
  return (
    <ul>
      <div>
        <img src={`${product.img}`} alt="Vacinas" />
      </div>
      <div>
        <h3>
          {`${product.name}`}
        </h3>
        <p>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
      </div>
    </ul>
  );
};
export default ProductCardHome;
