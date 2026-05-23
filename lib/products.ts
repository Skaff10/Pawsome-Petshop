import rawProducts from '../products.json';

export type Product = {
  id: string;
  name: string;
  pet: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
};

interface RawProduct {
  name?: string;
  image?: string;
  url?: string;
  price?: string;
  collection?: string;
}

const typedRawProducts = rawProducts as RawProduct[];

export const products: Product[] = typedRawProducts.map((p, index) => {
  const idSlug = p.url ? (p.url.split('/').pop() || `prod_${index}`) : `prod_${index}`;
  const uniqueId = `${idSlug}-${index}`;
  
  const priceString = p.price ? p.price.replace(/[^0-9.]/g, '') : "0";
  const price = parseFloat(priceString);
  
  // Deterministic fake data for ratings and reviews
  const rating = 3.5 + ((index % 4) * 0.5); // 3.5, 4.0, 4.5, 5.0
  const reviewCount = 5 + (index * 13) % 300;
  
  // Randomly assign badges to some products deterministically
  let badge;
  if (index % 15 === 0) badge = "Best Seller";
  else if (index % 23 === 0) badge = "Sale";
  else if (index % 42 === 0) badge = "New";
  
  return {
    id: uniqueId,
    name: p.name || 'Unknown Product',
    pet: p.collection || 'unknown',
    price: isNaN(price) ? 0 : price,
    image: p.image || '/placeholder-product.jpg',
    rating: rating > 5 ? 5 : rating,
    reviewCount: reviewCount,
    badge: badge,
    description: `High-quality ${p.collection || 'pet'} product. ${p.name}`
  };
});
