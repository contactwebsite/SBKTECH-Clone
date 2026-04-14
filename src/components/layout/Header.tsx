"use client";

import Link from 'next/link';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'POIGNÉE DIGITAL', href: '/category/serrure-intelligente' },
    { name: 'Coffre-fort', href: '/category/coffre-fort' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'CONTACTEZ-NOUS', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white h-20">
      <div className="mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-black tracking-tighter text-black">SBKTECH</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black hover:underline transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6 text-black">
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <Search className="h-6 w-6" />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <User className="h-6 w-6" />
            <span className="sr-only">Compte</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Panier</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
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
                    className="text-lg font-bold uppercase text-black hover:underline"
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