import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoText from "@/public/text.svg";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <Link
              href="/"
              className="flex flex-col p-1 gap-1 items-center md:items-start"
            >
              <Image src={logo} alt="logo" className="w-16 md:w-20 ml-3 " />
              <Image src={logoText} alt="logoText" className="w-20 md:w-28" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-playfair text-xl font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2 font-nunito">
              <li>
                <Link
                  href="/"
                  className="hover:text-terracotta transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="hover:text-terracotta transition-colors"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-terracotta transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-playfair text-xl font-semibold mb-2">
              Contact
            </h3>
            <ul className="flex flex-col space-y-2 font-nunito">
              <li>
                <a
                  href="mailto:hello@pawsome.com"
                  className="hover:text-terracotta transition-colors"
                >
                  hello@pawsome.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="hover:text-terracotta transition-colors"
                >
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20 px-6 py-6 text-center">
        <p className="font-nunito text-sm text-cream/70">
          &copy; 2025 Pawsome Petshop. Made with 🐾 love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
