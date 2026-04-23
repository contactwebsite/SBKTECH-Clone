
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col cursor-pointer">
      {/* Image Container (Editorial Style) */}
      <div className="relative aspect-[4/5] bg-[#F7F7F7] overflow-hidden mb-5 flex items-center justify-center p-6 transition-colors duration-500 group-hover:bg-[#F0F0F0]">
        
        {/* Product Image with ultra-smooth zoom */}
        <div className="relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 mix-blend-multiply">
          <Image 
            src={(product as any).images?.[0]?.url || product.image || "https://placehold.co/400x500"} 
            alt={product.name} 
            fill
            className="object-cover"
            unoptimized
            data-ai-hint="luxury product"
          />
        </div>
        
        {/* 2026 Glassmorphism Discount Badge (No Emojis) */}
        <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm z-10">
          <span className="text-[9px] font-black tracking-[0.2em] text-black uppercase">
            Economisez {product.discountPercentage}
          </span>
        </div>

        {/* Hover Action Button (Slides up smoothly) */}
        <div className="absolute bottom-4 left-4 right-4 bg-black text-white py-3.5 text-[10px] font-bold tracking-[0.25em] uppercase text-center opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0 z-10">
          Découvrir
        </div>
      </div>

      {/* Typography Area (Minimalist) */}
      <div className="flex flex-col items-center text-center px-2">
        <h3 className="text-xs md:text-sm font-bold text-black tracking-wide mb-2 line-clamp-2 uppercase">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-black font-black text-sm tracking-widest">
            {product.price.toLocaleString('fr-FR')} dh
          </span>
          <span className="text-gray-400 text-xs font-medium line-through tracking-wider">
            {product.oldPrice.toLocaleString('fr-FR')} dh
          </span>
        </div>
      </div>
    </Link>
  );
}
