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
    sitemap: 'https://balencia-pr.vercel.app/sitemap.xml',
    host: 'https://balencia-pr.vercel.app',
  }
}
