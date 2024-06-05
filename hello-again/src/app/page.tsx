// import Image from "next/image";

import Carousel from "./showroom/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <Carousel />
      </div>
    </main>
  );
}
