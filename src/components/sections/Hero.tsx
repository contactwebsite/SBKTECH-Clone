"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Aspect Ratio 16:9 Container */}
      <div className="w-full aspect-video relative overflow-hidden bg-[#f3f4f6]">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <Image
            src="https://i.ibb.co/GfYGQ9Gm/BALENCIA.jpg"
            alt="BALENCIA Premium Smart Lock"
            fill
            priority
            className="object-cover"
            data-ai-hint="smart lock"
          />
        </motion.div>
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
