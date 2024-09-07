import { convertCentsToDollars } from "@/app/utils";
import Image from "next/image";
import { IProductInformation } from "@/app/constants";

interface ICartItemRow {
  cartItemProps: IProductInformation;
}
export default function CartItemRow({ cartItemProps }: ICartItemRow) {
  return (
    <div className="flex px-8 pt-16">
      <Image
        width={150}
        height={150}
        src={cartItemProps.previews[0]}
        alt={"Home"}
      />
      <div className="px-2 text-sm">
        <div className="uppercase">{cartItemProps.label}</div>
        <div className="mt-3">
          SGD ${`${convertCentsToDollars(cartItemProps.price)}`}
        </div>
        <div className="mt-3">{cartItemProps.description}</div>
      </div>
    </div>
  );
}
