import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center max-w-2xl mx-auto w-full">
      <div className="bg-cream p-10 rounded-3xl shadow-sm border border-espresso/10 w-full flex flex-col items-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="font-playfair text-4xl md:text-5xl text-espresso font-bold mb-4">
          Order Placed!
        </h1>
        <p className="font-nunito text-lg text-espresso/80 mb-10 leading-relaxed">
          Thank you for shopping with Pawsome. Your furry (or scaly) friend is going to love it! 🐾
        </p>
        <Link
          href="/"
          className="bg-terracotta text-white font-nunito font-bold text-lg px-8 py-3.5 rounded-full hover:bg-terracotta/90 transition-colors shadow-sm inline-block w-full sm:w-auto"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
