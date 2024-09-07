import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SERVER_ANNOUNCEMENTS } from "./constants";
import MessageBanner from "./advert-banner/MessageBanner";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import CartProvider from "./CartContext";
import Cart from "./components/cart/Cart";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hello, again.",
  description: "Cute little photo frames for every occassion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <MessageBanner messages={SERVER_ANNOUNCEMENTS} />
          <Navbar />
          {children}
          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
