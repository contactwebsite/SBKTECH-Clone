import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      }
    ],
    sitemap: 'process.env.NEXT_PUBLIC_BASE_URL || 'https://balencia-pr.vercel.app'/sitemap.xml',
    host: 'process.env.NEXT_PUBLIC_BASE_URL || 'https://balencia-pr.vercel.app'',
  }
}
