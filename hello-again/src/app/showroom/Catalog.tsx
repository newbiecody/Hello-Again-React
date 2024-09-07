"use client";
import { PRODUCTS_INFORMATION } from "../constants";
import Image from "next/image";
import { convertCentsToDollars, triggerCbOnInterval } from "../utils";
import { useState } from "react";
import Link from "next/link";

interface CatalogProps {}
export default function Catalog({}: CatalogProps) {
  PRODUCTS_INFORMATION;
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-wrap w-fit">
      {PRODUCTS_INFORMATION.map((product) => {
        return (
          <div
            key={product.name}
            className="grid place-items-center mr-12"
            onMouseOver={() => {
              // triggerCbOnInterval(() => {
              //   setImageIndex((prev) => (prev + 1) % product.previews.length);
              // }, 5000);
            }}
            onMouseLeave={() => {
              // setImageIndex(0);
            }}
          >
            <Link href={`/shop/${product.name}`}>
              <div
                role="button"
                tabIndex={0}
                className="h-[320px] w-[320px] overflow-hidden mb-4"
              >
                <Image
                  width={500}
                  height={500}
                  src={product.previews[imageIndex]}
                  alt={"Home"}
                />
              </div>
            </Link>
            <div className="text-sm">{product.label}</div>
            <div className="text-sm">{`$${convertCentsToDollars(
              product.price
            )}`}</div>
          </div>
        );
      })}
    </div>
  );
}
