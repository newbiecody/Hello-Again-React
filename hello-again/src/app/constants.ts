export const SERVER_ANNOUNCEMENTS: string[] = [
  "Promotion is ongoing for May! 50% discount on every second item that you purchase!",
  "Surprise your mother this coming mother's day with our special frames, fully customizable!",
];

export const PRODUCTS_INFORMATION: {
  productId: string;
  label: string;
  price: number; // in cents, sgd
  previews: // {path: string, type: 'image' | 'video'}[] |
  string[];
}[] = [
  {
    productId: "27dcd317-7498-4fff-81b2-1309c7451444",
    label: "Always",
    price: 1500,
    previews: [
      "/images/Always/0.JPG",
      "/images/Always/1.JPG",
      "/images/Always/Always.JPG",
    ],
  },
  {
    productId: "0308499c-e7ac-4f09-86b7-db9a2fe36141",
    label: "Timeless: Classic",
    price: 3190,
    previews: ["/images/Timeless 1.0/Timeless 1.0.JPG"],
  },
  {
    productId: "0072e84f-d5f3-4125-b876-9ae5631ddc24",
    label: "Timeless: Ageless",
    price: 3190,
    previews: [
      "/images/Timeless 1.1/Timeless 1.1.JPG",
      "/images/Timeless 1.1/0.JPG",
      "/images/Timeless 1.1/1.JPG",
    ],
  },
  {
    productId: "de0e20af-7869-41d0-a2c4-11a43b355801",
    label: "A Collection",
    price: 4990,
    previews: [
      "/images/Collection/0.JPG",
      "/images/Collection/1.JPG",
      "/images/Collection/2.JPG",
    ],
  },
  {
    productId: "15bdb5c8-c010-47c5-ac47-e1ac3eedd9a0",
    label: "Genesis",
    price: 3990,
    previews: [
      "/images/Classic 1.0/Classic 1.0.JPG",
      "/images/Classic 1.0/0.JPG",
      "/images/Classic 1.0/1.JPG",
    ],
  },
];

export const CAROUSEL_IMAGE_PATHS = [
  "/images/carousel/0.JPG",
  "/images/carousel/1.JPG",
  "/images/carousel/2.JPG",
  "/images/carousel/3.JPG",
  "/images/carousel/4.JPG",
  "/images/carousel/5.JPG",
  "/images/carousel/6.JPG",
  "/images/carousel/7.JPG",
  "/images/carousel/8.JPG",
  "/images/carousel/9.JPG",
  "/images/carousel/10.JPG",
  "/images/carousel/11.JPG",
  "/images/carousel/12.JPG",
  "/images/carousel/13.JPG",
  "/images/carousel/14.JPG",
];
