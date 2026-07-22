import React, { useState } from 'react';
import { Lock, Play, ChevronDown, Key, AlertCircle, X } from 'lucide-react';
import { useI18n } from './i18n';

const Support: React.FC = () => {
  const { t } = useI18n();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Tuyasecure@') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // الفيديوهات العريضة (16:9) مع العناوين الجديدة المباشرة
  const videos = [
    { 
      title: "Réglage distance de détection visage", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727219/Reglage_distance_de_detection_visage_agvyik.mp4" 
    },
    { 
      title: "Diminuer le volume de la serrure", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727443/Diminuer_le_volume_de_la_serrure_ybflrt.mp4" 
    },
    { 
      title: "Ajout mot de passe Administrateur première utilisation", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727542/Ajout_mot_de_passe_Administrateur_premiere_utilisation_v3goqr.mp4" 
    },
    { 
      title: "Ajout administrateur empreinte", 
      url: "https://res.cloudinary.com/dwn1omfyl/video/upload/v1784727566/ajout_administrateur_empreinte_wc7d9v.mp4" 
    },
  ];

  const faqs = [
    { q: t.support.faq.q1, a: t.support.faq.a1 },
    { q: t.support.faq.q2, a: t.support.faq.a2 },
    { q: t.support.faq.q3, a: t.support.faq.a3 },
    { q: t.support.faq.q4, a: t.support.faq.a4 },
    { q: t.support.faq.q5, a: t.support.faq.a5 },
    { q: t.support.faq.q6, a: t.support.faq.a6 },
    { q: t.support.faq.q7, a: t.support.faq.a7 },
    { q: t.support.faq.q8, a: t.support.faq.a8 },
    { q: t.support.faq.q9, a: t.support.faq.a9 },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-midnight/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 text-center animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-inner">
            <Lock className="w-10 h-10 text-brand-gold" />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">{t.support.auth.title}</h1>
          <p className="text-slate-400 mb-8">{t.support.auth.subtitle}</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Key className="absolute top-3.5 left-4 w-5 h-5 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.support.auth.placeholder}
                className={`w-full bg-slate-800 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all`}
              />
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm justify-center animate-pulse">
                <AlertCircle className="w-4 h-4" />
                <span>{t.support.auth.error}</span>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-dark font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-gold/10"
            >
              {t.support.auth.btn}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-midnight/30 border border-brand-midnight/50 text-brand-gold mb-4 text-sm font-medium">
             <Lock className="w-3 h-3" />
             <span>Secure Access Granted</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.support.header.title}
          </h1>
          <p className="text-slate-300 text-lg">
            {t.support.header.subtitle}
          </p>
        </header>

        {/* قسم الفيديوهات العريضة 16:9 بالنصوص الجديدة */}
        <section className="mb-20 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Play className="w-6 h-6 text-brand-gold fill-current" />
            <h2 className="text-2xl font-bold text-white">{t.support.videos.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {videos.map((video, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedVideo(video.url)}
                className="group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:border-brand-gold/60 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                {/* فيديو معاينة متكرر خفيف بدون صوت */}
                <video 
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                />

                {/* طبقة تظليل متدرجة وزر تشغيل فاخر */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-between p-5 z-10 pointer-events-none">
                  
                  {/* زر Play العائم */}
                  <div className="self-end w-12 h-12 bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:border-brand-gold transition-all duration-300 shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white group-hover:text-brand-dark transition-colors" />
                  </div>

                  {/* عنوان الفيديو الجديد المحدث */}
                  <div>
                    <h3 className="text-white font-semibold text-base md:text-lg leading-snug group-hover:text-brand-gold transition-colors drop-shadow-md">
                      {video.title}
                    </h3>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* مشغل الفيديو الشامل عند الضغط */}
        {selectedVideo && (
           <div 
             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200" 
             onClick={() => setSelectedVideo(null)}
           >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-all z-50 border border-slate-700 shadow-lg"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div 
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800" 
                onClick={(e) => e.stopPropagation()}
              >
                <video 
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              </div>
           </div>
        )}

        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{t.support.faq.title}</h2>
            <div className="h-1 w-16 bg-slate-800 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === idx ? 'border-brand-gold/40' : 'border-slate-800'}`}
              >
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-white hover:bg-slate-800/50 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeAccordion === idx ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="p-5 pt-0 text-slate-300 leading-relaxed text-sm md:text-base border-t border-slate-800/50 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Support;