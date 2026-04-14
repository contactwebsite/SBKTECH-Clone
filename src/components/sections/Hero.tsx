
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full h-[500px] relative bg-[#eeeeee]">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <Image
            src="https://placehold.co/1920x500/eeeeee/cccccc?text=Smart+Lock+Banner"
            alt="SBKTECH Hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
      
      {/* Ticker Section */}
      <div className="bg-black text-white py-2 overflow-hidden border-y border-black">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-sm font-bold mx-8 tracking-widest">
              SBKTECH
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
