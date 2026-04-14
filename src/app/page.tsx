import Hero from '@/components/sections/Hero';
import FeaturesBar from '@/components/sections/FeaturesBar';
import TrustSection from '@/components/sections/TrustSection';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/app/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  // Use exactly 4 products for the grid
  const displayProducts = products.filter(p => p.category === 'Serrure intelligente').slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <FeaturesBar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Serrure intelligente
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-4">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button 
              asChild
              className="bg-black hover:bg-gray-900 text-white px-10 py-6 rounded-none uppercase text-xs font-bold tracking-widest"
            >
              <Link href="/category/serrure-intelligente">
                Tout afficher
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustSection />
    </div>
  );
}