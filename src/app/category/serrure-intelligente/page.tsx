
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/app/data/products';
import { motion } from 'framer-motion';

export default function PoigneeDigitalPage() {
  const categoryProducts = products.filter(p => p.category === 'Serrure intelligente');

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24 bg-white">
        {/* Minimalist Header */}
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-black"
          >
            Poignées Digitales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 mt-4 text-sm font-medium tracking-wide"
          >
            La sécurité redéfinie pour votre espace.
          </motion.p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {categoryProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/product/${product.slug}`} className="group cursor-pointer flex flex-col">
                {/* Image wrapper */}
                <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden rounded-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    data-ai-hint="luxury smart lock"
                  />
                  
                  {/* The Trillion-Dollar Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase py-5 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
                    Découvrir
                  </div>
                </div>

                {/* Text wrapper below image */}
                <div className="mt-8 text-center px-2">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-black mb-2 leading-relaxed h-8 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[13px] font-black tracking-[0.1em] text-black">
                      {product.price.toLocaleString('fr-FR')} DH
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium line-through tracking-wider">
                      {product.oldPrice.toLocaleString('fr-FR')} DH
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luxury Footer Note */}
      <section className="py-24 border-t border-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <span className="text-[9px] font-black tracking-[0.4em] text-gray-400 uppercase mb-6 block">
            BALENCIA EXCELLENCE
          </span>
          <p className="text-sm text-gray-500 leading-relaxed font-light italic">
            "Chaque détail est pensé pour fusionner la haute sécurité technologique avec l'élégance architecturale de votre demeure."
          </p>
        </div>
      </section>
    </div>
  );
}
