"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center max-w-7xl mx-auto w-full">
        <h1 className="font-playfair text-4xl text-espresso font-bold mb-6">
          Your Cart 🛒
        </h1>
        <p className="font-nunito text-xl text-espresso mb-8">
          Your cart is empty! Start shopping 🐾
        </p>
        <Link
          href="/store"
          className="bg-terracotta text-white font-nunito font-bold text-lg px-8 py-3 rounded-full hover:bg-terracotta/90 transition-colors"
        >
          Go to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1">
      <h1 className="font-playfair text-4xl text-espresso font-bold mb-8">
        Your Cart 🛒
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="flex flex-col space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-espresso/5"
              >
                <div className="relative w-[80px] h-[80px] sm:w-[60px] sm:h-[60px] rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-playfair font-bold text-espresso text-lg leading-tight">
                    {item.product.name}
                  </h3>
                  <span className="font-nunito text-sm text-teal uppercase tracking-widest font-semibold block mt-1">
                    {item.product.pet}
                  </span>
                  <div className="font-nunito text-espresso mt-1">
                    ${item.product.price.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4 sm:mt-0">
                  <div className="flex items-center border border-espresso/20 rounded-full bg-cream overflow-hidden">
                    <button
                      onClick={() =>
                        updateQty(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center font-nunito text-espresso hover:bg-espresso/10 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-nunito font-bold text-sm text-espresso">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQty(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center font-nunito text-espresso hover:bg-espresso/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="font-nunito font-bold text-terracotta w-20 text-right">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-espresso/40 hover:text-terracotta transition-colors w-8 h-8 flex items-center justify-center text-xl"
                    title="Remove item"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Panel */}
        <div className="lg:w-[350px] shrink-0">
          <div className="bg-cream rounded-2xl p-6 border border-espresso/10 shadow-sm sticky top-6">
            <h2 className="font-playfair text-2xl font-bold text-espresso mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 font-nunito text-espresso mb-6 border-b border-espresso/10 pb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-teal font-semibold">Free 🎉</span>
              </div>
            </div>
            
            <div className="flex justify-between font-nunito font-bold text-xl text-espresso mb-8">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="block w-full text-center bg-terracotta text-white font-nunito font-bold text-lg py-3 rounded-full hover:bg-terracotta/90 transition-colors shadow-sm"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
