import Hero from '@/components/sections/Hero';
import FeaturesBar from '@/components/sections/FeaturesBar';
import TrustSection from '@/components/sections/TrustSection';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/app/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  // Use only 4 products for the grid as requested
  const serrureProducts = products.filter(p => p.category === 'Serrure intelligente').slice(0, 4);

  return (
    <div className="bg-white">
      <Hero />
      <FeaturesBar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-tight">
            Serrure intelligente
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {serrureProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              asChild
              className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-none uppercase text-sm font-bold tracking-widest"
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