"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IBreadCrumbs {
  crumbs: string[];
}
export default function BreadCrumbs({ crumbs }: IBreadCrumbs) {
  return (
    <div className="flex space-x-2 text-sm">
      {crumbs.reduce((crumbAccumulator, currentCrumb, index) => {
        return [
          ...crumbAccumulator,
          <Link
            key={`crumb-${currentCrumb}`}
            href={`/${crumbs.slice(0, index + 1).join("/")}`}
          >
            <p className="uppercase">{currentCrumb}</p>
          </Link>,
          index < crumbs.length - 1 && <p>/</p>,
        ];
      }, [] as ReactNode[])}
    </div>
  );
}
