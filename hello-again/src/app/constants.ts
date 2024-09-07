export const SERVER_ANNOUNCEMENTS: string[] = [
  "Promotion is ongoing for May! 50% discount on every second item that you purchase!",
  "Surprise your mother this coming mother's day with our special frames, fully customizable!",
];

export interface IProductInformation {
  name: string;
  label: string;
  price: number; // in cents, sgd
  previews: string[];
  description: string;
}
export const PRODUCTS_INFORMATION: IProductInformation[] = [
  {
    name: "always",
    label: "Always",
    price: 1500,
    previews: [
      "/images/Always/0.JPG",
      "/images/Always/1.JPG",
      "/images/Always/Always.JPG",
    ],
    description:
      "Hand-assembled with care, say congratulations to somebody you love with a dried flower bouquet and graduation bear to celebrate the milestone.",
  },
  {
    name: "timeless-classic",
    label: "Timeless: Classic",
    price: 3190,
    previews: ["/images/Timeless 1.0/Timeless 1.0.JPG"],
    description:
      "Hand-assembled with care, say congratulations to somebody you love with a dried flower bouquet and graduation bear to celebrate the milestone.",
  },
  {
    name: "timeless-ageless",
    label: "Timeless: Ageless",
    price: 3190,
    previews: [
      "/images/Timeless 1.1/Timeless 1.1.JPG",
      "/images/Timeless 1.1/0.JPG",
      "/images/Timeless 1.1/1.JPG",
    ],
    description:
      "Hand-assembled with care, say congratulations to somebody you love with a dried flower bouquet and graduation bear to celebrate the milestone.",
  },
  {
    name: "a-collection",
    label: "A Collection",
    price: 4990,
    previews: [
      "/images/Collection/0.JPG",
      "/images/Collection/1.JPG",
      "/images/Collection/2.JPG",
    ],
    description:
      "Hand-assembled with care, say congratulations to somebody you love with a dried flower bouquet and graduation bear to celebrate the milestone.",
  },
  {
    name: "genesis",
    label: "Genesis",
    price: 3990,
    previews: [
      "/images/Classic 1.0/Classic 1.0.JPG",
      "/images/Classic 1.0/0.JPG",
      "/images/Classic 1.0/1.JPG",
    ],
    description:
      "Hand-assembled with care, say congratulations to somebody you love with a dried flower bouquet and graduation bear to celebrate the milestone.",
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
