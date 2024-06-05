import { Router } from "next/router";
import MessageBanners from "../advert-banner/MessageBanner";
import Catalog from "../showroom/Catalog";
import Breadcrumbs from "../nav/Breadcrumbs";

export default function Homepage() {
  return (
    <div className="grid place-items-center w-full">
      <div className="md:w-[706px]">
        <Breadcrumbs crumbs={["shop"]} />
      </div>
      <Catalog />
    </div>
  );
}
