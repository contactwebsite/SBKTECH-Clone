import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { getProductBySlug } from '@/lib/github';
import ProductPageClient from '@/components/product/ProductPageClient';

export const dynamic = 'force-dynamic';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const githubProduct = await getProductBySlug(slug);
  const product = githubProduct || products.find((p) => p.slug === slug);
  if (!product) return { title: 'Produit non trouvé - BALENCIA' };
  const name = (product as any).name || (product as any).title;
  const image = (product as any).images?.[0]?.url || (product as any).image || '';
  return {
    title: `${name} | BALENCIA Smart Security`,
    description: `${(product as any).metaDescription || product.description} - Découvrez la sécurité intelligente de luxe au Maroc avec BALENCIA.`,
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
  const image = (product as any).images?.[0]?.url || (product as any).image || '';
  const oldPrice = (product as any).oldPrice || (product as any).old_price || 0;
  const images = (product as any).images || (image ? [{ url: image, alt: name }] : []);

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    image: images.map((i: any) => i.url),
    description: (product as any).metaDescription || product.description,
    brand: { '@type': 'Brand', name: 'BALENCIA' },
    offers: {
      '@type': 'Offer',
      url: `https://balencia.ma/product/${product.slug}`,
      priceCurrency: 'MAD',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (product as any).rating || 4.8,
      reviewCount: (product as any).reviewCount || 50,
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient product={{ 
        ...product, 
        name, 
        image,
        images,
        oldPrice,
        rating: (product as any).rating || 4.8,
        reviewCount: (product as any).reviewCount || 50,
        detailedDescription: (product as any).detailedDescription || '',
        features: (product as any).features || '',
        benefits: (product as any).benefits || '',
      } as any} />
    </>
  );
}
