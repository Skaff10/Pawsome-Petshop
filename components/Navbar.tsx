"use client";

import logo from "@/public/logo.svg";
import logoText from "@/public/text.svg";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const navItems = [
    { label: "Dogs", href: "/store?pet=dog" },
    { label: "Cats", href: "/store?pet=cat" },
    { label: "Store", href: "/store" },
    { label: "Pawsome Picks", href: "/store" },
  ];

  return (
    <nav className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8">
      {/* Mobile: Hamburger (Left) */}
      <div className="md:hidden flex items-center flex-1">
        <button aria-label="Menu" className="p-2 -ml-2">
          <Menu className="w-7 h-7 text-gray-700" />
        </button>
      </div>

      {/* Desktop: Logo (Left), Mobile: Logo (Center) */}
      <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
        <Link
          href="/"
          className="flex flex-col p-1 gap-1 items-center md:items-start"
        >
          <Image src={logo} alt="logo" className="w-16 md:w-20 ml-3 " />
          <Image src={logoText} alt="logoText" className="w-20 md:w-28" />
        </Link>
      </div>

      {/* Desktop: Navlist (Middle) */}
      <div className="hidden md:flex grow justify-center">
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-semibold text-foreground/75 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop: Search & Cart (Right), Mobile: Cart (Right) */}
      <div className="flex items-center justify-end space-x-5 md:space-x-8 grow md:flex-none">
        {/* Search Bar - Desktop Only */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:text-sm pl-11 pr-4 h-10 py-2 rounded-full border border-(--secondary) focus:border-(--primary_accent) focus:ring-1 focus:ring-(--secondary) focus:outline-none transition-colors duration-200 w-56 lg:w-72 text-base"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4" />
        </div>

        {/* Cart */}
        <div className="relative p-2 -mr-2">
          <Link href="/cart" aria-label="Cart">
            <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-terracotta text-white text-[10px] font-(--font-nunito) leading-none px-1">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
