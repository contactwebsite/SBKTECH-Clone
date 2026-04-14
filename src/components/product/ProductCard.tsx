import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white flex flex-col group">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[3/4] bg-gray-50 mb-4 overflow-hidden">
        <Image
          src={`https://placehold.co/300x400/ffffff/dddddd?text=${encodeURIComponent(product.name.split(' ')[0])}`}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
          🏷️ Economisez {product.discountPercentage.replace('Economisez ', '')}
        </div>
      </Link>

      <div className="flex flex-col items-center text-center">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-bold text-black mb-2 hover:underline line-clamp-2 px-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-bold text-black text-base">
            {product.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} dh
          </span>
          <span className="text-sm text-gray-500 line-through">
            {product.oldPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} dh
          </span>
        </div>
      </div>
    </article>
  );
}