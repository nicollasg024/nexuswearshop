import React from 'react';
import { ArrowDown, Flame, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const handleScrollToProducts = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('products');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A] bg-tech-grid"
    >
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E4161C]/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-white/[0.02] blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Edition label */}
            <Reveal delayMs={100}>
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-[#C9CCD1] mb-5">
                <span className="w-2 h-2 bg-[#E4161C] inline-block" />
                <span>Drop 05 — Edição limitada</span>
                <span className="text-[#9A9A9A]">/</span>
                <span className="text-[#9A9A9A] font-normal">Jarinu, SP</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal delayMs={200}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight font-syne text-white uppercase leading-[0.92] mb-6">
                FUTURE IS NOW
                <span className="text-[#E4161C]">.</span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delayMs={300}>
              <p className="text-base sm:text-lg text-[#C9CCD1] max-w-xl font-normal leading-relaxed mb-8">
                Streetwear e alfaiataria de atitude moldados para quem define o próprio ritmo. Peças exclusivas, caimento impecável e acabamentos minuciosos em tiragem estrita.
              </p>
            </Reveal>

            {/* Actions */}
            <Reveal delayMs={400}>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToProducts}
                  className="group relative px-8 py-4 bg-[#161616] text-white font-bold text-sm tracking-widest uppercase border border-[#2A2A2A] hover:border-[#E4161C] hover:bg-[#E4161C] transition-all duration-200 focus:outline-none shadow-lg shadow-black/60 flex items-center gap-3 cursor-pointer"
                >
                  <span>COMPRAR AGORA</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>

                <a
                  href="#lookbook"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-[#C9CCD1] hover:text-white uppercase transition-colors"
                >
                  Ver Lookbook
                </a>
              </div>
            </Reveal>

            {/* Proof pill / trust strip */}
            <Reveal delayMs={500} className="mt-12 pt-6 border-t border-[#2A2A2A] w-full max-w-md">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="block text-2xl font-extrabold text-white font-syne tabular-nums">
                    DROP 05
                  </span>
                  <span className="text-xs text-[#9A9A9A] tracking-wider uppercase">
                    Lançamento Oficial
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-white font-syne tabular-nums">
                    100%
                  </span>
                  <span className="text-xs text-[#9A9A9A] tracking-wider uppercase">
                    Autêntico & Nacional
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Hero Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <Reveal delayMs={250} direction="right">
              <div className="relative group mx-auto max-w-md lg:max-w-none">
                {/* Visual framing border */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#161616] border border-[#2A2A2A]">
                  <img
                    src="/src/assets/images/nexus_hero_lookbook_1794194509027.jpg"
                    alt="NEXUS WEAR Editorial Drop 05"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Badge overlays */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-[#0A0A0A]/90 text-white px-2.5 py-1 border border-[#2A2A2A]">
                      JARINU // SP
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#E4161C] block uppercase tracking-wider">
                        Capsule Collection
                      </span>
                      <span className="text-lg font-bold text-white font-syne">
                        ARKITECT // DROP 05
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#9A9A9A] tracking-widest">
                      LIMITED RUN
                    </span>
                  </div>
                </div>

                {/* Ambient accent line */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r-2 border-b-2 border-[#E4161C]/50 pointer-events-none" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
