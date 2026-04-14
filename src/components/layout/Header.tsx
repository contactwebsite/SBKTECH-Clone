"use client";

import Link from 'next/link';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';
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
    { name: 'COFFRE-FORT', href: '/category/coffre-fort' },
    { name: 'CATALOGUE', href: '/catalogue' },
    { name: 'CONTACTEZ-NOUS', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto px-8 flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold tracking-tighter text-black">SBKTECH</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase text-gray-800 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent">
            <Search className="h-6 w-6 stroke-[1.5px]" />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent">
            <User className="h-6 w-6 stroke-[1.5px]" />
            <span className="sr-only">Compte</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-transparent relative">
            <ShoppingCart className="h-6 w-6 stroke-[1.5px]" />
            <span className="sr-only">Panier</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col space-y-4 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold uppercase text-gray-900 hover:text-blue-600"
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