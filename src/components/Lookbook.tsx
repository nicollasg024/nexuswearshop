import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/products';
import { Reveal } from './Reveal';

export const Lookbook: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="lookbook" className="py-20 bg-[#0A0A0A] border-t border-[#2A2A2A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <Reveal delayMs={100}>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E4161C] uppercase mb-2">
                <span>// EDITORIAL STREETWEAR</span>
                <span className="text-[#9A9A9A]">·</span>
                <span className="text-[#C9CCD1]">LOOKBOOK</span>
              </div>
            </Reveal>

            <Reveal delayMs={150}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-syne text-white uppercase">
                LOOKBOOK // 05
                <span className="text-[#E4161C]">.</span>
              </h2>
            </Reveal>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-[#161616] border border-[#2A2A2A] hover:border-[#E4161C] text-white transition-colors cursor-pointer rounded-sm"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-[#161616] border border-[#2A2A2A] hover:border-[#E4161C] text-white transition-colors cursor-pointer rounded-sm"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll-Snap Strip */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 no-scrollbar scroll-smooth"
      >
        {LOOKBOOK_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="shrink-0 snap-center w-[85vw] sm:w-[420px] lg:w-[480px] bg-[#161616] border border-[#2A2A2A] group relative overflow-hidden rounded-sm"
          >
            {/* Image container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0A0A0A]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

              {/* Tag indicator */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#0A0A0A]/90 text-white px-2.5 py-1 border border-[#2A2A2A]">
                  {item.drop}
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#E4161C] block mb-1">
                  Styling &amp; Fit
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-syne mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C9CCD1] font-normal leading-relaxed">
                  {item.pieces}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
