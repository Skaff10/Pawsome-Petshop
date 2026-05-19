"use client";

import { useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

interface CartToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export const CartToast = ({ message, visible, onClose }: CartToastProps) => {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out
        bg-[#2C1A0E] text-[#F0EBD8]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ShoppingBag className="w-5 h-5 text-[#E07B54] shrink-0" />
      <span className="text-sm font-semibold font-[var(--font-nunito)]">{message}</span>
      <button
        onClick={onClose}
        className="ml-1 p-0.5 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
