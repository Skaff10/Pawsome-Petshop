import logo from "@/public/logo.svg";
import logoText from "@/public/text.svg";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { label: "Dog", href: "#" },
    { label: "Cat", href: "#" },
    { label: "Services", href: "#" },
    { label: "Pawsome Picks", href: "#" },
  ];

  return (
    <nav className="h-10 md:h-12 flex items-center justify-between px-4 md:px-4">
      {/* Mobile: Hamburger (Left) */}
      <div className="md:hidden flex items-center flex-1">
        <button aria-label="Menu" className="p-2 -ml-2">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Desktop: Logo (Left), Mobile: Logo (Center) */}
      <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
        <Link
          href="/"
          className="flex flex-col p-1 gap-0.5 items-center md:items-start"
        >
          <Image src={logo} alt="logo" className="w-12 md:w-16" />
          <Image src={logoText} alt="logoText" className="w-16 md:w-20" />
        </Link>
      </div>

      {/* Desktop: Navlist (Middle) */}
      <div className="hidden md:flex grow justify-center">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop: Search & Cart (Right), Mobile: Cart (Right) */}
      <div className="flex items-center justify-end space-x-4 md:space-x-6 grow md:flex-none">
        {/* Search Bar - Desktop Only */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:text-xs pl-10 pr-4 h-7 py-2 rounded-full border border-(--secondary) focus:border-(--primary_accent) focus:ring-0.5 focus:ring-(--secondary) focus:outline-none transition-colors duration-200 w-48 lg:w-64 text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5" />
        </div>

        {/* Cart */}
        <button aria-label="Cart" className="p-2 -mr-2 relative">
          <ShoppingBag className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
