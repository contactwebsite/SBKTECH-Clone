import React, { useState } from 'react';
import { Lock, Play, ChevronDown, Key, AlertCircle, X } from 'lucide-react';
import { useI18n } from './i18n';

const Support: React.FC = () => {
  const { t, language } = useI18n();
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

  const videos = [
    { 
      title: t.support.videos.v1, 
      img: "https://images.unsplash.com/photo-1558002038-1091a1661116?w=600&h=1066&fit=crop&q=80",
      preview: "https://res.cloudinary.com/dwn1omfyl/video/upload/1222_1_k642zn.mp4",
      url: "https://player.cloudinary.com/embed/?cloud_name=dwn1omfyl&public_id=1222_1_k642zn&profile=cld-default" 
    },
    { 
      title: t.support.videos.v2, 
      img: "https://imgur.com/ERedxXn",
      preview: "https://res.cloudinary.com/dwn1omfyl/video/upload/1222_2_xnoplf.mp4",
      url: "https://player.cloudinary.com/embed/?cloud_name=dwn1omfyl&public_id=1222_2_xnoplf&profile=cld-looping" 
    },
    { 
      title: t.support.videos.v3, 
      img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=1066&fit=crop&q=80",
      preview: "https://res.cloudinary.com/dwn1omfyl/video/upload/1222_d1adt9.mp4",
      url: "https://player.cloudinary.com/embed/?cloud_name=dwn1omfyl&public_id=1222_d1adt9&profile=cld-default" 
    },
    { 
      title: t.support.videos.v4, 
      img: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&h=1066&fit=crop&q=80",
      preview: null,
      url: null 
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

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Play className="w-6 h-6 text-brand-gold fill-current" />
            <h2 className="text-2xl font-bold text-white">{t.support.videos.title}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {videos.map((video, idx) => (
              <div 
                key={idx} 
                onClick={() => video.url && setSelectedVideo(video.url)}
                className={`group relative aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1 ${video.url ? 'cursor-pointer hover:border-brand-gold/50' : 'cursor-default opacity-70'}`}
              >
                {video.preview ? (
                  <video 
                    src={video.preview}
                    poster={video.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                ) : (
                  <img 
                    src={video.img} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" 
                  />
                )}
                
                {video.url && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:border-brand-gold transition-all duration-300 shadow-lg">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 z-20">
                  <p className="text-white font-medium text-sm md:text-base leading-tight group-hover:text-brand-gold transition-colors">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedVideo && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setSelectedVideo(null)}>
              <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors z-50"
              >
                  <X className="w-6 h-6" />
              </button>
              <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800" onClick={(e) => e.stopPropagation()}>
                  <iframe 
                      src={selectedVideo}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                  ></iframe>
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
