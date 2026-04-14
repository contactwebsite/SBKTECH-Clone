
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col bg-card rounded-xl overflow-hidden border transition-all hover:shadow-2xl hover:border-primary/50">
      <Link href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint="security tech"
        />
        <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-700 font-bold px-3 py-1">
          🏷️ {product.discountPercentage}
        </Badge>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-bold leading-tight line-clamp-2 hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">({product.rating})</span>
        </div>

        <div className="mt-auto flex items-baseline gap-3">
          <span className="text-xl font-bold text-primary">{product.price.toLocaleString()} MAD</span>
          <span className="text-sm text-muted-foreground line-through decoration-red-500/50">
            {product.oldPrice.toLocaleString()} MAD
          </span>
        </div>
      </div>
    </article>
  );
}
