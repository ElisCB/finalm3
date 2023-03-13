import { IVaccines } from "../@types";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProductsProps {
  product: IVaccines
}

export interface ICartContext {
  cart: IVaccines[];
  setCart: React.Dispatch<React.SetStateAction<IVaccines[]>>;
  modalCartShoppingList: boolean;
  setModalCartShoppingList: React.Dispatch<React.SetStateAction<boolean>>;
  addCartShopping: (product: IVaccines) => void;
  searchMenuList: IVaccines[];
  setShoppingCartList: React.Dispatch<any>;
  shoppingCartList: any;
  valueCart: any;
  removeAllItens: () => void;
  removeCartShopping: (productId: any) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

