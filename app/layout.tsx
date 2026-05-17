import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import PromoTop from "@/components/promoTop";

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
      className={`${nunito.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PromoTop />
        {children}
      </body>
    </html>
  );
}
