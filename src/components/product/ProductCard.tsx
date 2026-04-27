"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.find((i: any) => i.slug === product.slug);
    if (exists) {
      exists.quantity = (exists.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#F7F7F7] overflow-hidden mb-5 flex items-center justify-center p-6 transition-colors duration-500 group-hover:bg-[#F0F0F0]">
        
        <Link href={`/product/${product.slug}`} className="absolute inset-0 z-0" />

        {/* Product Image */}
        <div className="relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 mix-blend-multiply pointer-events-none">
          <Image
            src={(product as any).images?.[0]?.url || product.image || "https://placehold.co/400x500"}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
            data-ai-hint="luxury product"
          />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm z-10 pointer-events-none">
          <span className="text-[9px] font-black tracking-[0.2em] text-black uppercase">
            Economisez {product.discountPercentage}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 py-3.5 text-[10px] font-bold tracking-[0.25em] uppercase text-center opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0 z-20 cursor-pointer border-0"
          style={{ background: added ? '#16a34a' : 'black', color: 'white' }}
        >
          {added ? '✓ Ajouté !' : 'Ajouter au panier'}
        </button>
      </div>

      {/* Text Area */}
      <Link href={`/product/${product.slug}`} className="flex flex-col items-center text-center px-2">
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
      </Link>
    </div>
  );
}
