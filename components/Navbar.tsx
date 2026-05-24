"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.svg";
import logoText from "@/public/text.svg";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const navItems = [
    { label: "Dogs", href: "/store?pet=dog" },
    { label: "Cats", href: "/store?pet=cat" },
    { label: "Store", href: "/store" },
    { label: "About", href: "/about" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/store?search=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8 relative z-50 bg-cream">
      {/* Mobile: Hamburger (Left) */}
      <div className="md:hidden flex items-center flex-1">
        <button
          aria-label="Menu"
          className="p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-espresso" />
          ) : (
            <Menu className="w-7 h-7 text-espresso" />
          )}
        </button>
      </div>

      {/* Desktop: Logo (Left), Mobile: Logo (Center) */}
      <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
        <Link
          href="/"
          className="flex flex-col p-1 gap-1 items-center md:items-start"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image src={logo} alt="logo" className="w-16 md:w-20 md:ml-5" />
          <Image src={logoText} alt="logoText" className="w-20 md:w-28 ml-1 md:ml-3" />
        </Link>
      </div>

      {/* Desktop: Navlist (Middle) */}
      <div className="hidden md:flex grow justify-center">
        <nav className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-semibold text-espresso/75 hover:text-espresso transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop: Search & Cart (Right), Mobile: Cart (Right) */}
      <div className="flex items-center justify-end space-x-5 md:space-x-8 grow md:flex-none">
        {/* Search Bar - Desktop Only */}
        <SearchBar />

        {/* Cart */}
        <div className="relative p-2 -mr-2">
          <Link href="/cart" aria-label="Cart">
            <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-espresso" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-terracotta text-white text-[10px] font-(--font-nunito) leading-none px-1">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream shadow-md md:hidden flex flex-col py-4 px-6 gap-4 border-t border-sage/30">
          <form onSubmit={handleSearch} className="flex items-center relative w-full mb-2">
            <input
              type="text"
              placeholder="Search store..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="placeholder:text-sm pl-11 pr-4 h-10 py-2 rounded-full border border-(--secondary) focus:border-(--primary_accent) focus:ring-1 focus:ring-(--secondary) focus:outline-none transition-colors duration-200 w-full text-base bg-white"
            />
            <button type="submit" className="absolute left-4">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </form>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-espresso hover:text-terracotta transition-colors py-2 border-b border-sage/20 last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
