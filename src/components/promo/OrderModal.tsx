import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { useI18n } from './i18n';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: ''
  });
  const { t, language } = useI18n();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoading(true);

    const submissionData = new FormData();
    submissionData.append('Name', formData.name);
    submissionData.append('Phone', formData.phone);
    submissionData.append('City', formData.city);
    submissionData.append('Address', formData.address);
    
    submissionData.append('Product', 'Tuya Smart Lock');
    submissionData.append('Price', '2950 DH'); 
    submissionData.append('Date', new Date().toLocaleString());

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxnsoU3i9X_hASWvYv1FzvB2mWH1qTVr-kmp8PnSya0lN0G2L_jiTbU5B6HTRZix4za/exec', {
        method: 'POST',
        body: submissionData,
        mode: 'no-cors'
      });

      setLoading(false);
      setStep('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
      alert(language === 'ar' ? 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.' : "Une erreur s'est produite lors de l'envoi de la commande.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    if (step === 'success') {
      setTimeout(() => {
        setStep('form');
        setFormData({ name: '', phone: '', city: '', address: '' });
      }, 300);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      ></div>
      
      <div className="relative bg-[#0a0e17] border border-[#fca311] rounded-[15px] w-full max-w-[450px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={handleClose} 
          className={`absolute top-4 p-1.5 text-slate-400 hover:text-white transition-colors z-10 ${language === 'ar' ? 'left-4' : 'right-4'}`}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-[25px]">
           {step === 'form' ? (
             <>
               <div className="text-center mb-6">
                 <h2 className="text-2xl font-bold text-white mb-2">{t.modal.title}</h2>
                 <p className="text-slate-400 text-sm">{t.modal.sub}</p>
               </div>
               
               <form onSubmit={handleSubmit} className="space-y-4">
                 <div className="space-y-1">
                   <label className="text-xs font-bold text-brand-gold uppercase tracking-wider block ml-1">{t.modal.name}</label>
                   <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Ex: Mohammed Alami"
                    className={`w-full py-3 px-4 bg-[#131b2e] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] transition-all placeholder:text-slate-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                   />
                 </div>
                 
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-gold uppercase tracking-wider block ml-1">{t.modal.phone}</label>
                   <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="Ex: 06 12 34 56 78"
                    dir="ltr"
                    className={`w-full py-3 px-4 bg-[#131b2e] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] transition-all placeholder:text-slate-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                   />
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-gold uppercase tracking-wider block ml-1">{t.modal.city}</label>
                    <input 
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Ex: Casablanca"
                      className={`w-full py-3 px-4 bg-[#131b2e] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] transition-all placeholder:text-slate-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block ml-1">{t.modal.address}</label>
                    <input 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      type="text" 
                      placeholder="..."
                      className={`w-full py-3 px-4 bg-[#131b2e] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#fca311] focus:ring-1 focus:ring-[#fca311] transition-all placeholder:text-slate-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                 </div>

                 <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#fca311] hover:bg-[#ffb703] text-black font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-orange-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
                 >
                   {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : t.modal.confirmBtn}
                 </button>
               </form>
             </>
           ) : (
             <div className="text-center py-8 animate-in zoom-in duration-300">
               <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/30">
                 <CheckCircle className="w-10 h-10 text-green-500" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">{t.modal.successTitle}</h3>
               <div className="bg-[#131b2e] rounded-lg p-4 border border-slate-700 mb-6">
                   <p className="text-slate-300 text-base leading-relaxed">
                     {t.modal.successDesc} <span className="text-[#fca311] font-bold block text-xl mt-1" dir="ltr">{formData.phone}</span>
                   </p>
               </div>
               <button onClick={handleClose} className="w-full bg-[#131b2e] text-white border border-slate-700 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all">
                 {t.modal.backBtn}
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
