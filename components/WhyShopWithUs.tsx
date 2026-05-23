import { Truck, RefreshCcw, BadgeCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Lightning fast shipping on all orders",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
  {
    icon: BadgeCheck,
    title: "Authentic Products",
    description: "100% genuine and sourced from top brands",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Safe and encrypted checkout process",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="py-16 px-6 bg-sage/10 w-full">
      <div className="mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl text-espresso font-bold text-center mb-12">
          Why Shop With Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-cream border border-teal/20 flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-espresso mb-2">{feature.title}</h3>
              <p className="text-espresso/70 text-sm max-w-[200px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
