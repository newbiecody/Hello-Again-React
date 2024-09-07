import Catalog from "../showroom/Catalog";
import Breadcrumbs from "../nav/Breadcrumbs";

export default function Homepage() {
  return (
    <div className="grid place-items-center w-full">
      <div className="w-[80%]">
        <div className="py-4">
          <Breadcrumbs crumbs={["shop"]} />
        </div>
        <div className="pb-4">
          <Catalog />
        </div>
      </div>
    </div>
  );
}
