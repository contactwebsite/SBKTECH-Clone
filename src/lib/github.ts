const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_OWNER = process.env.GITHUB_OWNER
const GITHUB_REPO = process.env.GITHUB_REPO

async function fetchGitHub(path: string) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 60 }
    }
  )
  if (!res.ok) return null
  const file = await res.json()
  return JSON.parse(Buffer.from(file.content, 'base64').toString('utf-8'))
}

export async function getProductsFromGitHub() {
  try {
    const data = await fetchGitHub('data/products/index.json')
    if (!data) return []
    return data.map((p: any) => ({
      ...p,
      image: p.images?.[0]?.url || p.image || '',
      name: p.title || p.name,
      oldPrice: p.oldPrice || p.old_price || 0,
      discountPercentage: p.discountPercentage || '',
    }))
  } catch { return [] }
}

export async function getProductBySlug(slug: string) {
  try {
    const data = await fetchGitHub(`data/products/${slug}.json`)
    if (!data) return null
    return {
      ...data,
      image: data.images?.[0]?.url || data.image || '',
      name: data.title || data.name,
      oldPrice: data.oldPrice || data.old_price || 0,
      discountPercentage: data.discountPercentage || '',
      rating: data.rating || 4.8,
      reviewCount: data.reviewCount || 50,
    }
  } catch { return null }
}

export async function getBlogsFromGitHub() {
  try {
    const data = await fetchGitHub('data/blogs/index.json')
    return data || []
  } catch { return [] }
}

export async function getBlogBySlug(slug: string) {
  try {
    const data = await fetchGitHub(`data/blogs/${slug}.json`)
    return data || null
  } catch { return null }
}
