import Image from 'next/image';
import Link from 'next/link';
import { getBlogsFromGitHub } from '@/lib/github';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const blogs = await getBlogsFromGitHub();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-black">
            BLOG & ACTUALITÉS
          </h1>
          <p className="text-gray-500 mt-4 text-sm font-medium tracking-wide">
            Conseils, guides et actualités sur la sécurité intelligente.
          </p>
        </header>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Aucun article disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog: any) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group flex flex-col cursor-pointer">
                <div className="relative aspect-[16/9] bg-gray-50 overflow-hidden rounded-sm mb-6">
                  {blog.images?.[0]?.url ? (
                    <Image
                      src={blog.images[0].url}
                      alt={blog.images[0].alt || blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-300 text-4xl">📝</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  {blog.labels?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mb-3">
                      {(Array.isArray(blog.labels) ? blog.labels : blog.labels.split(',')).slice(0,2).map((label: string, i: number) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 border border-gray-200 px-2 py-1">
                          {label.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-black mb-3 leading-snug group-hover:opacity-70 transition-opacity">
                    {blog.title}
                  </h2>
                  {blog.metaDescription && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {blog.metaDescription}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                      {new Date(blog.publishedAt).toLocaleDateString('fr-FR', {day:'numeric', month:'long', year:'numeric'})}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-black group-hover:underline">
                      Lire →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
