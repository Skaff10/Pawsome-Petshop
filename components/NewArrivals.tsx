import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function NewArrivals() {
  let newArrivals = products.filter((p) => p.badge === "New");
  if (newArrivals.length < 8) {
    const others = products.filter((p) => p.badge !== "New");
    newArrivals = [...newArrivals, ...others].slice(0, 8);
  } else {
    newArrivals = newArrivals.slice(0, 8);
  }
  
  // Force all items to be marked as New
  newArrivals = newArrivals.map(p => ({ ...p, badge: "New" }));

  return (
    <section className="py-16 bg-cream/30 w-full overflow-hidden">
      <div className="mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-espresso font-bold text-center mb-10">
          New Arrivals
        </h2>
        
        {/* Horizontally scrollable conainer */}
        <div className="flex mx-6  overflow-x-auto gap-20 pb-8 snap-x snap-mandatory scrollbar-hide items-center ">
          {newArrivals.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] sm:min-w-[300px] snap-center flex"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
