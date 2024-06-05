"use client";
import { PRODUCTS_INFORMATION } from "../constants";
import Image from "next/image";
import { convertCentsToDollars, triggerCbOnInterval } from "../utils";
import { useState } from "react";

interface CatalogProps {}
export default function Catalog({}: CatalogProps) {
  PRODUCTS_INFORMATION;
  const [imageIndex, setImageIndex] = useState(0);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
      {PRODUCTS_INFORMATION.map((product) => {
        return (
          <div key={product.productId} className="grid place-items-center">
            <div
              //   onMouseEnter={() => {
              //     triggerCbOnInterval(() => {
              //       setImageIndex((prev) => (prev + 1) % product.previews.length);
              //     }, 3000);
              //   }}
              //   onMouseLeave={() => {
              //     setImageIndex(0);
              //   }}
              role="button"
              tabIndex={0}
              className="h-[320px] w-[320px] bg-black overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={product.previews[0]}
                alt={"Home"}
                onClick={() => {}}
              />
            </div>
            <div className="text-sm">{product.label}</div>
            <div className="text-sm">{`$${convertCentsToDollars(product.price)}`}</div>
          </div>
        );
      })}
    </div>
  );
}
