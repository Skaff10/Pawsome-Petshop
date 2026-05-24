import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoText from "@/public/logo_text_white.svg";
const Footer = () => {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 py-7 min-h-[260px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: Brand + tagline + socials + back to top */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <Link href="/" className="flex flex-col gap-1 items-start w-fit">
              <Image src={logo} alt="logo" className="w-16 md:w-20 ml-1.5 md:ml-3" />
              <Image src={logoText} alt="logoText" className="w-20 md:w-28" />
            </Link>

            {/* Tagline */}
            <p className="font-nunito text-cream/70 text-sm max-w-xs leading-relaxed">
              Providing your pets with the finest care products, handpicked with
              love and expertise.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Twitter/X"
                className="text-cream/70 hover:text-terracotta transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/70 hover:text-terracotta transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/70 hover:text-terracotta transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

      
          </div>

          {/* RIGHT: Site Map + Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-start">
            {/* Site Map */}
            <div className="flex flex-col gap-4">
              <h3 className="font-playfair text-base font-semibold tracking-wide mb-2">
                Site Map
              </h3>
              <ul className="flex flex-col gap-3 font-nunito text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-cream underline underline-offset-4 hover:text-terracotta transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/store"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact / Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="font-playfair text-base font-semibold tracking-wide mb-2">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 font-nunito text-sm">
                <li>
                  <a
                    href="mailto:hello@pawsome.com"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    hello@pawsome.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18001234567"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    +1 (800) 123-4567
                  </a>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-cream/70 hover:text-terracotta transition-colors"
                  >
                    About
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20 px-6 py-5 text-center">
        <p className="font-nunito text-xs text-cream/50 tracking-wide">
          &copy; 2025 Pawsome Petshop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
