import { MetadataRoute } from 'next';
import { products } from '@/app/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balencia.ma';

  // Routes statiques et catégories
  const staticRoutes = [
    '',
    '/catalogue',
    '/category/serrure-intelligente',
    '/category/coffre-fort',
    '/category/pointeuse-biometrique',
    '/category/controle-d-acces-porte',
    '/category/lecteurs-controle-d-acces',
    '/category/controle-acces',
    '/category/caisse',
    '/category/imprimante',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Routes dynamiques des produits (Indexation Prioritaire)
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
