import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    quote: "Absolutely love the quality! My order arrived faster than expected and the customer service was fantastic.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    quote: "The best online shopping experience I've had in a long time. Will definitely be ordering from here again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    quote: "Great selection of products and the website is so easy to use. The items look exactly like the pictures.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-cream/30 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-espresso font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-sage/20 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-terracotta fill-terracotta" : "text-sage/30"}`} 
                  />
                ))}
              </div>
              <p className="text-espresso/80 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-bold text-espresso">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
