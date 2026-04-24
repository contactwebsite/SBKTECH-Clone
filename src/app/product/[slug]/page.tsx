import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { getProductBySlug } from '@/lib/github';
import ProductPageClient from '@/components/product/ProductPageClient';

export const dynamic = 'force-dynamic';

const BASE_URL = 'process.env.NEXT_PUBLIC_BASE_URL || 'https://balencia-pr.vercel.app'';

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
  const description = (product as any).metaDescription || product.description;
  const price = product.price;
  const url = `${BASE_URL}/product/${product.slug}`;

  return {
    title: `${name} - Prix ${price} MAD`,
    description: `${description} - Achetez ${name} au Maroc. Livraison gratuite partout au Maroc. Paiement à la livraison.`,
    keywords: [name, 'serrure maroc', 'sécurité maroc', 'BALENCIA', (product as any).category || ''],
    openGraph: {
      type: 'website',
      url,
      title: `${name} | BALENCIA Smart Security`,
      description,
      images: [{ url: image, width: 800, height: 800, alt: name }],
      siteName: 'BALENCIA Smart Security',
      locale: 'fr_MA',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} - ${price} MAD`,
      description,
      images: [image],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
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
  const url = `${BASE_URL}/product/${product.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image: images.map((i: any) => i.url),
    description: (product as any).metaDescription || product.description,
    sku: product.slug,
    brand: { '@type': 'Brand', name: 'BALENCIA' },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'MAD',
      price: product.price,
      priceValidUntil: "2026-12-31",
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'BALENCIA Smart Security' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'MAD' },
        deliveryTime: { '@type': 'ShippingDeliveryTime', businessDays: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3 } },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (product as any).rating || 4.8,
      reviewCount: (product as any).reviewCount || 50,
      bestRating: 5,
      worstRating: 1,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Catalogue', item: `${BASE_URL}/catalogue` },
        { '@type': 'ListItem', position: 3, name, item: url },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
