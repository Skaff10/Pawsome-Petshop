import { products } from "@/lib/products";
import ProductClient from "./ProductClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center p-12">
        <h1 className="font-playfair text-3xl text-espresso">
          Product not found
        </h1>
      </div>
    );
  }

  return <ProductClient product={product} />;
}
