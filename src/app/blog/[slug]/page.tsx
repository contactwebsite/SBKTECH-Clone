import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogsFromGitHub } from '@/lib/github';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://bywet.info'

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'Article non trouvé - BALENCIA' };
  return {
    title: blog.title,
    description: blog.metaDescription || blog.content?.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      images: blog.images?.[0]?.url ? [blog.images[0].url] : [],
    },
    alternates: { canonical: `https://balencia.ma/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const relatedBlogs = (await getBlogsFromGitHub())
    .filter((b: any) => b.slug !== slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${'https://www.bywet.info'}/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${'https://www.bywet.info'}/blog/${slug}`
    },
    headline: blog.title,
    description: blog.metaDescription,
    image: blog.images?.[0]?.url || '',
    datePublished: blog.publishedAt,
    author: { '@type': 'Organization', name: 'BALENCIA Smart Security' },
    publisher: { '@type': 'Organization', name: 'BALENCIA', logo: '' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10">
            <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-black">{blog.title}</span>
          </nav>

          {/* Labels */}
          {blog.labels?.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-6">
              {(Array.isArray(blog.labels) ? blog.labels : blog.labels.split(',')).map((label: string, i: number) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 border border-gray-200 px-3 py-1">
                  {label.trim()}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-10 pb-6 border-b border-gray-100">
            <span>BALENCIA Smart Security</span>
            <span>•</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString('fr-FR', {day:'numeric', month:'long', year:'numeric'})}</span>
          </div>

          {/* Hero Image */}
          {blog.images?.[0]?.url && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-12">
              <Image
                src={blog.images[0].url}
                alt={blog.images[0].alt || blog.title}
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          )}

          {/* Content */}
          {blog.content && (
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed prose-img:rounded-sm prose-a:text-black prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/<h1/gi, "<h2").replace(/</h1>/gi, "</h2>") }}
            />
          )}

          {/* More Images */}
          {blog.images?.length > 1 && (
            <div className="grid grid-cols-2 gap-4 mt-12">
              {blog.images.slice(1).map((img: any, i: number) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image src={img.url} alt={img.alt || blog.title} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          )}

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
              ← Retour au Blog
            </Link>
          </div>

          {/* Related */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold uppercase tracking-[0.15em] text-black mb-8">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((b: any) => (
                  <Link key={b.slug} href={`/blog/${b.slug}`} className="group flex flex-col cursor-pointer">
                    <div className="relative aspect-[16/9] bg-gray-50 overflow-hidden rounded-sm mb-4">
                      {b.images?.[0]?.url ? (
                        <Image src={b.images[0].url} alt={b.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-300 text-2xl">📝</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-black group-hover:opacity-70 transition-opacity line-clamp-2">{b.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
