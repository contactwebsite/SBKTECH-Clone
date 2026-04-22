const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_OWNER = process.env.GITHUB_OWNER
const GITHUB_REPO = process.env.GITHUB_REPO

export async function getProductsFromGitHub() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/data/products/index.json`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 60 }
      }
    )
    if (!res.ok) return []
    const file = await res.json()
    const content = Buffer.from(file.content, 'base64').toString('utf-8')
    return JSON.parse(content)
  } catch { return [] }
}

export async function getProductBySlug(slug: string) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/data/products/${slug}.json`,
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
    const content = Buffer.from(file.content, 'base64').toString('utf-8')
    return JSON.parse(content)
  } catch { return null }
}

export async function getBlogsFromGitHub() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/data/blogs/index.json`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 60 }
      }
    )
    if (!res.ok) return []
    const file = await res.json()
    const content = Buffer.from(file.content, 'base64').toString('utf-8')
    return JSON.parse(content)
  } catch { return [] }
}

export async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/data/blogs/${slug}.json`,
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
    const content = Buffer.from(file.content, 'base64').toString('utf-8')
    return JSON.parse(content)
  } catch { return null }
}
