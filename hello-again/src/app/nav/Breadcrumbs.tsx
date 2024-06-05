import Link from "next/link";
import { ReactNode } from "react";

interface IBreadcrumbs {
  crumbs: string[];
}
export default function Breadcrumbs({ crumbs }: IBreadcrumbs) {
  return (
    <div className="flex space-x-2 text-sm">
      {crumbs.reduce((crumbAccumulator, currentCrumb, index) => {
        return [
          ...crumbAccumulator,
          ,
          <Link key={`crumb-${currentCrumb}`} href={`/${crumbs.join("/")}`}>
            <p className="uppercase">{currentCrumb}</p>
          </Link>,
          index < crumbs.length - 1 && <p>/</p>,
        ];
      }, [] as ReactNode[])}
    </div>
  );
}
