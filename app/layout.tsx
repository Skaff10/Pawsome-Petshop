import type { Metadata } from "next";
import { Nunito, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import PromoTop from "@/components/promoTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { ToastRenderer } from "@/components/ToastRenderer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pawsome",
  description:
    "Welcome to Pawsome Petshop. Where every pet finds its perfect match.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", nunito.variable, playfairDisplay.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <PromoTop />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <ToastRenderer />
        </CartProvider>
      </body>
    </html>
  );
}
