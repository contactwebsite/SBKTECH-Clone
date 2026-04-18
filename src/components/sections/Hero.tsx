
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
              src="https://i.ibb.co/GfYGQ9Gm/BALENCIA.jpg"
              alt="BALENCIA Premium Smart Lock Desktop"
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
              src="https://i.ibb.co/rfNLW2Qh/Image-fx-7.jpg"
              alt="BALENCIA Premium Smart Lock Mobile"
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
              BALENCIA SMART SECURITY
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
