"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { IProductInformation } from "./constants";

type TCart = {
  [itemName: string]: IProductInformation & { quantity: number };
};
export type TCartContextValues = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cart: TCart;
  setCart: Dispatch<SetStateAction<TCart>>;
};
const CartContext = createContext<TCartContextValues | undefined>(undefined);

interface CartProvider {
  children: ReactNode;
}
export default function CartProvider({ children }: CartProvider) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<TCart>({});
  const cartProviderValues = useMemo(() => {
    return {
      isCartOpen,
      setIsCartOpen,
      cart,
      setCart,
    };
  }, [isCartOpen, setIsCartOpen, cart, setCart]);
  return (
    <CartContext.Provider value={cartProviderValues}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () =>
  useContext(CartContext) as TCartContextValues;
