"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => setQuantity((q) => q + 1);
  const handleSub = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-terracotta" : "text-espresso/20"}
      >
        ★
      </span>
    ));
  };

  const getBadgeColor = (badge: string) => {
    if (badge === "Best Seller") return "bg-teal text-white";
    return "bg-terracotta text-white";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1">
      <Link
        href="/store"
        className="font-nunito text-teal hover:underline mb-8 inline-block"
      >
        &larr; Back to Store
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden bg-white shadow-sm shadow-espresso/10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          {product.badge && (
            <div className="mb-4">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-nunito font-bold uppercase tracking-wider ${getBadgeColor(
                  product.badge
                )}`}
              >
                {product.badge}
              </span>
            </div>
          )}

          <h1 className="font-playfair text-3xl md:text-5xl text-espresso font-bold mb-2">
            {product.name}
          </h1>

          <span className="font-nunito text-sm text-teal uppercase tracking-widest font-semibold mb-4 block">
            {product.pet}
          </span>

          <div className="flex items-center space-x-2 mb-6 text-lg">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-espresso/60 font-nunito text-sm">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-baseline space-x-4 mb-6">
            <span className="font-nunito font-bold text-4xl text-terracotta">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-nunito text-xl text-espresso/40 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="font-nunito text-espresso leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="flex items-center space-x-6 mt-auto">
            <div className="flex items-center border-2 border-espresso/10 rounded-full bg-cream">
              <button
                onClick={handleSub}
                className="w-12 h-12 flex items-center justify-center font-nunito text-xl text-espresso hover:text-terracotta transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 text-center font-nunito font-bold text-lg text-espresso">
                {quantity}
              </span>
              <button
                onClick={handleAdd}
                className="w-12 h-12 flex items-center justify-center font-nunito text-xl text-espresso hover:text-terracotta transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                addToCart(product, quantity);
                // Optional: Provide feedback like a toast here
              }}
              className="flex-1 bg-terracotta text-white font-nunito font-bold text-lg py-3 rounded-full hover:bg-terracotta/90 transition-colors shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
