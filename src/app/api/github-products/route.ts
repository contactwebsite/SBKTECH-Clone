import { NextResponse } from 'next/server'
import { getProductsFromGitHub } from '@/lib/github'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const products = await getProductsFromGitHub()
    return NextResponse.json(products)
  } catch {
    return NextResponse.json([])
  }
}
