"use client";

import { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-teal text-cream w-full relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="mx-auto text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-cream/80 text-lg mb-8 max-w-xl mx-auto">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 rounded-full bg-cream text-espresso placeholder:text-espresso/50 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
