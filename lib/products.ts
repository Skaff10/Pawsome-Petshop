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

export const products: Product[] = [
  {
    id: "prod_001",
    name: "Organic Cat Treats",
    pet: "cat",
    price: 12.99,
    originalPrice: 15.99,
    image: "/placeholder-product.jpg",
    rating: 5,
    reviewCount: 128,
    badge: "Sale",
    description: "Delicious and healthy organic treats for your feline friend. Made with real salmon."
  },
  {
    id: "prod_002",
    name: "Interactive Feather Wand",
    pet: "cat",
    price: 8.50,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 89,
    badge: "Best Seller",
    description: "Keep your cat entertained for hours with this durable and interactive feather wand."
  },
  {
    id: "prod_003",
    name: "Premium Dog Kibble",
    pet: "dog",
    price: 45.00,
    image: "/placeholder-product.jpg",
    rating: 5,
    reviewCount: 342,
    description: "Nutrient-rich premium kibble designed for adult dogs of all sizes."
  },
  {
    id: "prod_004",
    name: "Indestructible Chew Toy",
    pet: "dog",
    price: 14.99,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 215,
    badge: "New",
    description: "Tough enough for the most aggressive chewers. Safe and non-toxic."
  },
  {
    id: "prod_005",
    name: "Tropical Fish Flakes",
    pet: "fish",
    price: 7.99,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 45,
    description: "Color-enhancing tropical fish flakes that provide a complete and balanced diet."
  },
  {
    id: "prod_006",
    name: "Hamster Exercise Wheel",
    pet: "ham",
    price: 18.99,
    originalPrice: 22.99,
    image: "/placeholder-product.jpg",
    rating: 5,
    reviewCount: 67,
    badge: "Sale",
    description: "Silent spinner exercise wheel for hamsters, mice, and gerbils."
  },
  {
    id: "prod_007",
    name: "Bird Seed Mix",
    pet: "bird",
    price: 11.50,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 112,
    description: "Premium blend of seeds and nuts perfect for parrots, cockatiels, and other pet birds."
  },
  {
    id: "prod_008",
    name: "Turtle Basking Platform",
    pet: "turtle",
    price: 24.99,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 38,
    badge: "New",
    description: "Floating basking platform that adjusts to water level for your aquatic turtle."
  },
  {
    id: "prod_009",
    name: "Luxury Cat Bed",
    pet: "cat",
    price: 34.99,
    image: "/placeholder-product.jpg",
    rating: 5,
    reviewCount: 210,
    description: "Ultra-soft plush bed for ultimate comfort and warmth for your cat."
  },
  {
    id: "prod_010",
    name: "Dog Training Pads",
    pet: "dog",
    price: 19.99,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 520,
    badge: "Best Seller",
    description: "Super absorbent, leak-proof training pads for puppies."
  },
  {
    id: "prod_011",
    name: "Aquarium Water Conditioner",
    pet: "fish",
    price: 9.99,
    image: "/placeholder-product.jpg",
    rating: 5,
    reviewCount: 156,
    description: "Makes tap water safe for fish instantly by removing chlorine and heavy metals."
  },
  {
    id: "prod_012",
    name: "Wooden Bird Toy",
    pet: "bird",
    price: 13.99,
    image: "/placeholder-product.jpg",
    rating: 4,
    reviewCount: 88,
    description: "Colorful wooden chew toy to keep your bird active and entertained."
  }
];
