
import Hero from '@/components/sections/Hero';
import FeaturesBar from '@/components/sections/FeaturesBar';
import TrustSection from '@/components/sections/TrustSection';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/app/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Home() {
  const categories = ['Serrure intelligente', 'Pointeuse biométrique', 'Coffre Fort'];

  return (
    <div className="space-y-0">
      <Hero />
      <FeaturesBar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {categories.map((category) => {
            const filteredProducts = products.filter(p => p.category === category);
            return (
              <div key={category} className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl font-bold">{category}</h2>
                    <p className="text-muted-foreground">Découvrez notre gamme sélectionnée de {category.toLowerCase()} haute performance.</p>
                  </div>
                  <Button variant="link" className="text-primary font-bold p-0 h-auto text-lg group" asChild>
                    <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                      Voir tout <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TrustSection />

      {/* Video Reviews Section */}
      <section className="py-20 lg:py-32 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Ils nous font <span className="text-primary">confiance</span></h2>
            <p className="text-muted-foreground text-lg">Découvrez les témoignages de nos clients en vidéo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-muted border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110 cursor-pointer">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                  <p className="font-bold text-white">Installation Client #{i}</p>
                  <p className="text-xs text-white/70">Casablanca, Maroc</p>
                </div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: `url(https://picsum.photos/seed/review${i}/400/800)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
