"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarMenuItemsProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  icon?: IconProp;
  link: string;
}
function NavbarMenuItems(props: NavbarMenuItemsProps) {
  const { label, icon, link } = props;

  return (
    <li
      className="flex justify-center items-center px-2 text-sm hover:cursor-pointer hover:underline space-x-1"
      {...props}
    >
      <Link href={link}>
        <p>
          {label}
          {icon && <FontAwesomeIcon icon={icon} />}
        </p>
      </Link>
    </li>
  );
}

export default function Navbar({}) {
  const [isHoveringOverShop, setIsHoveringOverShopButton] = useState(false);
  return (
    <div className="bg-ha-dirty-green">
      <div className="grid grid-cols-3 w-full text-ha-cream space-between align-middle">
        <div className="flex justify-end">
          <ul className="flex space-x-8">
            <NavbarMenuItems label="Home" link="/"/>
            <NavbarMenuItems
              label="Shop"
              onMouseOver={() => {
                setIsHoveringOverShopButton;
              }}
              link="/shop"
            />
          </ul>
        </div>

        <div className="flex justify-center h-[100px]">
          <Image
            width={150}
            height={200}
            src={"/images/Main logo_cropped.png"}
            alt={"Home"}
            onClick={() => {}}
            className="rounded-b-lg object-none"
          />
        </div>
        <div className="flex justify-start">
          <ul className="flex space-x-8">
            <NavbarMenuItems
            link="/cart"
              label="Cart"
              icon={faCartShopping}
              onClick={() => {}}
            />
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
