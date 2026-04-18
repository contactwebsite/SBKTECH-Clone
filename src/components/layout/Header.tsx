"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[11px] font-bold text-black transition-colors duration-300 hover:text-gray-500 uppercase tracking-[0.1em] group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 md:space-x-6 text-black">
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:scale-110 transition-transform duration-200 cursor-pointer">
            <Search className="h-5 w-5" />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:scale-110 transition-transform duration-200 cursor-pointer hidden sm:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Compte</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:scale-110 transition-transform duration-200 cursor-pointer">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Panier</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-transform duration-200">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l-0">
              <nav className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-black uppercase tracking-[0.1em] text-black hover:text-gray-500 transition-colors"
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
