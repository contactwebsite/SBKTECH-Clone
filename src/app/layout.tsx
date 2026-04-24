import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const BASE_URL = 'https://balencia-pr.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BALENCIA - L'Élégance de la Sécurité Intelligente au Maroc",
    template: '%s | BALENCIA',
  },
  description: 'Leader en solutions de sécurité de luxe au Maroc : serrures digitales, pointeuses biométriques, coffres-forts et contrôle d\'accès. Livraison gratuite partout au Maroc.',
  keywords: ['serrure digitale maroc', 'serrure intelligente', 'pointeuse biométrique', 'coffre fort maroc', 'contrôle accès', 'sécurité maroc', 'BALENCIA'],
  authors: [{ name: 'BALENCIA Smart Security' }],
  creator: 'BALENCIA',
  publisher: 'BALENCIA Smart Security',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: BASE_URL,
    siteName: 'BALENCIA Smart Security',
    title: "BALENCIA - L'Élégance de la Sécurité Intelligente",
    description: 'Solutions de sécurité de luxe au Maroc. Serrures digitales, pointeuses biométriques et coffres-forts.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'BALENCIA Smart Security',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BALENCIA - Sécurité Intelligente au Maroc",
    description: 'Solutions de sécurité de luxe : serrures digitales, pointeuses biométriques au Maroc.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="MA" />
        <meta name="geo.country" content="Morocco" />
        <meta name="language" content="fr" />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-[#111827] overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
// Add to head section
