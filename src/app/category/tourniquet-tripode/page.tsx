import Image from 'next/image';
import Link from 'next/link';
import { products as localProducts } from '@/app/data/products';
import { getProductsFromGitHub } from '@/lib/github';
import AddToCartButton from '@/components/product/AddToCartButton';

export const dynamic = 'force-dynamic';

export default async function CategoryPage() {
  const githubProducts = await getProductsFromGitHub();
  const allProducts = githubProducts.length > 0
    ? [...githubProducts, ...localProducts]
    : localProducts;
  const cat = "Tourniquet tripode";
  const categoryProducts = allProducts.filter((p: any) => p.category === cat);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <header className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-black">
            {cat}
          </h1>
          <p className="text-gray-500 mt-4 text-sm font-medium tracking-wide">
            Découvrez notre collection.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {categoryProducts.map((product: any) => (
            <Link key={product.slug} href={`/product/${product.slug}`} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden rounded-sm">
                <Image
                  src={product.images?.[0]?.url || product.image || 'https://placehold.co/400x500'}
                  alt={product.images?.[0]?.alt || product.name || ''}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  unoptimized
                />
                <AddToCartButton slug={product.slug} />
              </div>
              <div className="mt-8 text-center px-2">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-black mb-2 leading-relaxed h-8 line-clamp-2">
                  {product.name || product.title}
                </h3>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[13px] font-black tracking-[0.1em] text-black">
                    {(product.price || 0).toLocaleString('fr-FR')} DH
                  </span>
                  {(product.oldPrice || 0) > 0 && (
                    <span className="text-[11px] text-gray-400 line-through">
                      {(product.oldPrice || 0).toLocaleString('fr-FR')} DH
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
          {categoryProducts.length === 0 && (
            <p className="text-gray-400 col-span-4 text-center py-20">
              Aucun produit dans cette catégorie.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
