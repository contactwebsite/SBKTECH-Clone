import React, { useState, useEffect } from 'react';
import CTAButton from './WhatsAppButton';
import { useI18n } from './i18n';

interface StickyFooterProps {
  onOrderClick: () => void;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ onOrderClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50 p-4 bg-brand-dark/90 backdrop-blur-lg border-t border-slate-800 transition-transform duration-300
      ${isVisible ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <div className="container mx-auto flex items-center justify-between gap-4 max-w-4xl">
        <div className="hidden md:block">
          <p className="text-brand-gold text-sm font-bold">{t.footer.offer}</p>
          <p className="text-white font-bold text-xl">{t.footer.price}</p>
        </div>
        <div className="w-full md:w-auto">
             <CTAButton 
                text={t.footer.btn} 
                onClick={onOrderClick}
                className="w-full md:w-auto text-sm md:text-lg py-3 animate-pulse-slow" 
             />
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
