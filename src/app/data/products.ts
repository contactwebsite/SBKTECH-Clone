export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discountPercentage: string;
  image: string;
  images?: { url: string; alt: string; }[];
  rating: number;
  reviewCount?: number;
  description: string;
  metaDescription?: string;
  detailedDescription?: string;
  features: string;
  benefits: string;
}

export const products: Product[] = [];
