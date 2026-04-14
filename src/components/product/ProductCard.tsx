import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white border border-gray-100 flex flex-col h-full group">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          data-ai-hint="security tech"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 flex items-center gap-1">
          <span>🏷️</span> Economisez {product.discountPercentage.replace('Economisez ', '')}
        </div>
      </Link>

      <div className="p-4 flex flex-col items-center text-center mt-2">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="font-bold text-black">{product.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} dh</span>
          <span className="text-sm text-gray-400 line-through">
            {product.oldPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} dh
          </span>
        </div>
      </div>
    </article>
  );
}