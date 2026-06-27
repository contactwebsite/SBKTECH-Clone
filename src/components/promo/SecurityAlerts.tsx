import React from 'react';
import { Siren, ShieldBan, BatteryWarning } from 'lucide-react';
import { useI18n } from './i18n';

const SecurityAlerts: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-brand-dark border-t border-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.security.title}
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="relative order-1 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900/50 backdrop-blur-sm group transform transition-transform duration-500 hover:scale-[1.02]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
                 
                 <img 
                   src="https://i.imgur.com/zmBvBq2.png" 
                   alt="Security Alerts Interface" 
                   className="w-full h-auto object-cover relative z-10"
                 />
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark/80 to-transparent z-10"></div>
              </div>
           </div>

           <div className="order-2 lg:order-2 flex flex-col gap-6">
              
              <div className="group bg-[#131b2e] rounded-2xl p-6 border border-slate-800 hover:border-brand-gold/40 transition-all duration-300 hover:bg-slate-800/80 flex items-start gap-5 shadow-lg">
                 <div className="shrink-0 p-3 rounded-xl bg-slate-900 text-brand-gold border border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <Siren className="w-8 h-8 animate-pulse-slow" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{t.security.burglar.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">{t.security.burglar.desc}</p>
                 </div>
              </div>

              <div className="group bg-[#131b2e] rounded-2xl p-6 border border-slate-800 hover:border-brand-gold/40 transition-all duration-300 hover:bg-slate-800/80 flex items-start gap-5 shadow-lg">
                 <div className="shrink-0 p-3 rounded-xl bg-slate-900 text-brand-gold border border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <ShieldBan className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{t.security.attempts.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">{t.security.attempts.desc}</p>
                 </div>
              </div>

              <div className="group bg-[#131b2e] rounded-2xl p-6 border border-slate-800 hover:border-brand-gold/40 transition-all duration-300 hover:bg-slate-800/80 flex items-start gap-5 shadow-lg">
                 <div className="shrink-0 p-3 rounded-xl bg-slate-900 text-brand-gold border border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <BatteryWarning className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{t.security.battery.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">{t.security.battery.desc}</p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityAlerts;
