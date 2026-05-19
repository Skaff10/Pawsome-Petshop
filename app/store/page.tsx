"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const PET_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "cat", label: "Cats" },
  { id: "dog", label: "Dogs" },
  { id: "fish", label: "Fish" },
  { id: "bird", label: "Birds" },
  { id: "ham", label: "Hamsters" },
  { id: "turtle", label: "Turtles" },
];

function StoreContent() {
  const searchParams = useSearchParams();
  const petParam = searchParams.get("pet");
  
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (petParam && PET_CATEGORIES.some((c) => c.id === petParam)) {
      setActiveFilter(petParam);
    }
  }, [petParam]);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.pet === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 w-full">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-espresso text-center mb-8">
        Our Store
      </h1>

      {/* Filter Bar */}
      <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 hide-scrollbar justify-start md:justify-center">
        {PET_CATEGORIES.map((category) => {
          const isActive = activeFilter === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-nunito font-semibold transition-colors border ${
                isActive
                  ? "bg-terracotta text-white border-terracotta"
                  : "bg-cream text-espresso border-espresso/20 hover:border-espresso/50"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="font-nunito text-lg text-espresso/60">
            No products found for this category.
          </p>
        </div>
      )}
    </div>
  );
}

export default function StorePage() {
  return (
    <div className="flex-1">
      <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
        <StoreContent />
      </Suspense>
    </div>
  );
}
