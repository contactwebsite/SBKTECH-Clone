import { MetadataRoute } from 'next'
import { getProductsFromGitHub, getBlogsFromGitHub } from '@/lib/github'

export const dynamic = 'force-dynamic'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://balencia-pr.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/catalogue`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/category/serrure-intelligente`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/category/coffre-fort`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/category/pointeuse-biometrique`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/category/tourniquet-tripode`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/category/controle-acces`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/category/controle-d-acces-porte`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/category/lecteurs-controle-d-acces`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/category/caisse`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/category/imprimante`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]

  let productPages: MetadataRoute.Sitemap = []
  let blogPages: MetadataRoute.Sitemap = []

  try {
    const products = await getProductsFromGitHub()
    productPages = products
      .filter((p: any) => (p.title || p.name || '').length >= 5 && (p.description || '').length >= 20)
      .map((p: any) => ({
        url: `${BASE_URL}/product/${p.slug}`,
        lastModified: new Date(p.publishedAt || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
  } catch {}

  try {
    const blogs = await getBlogsFromGitHub()
    blogPages = blogs
      .filter((b: any) => (b.title || '').length >= 10 && (b.content || '').length >= 100)
      .map((b: any) => ({
        url: `${BASE_URL}/blog/${b.slug}`,
        lastModified: new Date(b.publishedAt || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
  } catch {}

  return [...staticPages, ...productPages, ...blogPages]
}