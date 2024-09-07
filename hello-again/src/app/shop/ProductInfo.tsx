import { useState } from "react";
import ImageButton from "../components/ImageButton";
import { PRODUCTS_INFORMATION } from "../constants";
import { convertCentsToDollars } from "../utils";
import Select from "../components/Select";
import Button from "../components/Button";
import PageOverlay from "../components/PageOverlay";
import Cart from "../components/cart/Cart";
import { useCartContext } from "../CartContext";

interface IProductInfo {
  productName: string;
}

export default function ProductInfo({ productName }: IProductInfo) {
  const { setIsCartOpen, isCartOpen } = useCartContext();
  const productInfo = PRODUCTS_INFORMATION.find(
    (product) => product.name === productName
  )!;
  const previewLinks = productInfo.previews;
  const [selectedImageSrc, setSelectedImageSrc] = useState(previewLinks[0]);

  return (
    <div className="flex pb-4">
      <Cart />
      <div className="flex space-x-2 min-w-[580px]">
        <div className="grid grid-cols-1 gap-y-2 h-fit">
          {previewLinks!.map((src) => (
            <div key={src}>
              <ImageButton
                src={src}
                size="xs"
                onClick={() => {
                  setSelectedImageSrc(src);
                }}
              />
            </div>
          ))}
        </div>
        <div>
          <ImageButton src={selectedImageSrc} size="lg" />
        </div>
      </div>
      <div className="ml-16">
        <div className="text-center text-lg">{productInfo.label}</div>
        <div className="text-center text-sm">
          SGD ${convertCentsToDollars(productInfo.price)} &#40;GST included&#41;
        </div>
        <div className="text-center text-ha-grey text-xs py-2">
          {productInfo.description}
        </div>
        <div className="grid grid-col-1 place-content-center w-full gap-y-2 py-4">
          <Select options={[{ attributes: {}, label: "1", value: 1 }]} />
          <Button
            onClick={() => {
              setIsCartOpen(true);
            }}
            color="dirty-green"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
