"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: 'Coffre-fort', href: '/category/coffre-fort' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'CONTACTEZ-NOUS', href: '/contact' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-gray-100 transition-all duration-300 h-20",
      isScrolled ? "bg-white/90 backdrop-blur-md h-16 shadow-sm" : "bg-white"
    )}>
      <div className="mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-4 cursor-pointer group">
            {/* The Custom "Trillion-Dollar" Geometric SVG Icon */}
            <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-90 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="w-full h-full text-black">
                <rect x="3" y="3" width="18" height="18" />
                <path d="M3 12h18" />
                <path d="M12 3v18" />
                <rect x="8" y="8" width="8" height="8" fill="black" />
              </svg>
            </div>

            {/* Vertical Separator Line */}
            <div className="w-[1px] h-8 bg-gray-300 hidden md:block"></div>

            {/* Ultra-Luxury Typography */}
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
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider px-5 py-2 transition-all duration-300 ease-in-out cursor-pointer",
                  isActive 
                    ? "bg-black text-white border border-black rounded-full" 
                    : "text-gray-500 border border-transparent rounded-full hover:text-black hover:border-black hover:bg-gray-50/50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          {/* The Trillion-Dollar Shopping Bag */}
          <div className="relative cursor-pointer group p-2">
            <ShoppingBag className="w-5 h-5 text-gray-800 transition-transform duration-300 group-hover:scale-110 group-hover:text-black" strokeWidth={1.5} />
            <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
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
  );
}
