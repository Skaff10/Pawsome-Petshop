"use client";
import { useCart } from "@/context/CartContext";
import { CartToast } from "./CartToast";

export const ToastRenderer = () => {
  const { toast, hideToast } = useCart();
  return <CartToast message={toast.message} visible={toast.visible} onClose={hideToast} />;
};
