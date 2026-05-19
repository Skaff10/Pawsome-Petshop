"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, totalPrice, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    country: "",
    postalCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCardBlurred, setIsCardBlurred] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      clearCart();
      router.push("/checkout/success");
    }
  };

  const getDisplayCardNumber = () => {
    if (isCardBlurred && formData.cardNumber.length >= 4) {
      const last4 = formData.cardNumber.slice(-4);
      return `**** **** **** ${last4}`;
    }
    return formData.cardNumber;
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center max-w-7xl mx-auto w-full">
        <h1 className="font-playfair text-3xl text-espresso font-bold mb-4">
          Your cart is empty
        </h1>
        <button
          onClick={() => router.push("/store")}
          className="bg-terracotta text-white font-nunito font-bold px-6 py-2 rounded-full"
        >
          Return to Store
        </button>
      </div>
    );
  }

  const InputField = ({ label, name, type = "text", onBlur }: any) => (
    <div className="flex flex-col mb-4">
      <label className="font-nunito text-espresso text-sm font-semibold mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={name === "cardNumber" ? getDisplayCardNumber() : (formData as any)[name]}
        onChange={handleChange}
        onFocus={() => {
          if (name === "cardNumber") setIsCardBlurred(false);
        }}
        onBlur={(e) => {
          if (name === "cardNumber") setIsCardBlurred(true);
          if (onBlur) onBlur(e);
        }}
        className={`border p-3 rounded-lg font-nunito outline-none transition-colors ${
          errors[name] ? "border-terracotta" : "border-espresso/20 focus:border-teal"
        }`}
      />
      {errors[name] && (
        <span className="text-terracotta text-xs mt-1 font-nunito">
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1">
      <h1 className="font-playfair text-4xl text-espresso font-bold mb-8">
        Checkout
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form Column */}
        <div className="flex-1">
          <form id="checkout-form" onSubmit={handleSubmit} className="bg-cream rounded-2xl p-6 md:p-8 shadow-sm border border-espresso/5">
            <h2 className="font-playfair text-2xl font-bold text-espresso mb-6">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div className="md:col-span-2">
                <InputField label="Full Name" name="fullName" />
              </div>
              <InputField label="Email Address" name="email" type="email" />
              <InputField label="Phone Number" name="phone" type="tel" />
            </div>

            <h2 className="font-playfair text-2xl font-bold text-espresso mt-8 mb-6">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div className="md:col-span-2">
                <InputField label="Street Address" name="street" />
              </div>
              <InputField label="City" name="city" />
              <InputField label="Country" name="country" />
              <InputField label="Postal Code" name="postalCode" />
            </div>

            <h2 className="font-playfair text-2xl font-bold text-espresso mt-8 mb-6">
              Payment Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div className="md:col-span-2">
                <InputField label="Card Number" name="cardNumber" />
              </div>
              <InputField label="Expiry (MM/YY)" name="expiry" />
              <InputField label="CVV" name="cvv" type="password" />
            </div>
          </form>
        </div>

        {/* Order Summary Column */}
        <div className="lg:w-[400px] shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-espresso/5 sticky top-6">
            <h2 className="font-playfair text-2xl font-bold text-espresso mb-6 border-b border-espresso/10 pb-4">
              Order Summary
            </h2>
            
            <div className="flex flex-col space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 bg-cream">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="font-playfair font-semibold text-espresso text-sm line-clamp-1">
                      {item.product.name}
                    </span>
                    <span className="font-nunito text-xs text-espresso/60">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  <div className="font-nunito font-bold text-sm text-espresso flex items-center">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 font-nunito text-sm text-espresso mb-6 border-t border-espresso/10 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-teal font-semibold">Free 🎉</span>
              </div>
            </div>

            <div className="flex justify-between font-nunito font-bold text-2xl text-espresso mb-8">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="w-full text-center bg-terracotta text-white font-nunito font-bold text-lg py-3.5 rounded-full hover:bg-terracotta/90 transition-colors shadow-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
