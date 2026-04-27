"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const readCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(cart);
    };
    readCart();
    window.addEventListener('cart-updated', readCart);
    return () => window.removeEventListener('cart-updated', readCart);
  }, []);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'POIGNÉE DIGITAL', href: '/category/serrure-intelligente' },
    { name: 'COFFRE-FORT', href: '/category/coffre-fort' },
    { 
      name: 'CATALOGUE', 
      href: '/catalogue',
      dropdown: [
        { name: 'Pointeuse Biométrique', href: '/category/pointeuse-biometrique' },
        { name: 'Contrôle d\'accès porte', href: '/category/controle-d-acces-porte' },
        { name: 'Lecteurs contrôle d\'accès', href: '/category/lecteurs-controle-d-acces' },
        { name: 'Contrôle d\'accès', href: '/category/controle-acces' },
        { name: 'Caisse automatique', href: '/category/caisse' },
        { name: 'Imprimante Thermique', href: '/category/imprimante' },
      ]
    },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACTEZ-NOUS', href: '/contact' },
  ];

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-100 transition-all duration-300 h-20",
        isScrolled ? "bg-white/90 backdrop-blur-md h-16 shadow-sm" : "bg-white"
      )}>
        <div className="mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 cursor-pointer group">
              <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-90 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="w-full h-full text-black">
                  <rect x="3" y="3" width="18" height="18" />
                  <path d="M3 12h18" />
                  <path d="M12 3v18" />
                  <rect x="8" y="8" width="8" height="8" fill="black" />
                </svg>
              </div>

              <div className="w-[1px] h-8 bg-gray-300 hidden md:block"></div>

              <div className="flex flex-col justify-center">
                <span className="font-sans font-black text-xl md:text-2xl tracking-[0.25em] text-black uppercase leading-none">
                  BALENCIA
                </span>
                <span className="font-sans font-medium text-[0.45rem] md:text-[0.6rem] tracking-[0.4em] text-gray-500 uppercase mt-1 leading-none">
                  Smart Security
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const hasDropdown = !!link.dropdown;

              return (
                <div key={link.name} className={cn("relative h-full flex items-center", hasDropdown && "group")}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold uppercase tracking-wider px-5 py-2 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-1.5",
                      isActive 
                        ? "bg-black text-white border border-black rounded-full" 
                        : "text-gray-500 border border-transparent rounded-full hover:text-black hover:border-black hover:bg-gray-50/50"
                    )}
                  >
                    {link.name}
                    {hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>

                  {hasDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                      <div className="w-64 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl p-4 flex flex-col gap-1">
                        {link.dropdown?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm text-gray-600 font-medium hover:text-black hover:pl-3 hover:border-l-2 hover:border-black transition-all duration-300 py-2.5 px-2"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <div 
              className="relative cursor-pointer group p-2"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5 text-gray-800 transition-transform duration-300 group-hover:scale-110 group-hover:text-black" strokeWidth={1.5} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.reduce((s: number, i: any) => s + (i.quantity || 1), 0)}
                </span>
              )}
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-transform duration-200">
                  <Menu className="h-6 w-6 text-black" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-l-0">
                <nav className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "text-lg font-black uppercase tracking-[0.1em] transition-colors",
                        pathname === link.href ? "text-amber-600" : "text-black hover:text-gray-500"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Cart Overlay & Drawer */}
      <div className={cn(
        "fixed inset-0 z-[100] transition-all duration-500 ease-in-out",
        isCartOpen ? "visible opacity-100" : "invisible opacity-0"
      )}>
        {/* Blurred Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />

        {/* Slide-out Panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Cart Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold tracking-widest uppercase">Votre Panier</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-gray-200 mb-4" strokeWidth={1} />
                <p className="text-gray-400 font-light">Votre panier est vide.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cartItems.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 border-b border-gray-50 pb-4">
                    <div className="w-16 h-16 bg-gray-50 rounded flex-shrink-0 overflow-hidden relative">
                      <img src={item.images?.[0]?.url || item.image || 'https://placehold.co/64x64'} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-wider text-black line-clamp-2">{item.name}</p>
                      <p className="text-sm font-black text-black mt-1">{(item.price || 0).toLocaleString('fr-FR')} DH</p>
                      <p className="text-[10px] text-gray-400">Qté: {item.quantity || 1}</p>
                    </div>
                    <button onClick={() => {
                      const cart = cartItems.filter((_: any, i: number) => i !== idx);
                      localStorage.setItem('cart', JSON.stringify(cart));
                      setCartItems(cart);
                      window.dispatchEvent(new Event('cart-updated'));
                    }} className="text-gray-300 hover:text-black text-xs self-start">✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100">
              <div className="flex justify-between mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">Total</span>
                <span className="font-black text-black">{cartItems.reduce((s: number, i: any) => s + (i.price || 0) * (i.quantity || 1), 0).toLocaleString('fr-FR')} DH</span>
              </div>
              <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gray-900 transition-colors">
                Commander
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
