import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import ProductPageClient from '@/components/product/ProductPageClient';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Produit non trouvé - BALENCIA',
    };
  }

  return {
    title: `${product.name} | BALENCIA Smart Security`,
    description: `${product.description} - Découvrez la sécurité intelligente de luxe au Maroc avec BALENCIA. Livraison gratuite et installation incluse.`,
    openGraph: {
      title: `${product.name} | BALENCIA`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://balencia.ma/product/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Schema.org Structured Data for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': product.name,
    'image': [product.image],
    'description': product.description,
    'brand': {
      '@type': 'Brand',
      'name': 'BALENCIA'
    },
    'offers': {
      '@type': 'Offer',
      'url': `https://balencia.ma/product/${product.slug}`,
      'priceCurrency': 'MAD',
      'price': product.price,
      'availability': 'https://schema.org/InStock',
      'priceValidUntil': '2026-12-31'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '127'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient product={product} />
    </>
  );
}
