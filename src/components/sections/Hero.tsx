"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Aspect Ratio Container */}
      <div className="w-full relative overflow-hidden bg-[#f3f4f6]">
        
        {/* DESKTOP VERSION (16:9) */}
        <div className="hidden md:block aspect-video relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <Image
              src="https://i.ibb.co/5W34CprR/A-professional-commercial-grade-banner-photograph-202606262009.jpg"
              alt="MegaDealTech Premium Smart Lock Desktop"
              fill
              priority
              className="object-cover"
              data-ai-hint="smart lock"
            />
          </motion.div>
        </div>

        {/* MOBILE VERSION (9:16) */}
        <div className="block md:hidden aspect-[9/16] relative overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <Image
              src="https://i.ibb.co/4wQLgS9t/A-professional-commercial-grade-vertical-product-202606262015.jpg"
              alt="MegaDealTech Premium Smart Lock Mobile"
              fill
              priority
              className="object-cover"
              data-ai-hint="smart lock"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Ticker Section */}
      <div className="bg-black text-white py-2.5 overflow-hidden border-y border-black">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-8 font-bold tracking-[0.15em] text-[11px] uppercase">
              MegaDealTech SMART SECURITY
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
