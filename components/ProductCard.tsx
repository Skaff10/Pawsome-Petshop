"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

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
    <div className="bg-cream rounded-2xl shadow-sm shadow-espresso/10 p-4 relative flex flex-col h-full w-full border border-espresso/5 transition-all hover:scale-[1.02] hover:shadow-md hover:border-teal/30">
      {product.badge && (
        <span
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-nunito font-bold uppercase tracking-wider ${getBadgeColor(
            product.badge
          )}`}
        >
          {product.badge}
        </span>
      )}
      
      <div className="relative w-full h-[200px] mb-4 rounded-xl overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="font-nunito text-xs text-teal uppercase tracking-widest font-semibold mb-1">
          {product.pet}
        </span>
        <h3 className="font-playfair text-lg text-espresso font-semibold leading-tight mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-3 text-sm">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-espresso/60 font-nunito">({product.reviewCount})</span>
        </div>

        <div className="mt-auto mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="font-nunito font-bold text-xl text-terracotta">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-nunito text-sm text-espresso/40 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <Link
            href={`/product/${product.id}`}
            className="w-full text-center bg-terracotta text-white font-nunito font-bold py-2 rounded-full hover:bg-terracotta/90 transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full text-center bg-sage text-white font-nunito font-bold py-2 rounded-full hover:bg-sage/90 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
