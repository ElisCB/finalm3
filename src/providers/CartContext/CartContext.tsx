import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IVaccines } from "../@types";
import { UserContext } from "../UserContext";
import { ICartContext, IDefaultProviderProps } from "./@typesCart";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {

  const {user} = useContext(UserContext)

  const navigate = useNavigate();
  const localVaccinesCartList = localStorage.getItem("@VACCINES");
  const [cart, setCart] = useState<IVaccines[]>([]);
    const [modalCartShoppingList, setModalCartShoppingList] = useState(false);
  const [shoppingCartList, setShoppingCartList] = useState(
    localVaccinesCartList ? JSON.parse(localVaccinesCartList) : []
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token && user) {
      const shopForm = async () => {
        try {
          const response = await api.get<IVaccines[]>("vaccines", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCart(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      shopForm();
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("@VACCINES", JSON.stringify(shoppingCartList));
  }, [shoppingCartList]);

  const searchMenuList = cart.filter((product) =>
    search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchMenuList);

  const addCartShopping = (product: IVaccines) => {
    const localMenuCartList = localStorage.getItem("@VACCINES");

    if (localMenuCartList) {
      if (!localMenuCartList.includes(product.name)) {
        toast.success(`A vacina de ${product.name} foi adicionado ao carrinho`);
        if (shoppingCartList) {
          setShoppingCartList([...shoppingCartList, { ...product }]);
        }
      } else {
        toast.error(
          `A vacina de ${product.name} já foi adicionado ao carrinho`
        );
      }
    }
  };

  const removeAllItens = () => {
    setShoppingCartList([]);
    toast.info("Todos os itens foram removidos");
  };

  const removeCartShopping = (productId: any) => {
    const newCartShopping = shoppingCartList.filter(
      (product: { id: any }) => product.id !== productId
    );
    setShoppingCartList(newCartShopping);
    toast.error("O produto foi removido do carrinho");
  };

  const valueCart = shoppingCartList.reduce(
    (accumulate: number, valueCurrent: { price: number }) =>
      accumulate + valueCurrent.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        modalCartShoppingList,
        setModalCartShoppingList,
        addCartShopping,
        searchMenuList,
        setShoppingCartList,
        shoppingCartList,
        valueCart,
        removeAllItens,
        removeCartShopping,
        setSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
