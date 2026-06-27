import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, primary = true, className = '', onClick, href }) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-brand-gold cursor-pointer
    \${primary 
      ? 'bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-dark hover:shadow-brand-gold/50' 
      : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'}
    \${className}
  `;

  const Icon = onClick ? ShoppingBag : MessageCircle;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        <Icon className="w-5 h-5" />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
};

export default CTAButton;
