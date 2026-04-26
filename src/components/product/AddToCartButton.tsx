'use client'
import { useRouter } from 'next/navigation'

export default function AddToCartButton({ slug }: { slug: string }) {
  const router = useRouter()
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        router.push(`/product/${slug}`)
      }}
      className="absolute bottom-0 left-0 w-full bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase py-5 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10"
    >
      AJOUTER AU PANIER
    </button>
  )
}
