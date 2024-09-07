"use client";
import PageOverlay from "../PageOverlay";
import { useCartContext } from "../../CartContext";
import { IProductInformation } from "../../constants";
import CartItemRow from "./CartItemRow";
import { convertCentsToDollars } from "@/app/utils";
import Button from "../Button";
import { useRouter } from 'next/router';

interface ICart {
  productInfo: IProductInformation & { quantity: number };
}
export default function Cart() {
  const router = useRouter();
  const { setIsCartOpen, isCartOpen, cart } = useCartContext();
  const onClose = () => {
    setIsCartOpen(false);
  };
  const subTotalInDollars = convertCentsToDollars(
    Object.values(cart).reduce((accumulator, currentCartItem) => {
      return (accumulator += currentCartItem.quantity * currentCartItem.price);
    }, 0)
  );
  console.log(Object.values(cart).reduce((accumulator, currentCartItem) => {
    return (accumulator += currentCartItem.quantity * currentCartItem.price);
  }, 0));
  return (
    <PageOverlay onClose={onClose} isOpen={isCartOpen}>
      <div className="bg-white h-full w-[500px]">
        {Object.values(cart).map((productInfo) => (
          <CartItemRow key={productInfo.name} cartItemProps={productInfo} />
        ))}
        <div className="absolute bottom-0 border-t h-24 w-[500px]">
          <div>Subtotal: SGD${subTotalInDollars}</div>
          <div className="flex">
            <Button onClick={() => {
              router.push('/cart');
            }}>View Cart</Button>
            <Button onClick={() => {
              router.push('/checkout');
            }}>Checkout</Button>
          </div>
        </div>
      </div>
    </PageOverlay>
  );
}
