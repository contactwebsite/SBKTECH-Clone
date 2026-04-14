import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white flex flex-col group cursor-pointer">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[3/4] bg-gray-50 mb-4 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter z-10 animate-pulse">
          🏷️ Economisez {product.discountPercentage}
        </div>
      </Link>

      <div className="flex flex-col items-center text-center px-2">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-bold text-black mb-2 transition-colors duration-300 group-hover:text-gray-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-bold text-black text-sm">
            {product.price.toLocaleString('fr-FR')} dh
          </span>
          <span className="text-xs text-gray-500 line-through">
            {product.oldPrice.toLocaleString('fr-FR')} dh
          </span>
        </div>
      </div>
    </article>
  );
}
