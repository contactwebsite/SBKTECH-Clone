import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/hero-clean/1920/1000"
          alt="SBKTECH Hero"
          fill
          priority
          className="object-cover"
          data-ai-hint="smart technology"
        />
      </div>
    </section>
  );
}