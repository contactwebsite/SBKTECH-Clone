"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, HelpCircle, Home as HomeIcon, Menu, X } from 'lucide-react';
import { I18nProvider, useI18n } from './i18n';
import FloatingWhatsApp from './FloatingWhatsApp';
import OrderModal from './OrderModal';

// حقن ستايل CSS مخصص ومعزول لضمان تفعيل الألوان والأنيميشن بدقة 100% دون المساس بملف tailwind.config الرئيسي
const BrandStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .bg-brand-dark { background-color: #030712 !important; }
    .bg-brand-midnight { background-color: #0c101d !important; }
    .from-brand-midnight { --tw-gradient-from: #0c101d !important; --tw-gradient-to: rgb(12 16 29 / 0) !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
    .to-brand-midnight { --tw-gradient-to: #0c101d !important; }
    .text-brand-gold { color: #f59e0b !important; }
    .text-brand-goldLight { color: #fcd34d !important; }
    .bg-brand-gold { background-color: #f59e0b !important; }
    .bg-brand-gold\\/5 { background-color: rgba(245, 158, 11, 0.05) !important; }
    .bg-brand-gold\\/20 { background-color: rgba(245, 158, 11, 0.2) !important; }
    .border-brand-gold { border-color: #f59e0b !important; }
    .border-brand-gold\\/20 { border-color: rgba(245, 158, 11, 0.2) !important; }
    .border-brand-gold\\/40 { border-color: rgba(245, 158, 11, 0.4) !important; }
    .border-brand-gold\\/50 { border-color: rgba(245, 158, 11, 0.5) !important; }
    .border-brand-gold\\/60 { border-color: rgba(245, 158, 11, 0.6) !important; }
    .shadow-brand-gold { --tw-shadow-color: rgba(245, 158, 11, 0.3) !important; }
    .hover\\:bg-brand-goldLight:hover { background-color: #fcd34d !important; }
    .hover\\:border-brand-gold\\/50:hover { border-color: rgba(245, 158, 11, 0.5) !important; }
    .hover\\:border-brand-gold\\/40:hover { border-color: rgba(245, 158, 11, 0.4) !important; }
    .hover\\:shadow-brand-gold\\/10:hover { --tw-shadow-color: rgba(245, 158, 11, 0.1) !important; }
    .animate-bounce-slow { animation: bounce 3s infinite; }
    .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  ` }} />
);

function WrapperContent({ children, isHome }: { children: React.ReactNode; isHome: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const toggleLang = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const MegaDealLogo = ({ className = "" }: { className?: string }) => (
    <img 
      src="https://i.imgur.com/NxZezkF.png" 
      alt="MegaDeal Tech Logo"
      className={`h-10 md:h-[50px] w-auto rounded-md ${className}`}
    />
  );

  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 font-sans transition-all duration-300">
      <BrandStyles />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          <Link href="/promo" className="group z-50 focus:outline-none">
            <MegaDealLogo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/promo"
              className={`text-sm font-medium transition-colors ${isHome ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/promo/service-client"
              className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${!isHome ? 'text-brand-gold' : 'text-slate-400 hover:text-white'}`}
            >
              <HelpCircle className="w-4 h-4" />
              {t.nav.support}
            </Link>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-gold/50 transition-all text-sm font-medium cursor-pointer"
            >
              <Globe className="w-4 h-4 text-brand-gold" />
              <span>{language === 'fr' ? 'العربية' : 'Français'}</span>
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4 z-50">
             <button 
              onClick={toggleLang}
              className="text-xs font-medium text-slate-400 border border-slate-700 rounded px-2 py-1 cursor-pointer"
            >
              {language === 'fr' ? 'AR' : 'FR'}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white cursor-pointer">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-brand-dark border-b border-slate-800 p-4 flex flex-col gap-4 shadow-2xl md:hidden">
            <Link 
              href="/promo"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-lg ${isHome ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
            >
              <HomeIcon className="w-5 h-5" />
              {t.nav.home}
            </Link>
            <Link 
              href="/promo/service-client"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-lg ${!isHome ? 'bg-slate-800 text-brand-gold' : 'text-slate-400'}`}
            >
              <HelpCircle className="w-5 h-5" />
              {t.nav.support}
            </Link>
          </div>
        )}
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-slate-950 py-12 pb-24 text-center border-t border-slate-900">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="opacity-80 scale-90">
            <MegaDealLogo />
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MegaDeal Tech. All Rights Reserved.
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
      
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default function PromoPageWrapper({ children, isHome = true }: { children: React.ReactNode, isHome?: boolean }) {
  return (
    <I18nProvider>
      <WrapperContent isHome={isHome}>{children}</WrapperContent>
    </I18nProvider>
  );
}
