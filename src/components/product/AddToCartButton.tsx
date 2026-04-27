'use client'
import { useState } from 'react'

export default function AddToCartButton({ slug, product }: { slug: string; product?: any }) {
  const [added, setAdded] = useState(false)

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        const exists = cart.find((i: any) => i.slug === slug)
        if (exists) {
          exists.quantity = (exists.quantity || 1) + 1
        } else {
          cart.push({ ...(product || { slug }), slug, quantity: 1 })
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        window.dispatchEvent(new Event('cart-updated'))
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
      }}
      className="absolute bottom-0 left-0 w-full text-white text-[10px] font-bold tracking-[0.3em] uppercase py-5 text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10"
      style={{ background: added ? '#16a34a' : 'black' }}
    >
      {added ? '✓ AJOUTÉ !' : 'AJOUTER AU PANIER'}
    </button>
  )
}
