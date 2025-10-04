import candleVanilla from "@/assets/candle-vanilla.jpg";
import candleLavender from "@/assets/candle-lavender.jpg";
import candleSandalwood from "@/assets/candle-sandalwood.jpg";
import candleRose from "@/assets/candle-rose.jpg";
import candleEucalyptus from "@/assets/candle-eucalyptus.jpg";
import candleCitrus from "@/assets/candle-citrus.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  scent: string;
  burnTime: string;
  size: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Vanilla Dream",
    price: 85.00,
    description: "A warm, comforting blend of Madagascar vanilla and cream",
    fullDescription: "Immerse yourself in the luxurious warmth of Madagascar vanilla beans blended with fresh cream. This candle creates a cozy atmosphere perfect for relaxation and unwinding after a long day. Hand-poured with premium soy wax and essential oils.",
    image: candleVanilla,
    category: "Sweet",
    scent: "Vanilla",
    burnTime: "40-50 hours",
    size: "8 oz",
  },
  {
    id: "2",
    name: "Lavender Bliss",
    price: 90.00,
    description: "Calming French lavender with subtle herbal notes",
    fullDescription: "Experience tranquility with our premium French lavender blend. Carefully crafted with organic lavender essential oil to promote relaxation and peaceful sleep. Perfect for meditation spaces and bedrooms.",
    image: candleLavender,
    category: "Floral",
    scent: "Lavender",
    burnTime: "45-55 hours",
    size: "8 oz",
  },
  {
    id: "3",
    name: "Sandalwood Serenity",
    price: 95.00,
    description: "Rich, woody sandalwood with amber undertones",
    fullDescription: "A sophisticated blend of Indian sandalwood and warm amber creates an earthy, grounding atmosphere. This luxurious candle is perfect for creating a spa-like ambiance in your home.",
    image: candleSandalwood,
    category: "Woody",
    scent: "Sandalwood",
    burnTime: "50-60 hours",
    size: "8 oz",
  },
  {
    id: "4",
    name: "Rose Garden",
    price: 88.00,
    description: "Delicate rose petals with hints of peony",
    fullDescription: "A romantic bouquet of fresh rose petals and soft peony blooms. This elegant candle brings the beauty of a blooming garden into your space with its sophisticated floral notes.",
    image: candleRose,
    category: "Floral",
    scent: "Rose",
    burnTime: "40-50 hours",
    size: "8 oz",
  },
  {
    id: "5",
    name: "Eucalyptus Mint",
    price: 85.00,
    description: "Refreshing eucalyptus with cool peppermint",
    fullDescription: "Invigorate your senses with the crisp, clean scent of eucalyptus paired with refreshing peppermint. Ideal for creating an energizing atmosphere in any room.",
    image: candleEucalyptus,
    category: "Fresh",
    scent: "Eucalyptus",
    burnTime: "45-55 hours",
    size: "8 oz",
  },
  {
    id: "6",
    name: "Citrus Grove",
    price: 82.00,
    description: "Bright blend of orange, lemon, and grapefruit",
    fullDescription: "A vibrant combination of sun-ripened citrus fruits that instantly uplifts and energizes. This cheerful candle is perfect for kitchens, living rooms, and workspaces.",
    image: candleCitrus,
    category: "Citrus",
    scent: "Citrus",
    burnTime: "40-50 hours",
    size: "8 oz",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
