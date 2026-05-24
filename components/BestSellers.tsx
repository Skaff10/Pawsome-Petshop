import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function BestSellers() {
  // Use products that are marked as Best Seller, fallback to others if not enough
  let bestSellers = products.filter((p) => p.badge === "Best Seller");
  if (bestSellers.length < 8) {
    const others = products.filter((p) => p.badge !== "Best Seller");
    bestSellers = [...bestSellers, ...others].slice(0, 8);
  } else {
    bestSellers = bestSellers.slice(0, 8);
  }

  return (
    <section className="py-16 bg-cream/50 w-full overflow-hidden">
      <div className="mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-espresso font-bold text-center mb-10">
          Best Sellers
        </h2>
        
        {/* Horizontally scrollable container */}
        <div className="flex mx-6 overflow-x-auto gap-20 pb-8 snap-x snap-mandatory scrollbar-hide items-stretch">
          {bestSellers.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] sm:min-w-[300px] snap-center  flex"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
