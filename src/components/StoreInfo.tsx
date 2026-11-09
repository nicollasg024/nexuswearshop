import React from 'react';
import { MapPin, Clock, ArrowUpRight, Navigation, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';
import { GOOGLE_MAPS_URL, INSTAGRAM_URL } from '../lib/utils';
import { Reveal } from './Reveal';

export const StoreInfo: React.FC = () => {
  return (
    <section id="store-location" className="py-20 bg-[#0A0A0A] border-t border-[#2A2A2A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <Reveal delayMs={100}>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E4161C] uppercase mb-2">
              <span>// REPUTAÇÃO E PRESENÇA FÍSICA</span>
              <span className="text-[#9A9A9A]">·</span>
              <span className="text-[#C9CCD1]">JARINU / SP</span>
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-syne text-white uppercase">
                EXPERIÊNCIA REAL
                <span className="text-[#E4161C]">.</span>
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#C9CCD1]">
                <CheckCircle2 className="w-4 h-4 text-[#E4161C]" />
                <span className="font-semibold text-white">5.013 avaliações</span>
                <span className="text-[#9A9A9A]">no Google</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2-Column Split: Testimonials & Physical Store Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Testimonials Column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {TESTIMONIALS.map((item, idx) => (
              <Reveal key={item.id} delayMs={idx * 120}>
                <div className="p-6 bg-[#161616] border border-[#2A2A2A] rounded-sm hover:border-[#E4161C]/40 transition-colors flex flex-col justify-between">
                  <p className="text-sm sm:text-base text-white font-medium italic mb-4 leading-relaxed">
                    "{item.text}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#2A2A2A]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2A2A2A] text-white text-xs font-bold font-syne flex items-center justify-center">
                        {item.initials}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-[#9A9A9A] block">
                          {item.role}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#E4161C] uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Physical Store Card Column */}
          <div className="lg:col-span-5 flex">
            <Reveal delayMs={200} className="w-full h-full">
              <div className="p-7 bg-[#161616] border border-[#2A2A2A] rounded-sm flex flex-col justify-between h-full relative overflow-hidden group">
                {/* Background red ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E4161C]/5 blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E4161C] uppercase mb-3">
                    <span className="w-2 h-2 bg-[#E4161C]" />
                    <span>Loja Física</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-syne uppercase mb-4">
                    Visite a NEXUS WEAR
                  </h3>

                  <p className="text-xs text-[#C9CCD1] leading-relaxed mb-6">
                    Viva a experiência tátil completa: prove as modelagens oversized, sinta as gramaturas e os tecidos premium e conheça nosso espaço exclusivo em Jarinu.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-[#2A2A2A]">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#E4161C] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider block">
                          Endereço
                        </span>
                        <p className="text-xs text-[#9A9A9A] leading-relaxed">
                          R. da Independência, 205 — Centro<br />
                          Jarinu, SP — CEP 13240-000
                        </p>
                      </div>
                    </div>

                    {/* Opening hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#E4161C] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider block">
                          Horário de Funcionamento
                        </span>
                        <p className="text-xs text-[#9A9A9A]">
                          Abre segunda às 09:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-8 mt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-3">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#E4161C] hover:bg-[#c30f14] text-white text-xs font-bold tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Como Chegar</span>
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#222222] hover:bg-[#2c2c2c] text-white text-xs font-bold tracking-wider uppercase rounded-sm border border-[#2A2A2A] transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <span>Ver no Instagram</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E4161C]" />
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
