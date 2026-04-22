import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { getProductBySlug } from '@/lib/github';
import ProductPageClient from '@/components/product/ProductPageClient';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const githubProduct = await getProductBySlug(slug);
  const product = githubProduct || products.find((p) => p.slug === slug);
  if (!product) return { title: 'Produit non trouvé - BALENCIA' };
  const name = (product as any).name || (product as any).title;
  const image = (product as any).image || (product as any).images?.[0]?.url;
  return {
    title: `${name} | BALENCIA Smart Security`,
    description: `${product.description} - Découvrez la sécurité intelligente de luxe au Maroc avec BALENCIA.`,
    openGraph: {
      title: `${name} | BALENCIA`,
      description: product.description,
      images: [image],
    },
    alternates: { canonical: `https://balencia.ma/product/${product.slug}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const githubProduct = await getProductBySlug(slug);
  const localProduct = products.find((p) => p.slug === slug);
  const product = githubProduct || localProduct;
  if (!product) notFound();

  const name = (product as any).name || (product as any).title;
  const image = (product as any).image || (product as any).images?.[0]?.url;
  const oldPrice = (product as any).oldPrice || (product as any).old_price;

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    image: [image],
    description: product.description,
    brand: { '@type': 'Brand', name: 'BALENCIA' },
    offers: {
      '@type': 'Offer',
      url: `https://balencia.ma/product/${product.slug}`,
      priceCurrency: 'MAD',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient product={{ ...product, name, image, oldPrice } as any} />
    </>
  );
}
