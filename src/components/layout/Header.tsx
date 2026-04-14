
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
      "sticky top-0 z-50 w-full border-b border-gray-200 transition-all duration-300 h-20",
      isScrolled ? "bg-white/90 backdrop-blur-md h-16" : "bg-white"
    )}>
      <div className="mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <span className="text-4xl font-black tracking-tighter text-black transition-transform duration-300 group-hover:scale-[1.02]">SBKTECH</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-black transition-colors duration-300 hover:text-gray-500 uppercase tracking-tight group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6 text-black">
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:scale-110 transition-transform duration-200 cursor-pointer">
            <Search className="h-6 w-6" />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:scale-110 transition-transform duration-200 cursor-pointer">
            <User className="h-6 w-6" />
            <span className="sr-only">Compte</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:scale-110 transition-transform duration-200 cursor-pointer">
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Panier</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden hover:scale-110 transition-transform duration-200">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold uppercase text-black hover:text-gray-500 transition-colors"
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
