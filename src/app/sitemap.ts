import { MetadataRoute } from 'next'
import { getProductsFromGitHub, getBlogsFromGitHub } from '@/lib/github'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://balencia-pr.vercel.app'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/catalogue`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/category/serrure-intelligente`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/category/coffre-fort`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/category/pointeuse-biometrique`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/category/tourniquet-tripode`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/category/controle-acces`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/category/controle-d-acces-porte`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/category/lecteurs-controle-d-acces`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/category/caisse`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/category/imprimante`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]

  let productPages: MetadataRoute.Sitemap = []
  let blogPages: MetadataRoute.Sitemap = []

  try {
    const products = await getProductsFromGitHub()
    productPages = products.map((p: any) => ({
      url: `${baseUrl}/product/${p.slug}`,
      lastModified: new Date(p.publishedAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch {}

  try {
    const blogs = await getBlogsFromGitHub()
    blogPages = blogs.map((b: any) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: new Date(b.publishedAt || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {}

  return [...staticPages, ...productPages, ...blogPages]
}
