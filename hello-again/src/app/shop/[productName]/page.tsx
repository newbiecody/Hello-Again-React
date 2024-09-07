"use client";
import { PRODUCTS_INFORMATION } from "@/app/constants";
import Breadcrumbs from "@/app/nav/Breadcrumbs";
import { usePathname } from "next/navigation";
import ProductInfo from "../ProductInfo";

interface ProductPageUrlParams {
  params: { productName: string };
}
export default function ProductPage({ params }: ProductPageUrlParams) {
  const { productName } = params;
  const label = PRODUCTS_INFORMATION.find(
    (product) => product.name == productName
  )?.label;
  const crumbs = usePathname()
    .replace(productName, label!)
    .split("/")
    .filter(Boolean);

  return (
    <div className="grid place-items-center w-full">
      <div className="w-[80%]">
        <div className="py-4">
          <Breadcrumbs crumbs={crumbs.map((crumb) => crumb.toLowerCase())} />
        </div>
        <div>
          <ProductInfo productName={productName}/>
        </div>
      </div>
    </div>
  );
}
