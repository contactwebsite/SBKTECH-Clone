import React from 'react';
import { ShieldCheck, Truck, Star } from 'lucide-react';
import CTAButton from './WhatsAppButton';
import { useI18n } from './i18n';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  const { t, language } = useI18n();
  const isRtl = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-dark">
      {/* Background Gradient/Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-midnight/40 via-brand-dark to-brand-dark z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className={`order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-start space-y-6 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          
          {/* New 2026 Premium Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-brand-gold/60 text-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(245,158,11,0.15)] mb-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.hero.badge2026}</span>
          </div>

          {/* Headlines: Logo + Subtitle */}
          <h1 className="flex flex-col gap-4 items-center md:items-start w-full">
            <img 
              src="https://i.imgur.com/twIXOvS.png" 
              alt="Tuya Secure"
              className="max-w-[180px] md:max-w-[220px] h-auto object-contain"
            />
            <span className="text-brand-gold text-3xl md:text-5xl font-bold leading-tight drop-shadow-2xl">
              {t.hero.headlineSubtitle}
            </span>
          </h1>

          {/* Social Proof (Reviews) */}
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1">
               {[1, 2, 3, 4, 5].map((_, i) => (
                 <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
               ))}
             </div>
             <span className="text-slate-400 text-sm font-medium">{t.hero.reviews}</span>
          </div>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-lg leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* Pricing Section (Price Anchoring) */}
          <div className="flex items-center gap-6 py-4">
             <div className="flex flex-col items-center md:items-start">
                <span className="text-slate-400 text-xl md:text-2xl font-medium line-through decoration-slate-400/80 decoration-2 mb-0.5">{t.hero.oldPrice}</span>
                <span className="text-3xl md:text-4xl font-bold text-brand-gold tracking-tight">{t.hero.newPrice}</span>
             </div>
          </div>

          <CTAButton text={t.hero.cta} onClick={onOrderClick} />

          {/* Trust Badge (Secondary) */}
          <div className="mt-4 inline-flex items-center gap-2 opacity-70">
            <Truck className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-400">{t.hero.badge}</span>
          </div>
          
        </div>

        {/* Visual Content */}
        <div className="order-1 md:order-2 relative group w-full max-w-lg mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
          <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm mx-auto max-w-[350px]">
               <img 
                src="https://i.imgur.com/cmTkqZt.png" 
                alt="Tuya Smart Lock" 
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay UI mockup */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                 <ShieldCheck className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                 <p className="text-white font-bold">{t.hero.secure}</p>
                 <p className="text-slate-400 text-xs">{t.hero.locked}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
