"use client";

import { SetStateAction, useState } from "react";
import { CAROUSEL_IMAGE_PATHS } from "../constants";
import { triggerCbOnInterval } from "../utils";
import Image from "next/image";
import './Carousel.scss';
import classNames from "classnames";

interface ICarouselDots {

  setCarouselImageIndex: React.Dispatch<SetStateAction<number>>
}
function CarouselDot() {
  return <div className="bg-[#bbb]"></div>
}

export default function Carousel({}) {
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);
  triggerCbOnInterval(() => {
    setCarouselImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGE_PATHS.length);
  }, 5000);
  console.log(carouselImageIndex)
  const carouselImages = CAROUSEL_IMAGE_PATHS.map((path, index) => (
    <Image
      key={path}
      sizes="100vw"
      width={960}
      height={540}
      style={{
        width: "100%"
      }}
      className={classNames('fade', index !== carouselImageIndex ? 'hidden-slide' : 'active-slide'
      )}
      src={path}
      alt={"Home"}
      onClick={() => {}}
    />
  ));
  return <div className="w-full">{carouselImages}<div>{CAROUSEL_IMAGE_PATHS.map((path, index) => <div className="bg"></div>)}</div></div>;
}
