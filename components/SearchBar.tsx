"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Loader2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchProducts } from "@/hooks/useSearchProducts";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { results, isLoading } = useSearchProducts(query);

  const showDropdown = isOpen && query.length >= 2;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative hidden md:block w-56 lg:w-[400px]">
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="placeholder:text-sm pl-4 pr-10 h-10 py-2 rounded-full border border-(--secondary) focus:border-(--primary_accent) focus:ring-1 focus:ring-(--secondary) focus:outline-none transition-colors duration-200 w-full text-base bg-white"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button type="submit" className="p-1 hover:text-gray-600 transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Dropdown Overlay */}
      {showDropdown && (
        <div 
          ref={dropdownRef}
          className="absolute top-full left-0 mt-2 w-full lg:w-[400px] bg-white rounded-lg shadow-xl border border-gray-100 z-100 overflow-hidden"
        >
          {isLoading ? (
            <div className="flex justify-center items-center p-6 text-gray-400">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto">
              <ul className="flex flex-col">
                {results.map((product) => (
                  <li key={product.id} className="border-b border-gray-100 last:border-0">
                    <Link 
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 shrink-0 relative">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="rounded object-cover"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-sm text-gray-900 truncate">
                          {product.name}
                        </span>
                        <div className="flex items-center gap-2 text-sm">
                          {product.originalPrice ? (
                            <>
                              <span className="text-red-600 font-semibold">${product.price.toFixed(2)}</span>
                              <span className="text-gray-400 line-through text-xs">${product.originalPrice.toFixed(2)}</span>
                            </>
                          ) : (
                            <span className="text-red-600 font-semibold">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-3 border-t border-gray-100 bg-gray-50 text-center">
                <Link 
                  href={`/search?q=${encodeURIComponent(query)}`}
                  className="text-sm font-semibold text-espresso hover:text-terracotta transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  See all results
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-gray-500">
              No products found for &apos;{query}&apos;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
