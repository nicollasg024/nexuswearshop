import React from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight, Flame, Scissors, Shield } from 'lucide-react';
import { INSTAGRAM_URL } from '../lib/utils';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#161616] border-t border-[#2A2A2A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            <Reveal delayMs={100}>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E4161C] uppercase mb-3">
                <span>// MANIFESTO DA MARCA</span>
                <span className="text-[#9A9A9A]">·</span>
                <span className="text-[#C9CCD1]">JARINU / SP</span>
              </div>
            </Reveal>

            <Reveal delayMs={150}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-syne text-white uppercase leading-tight mb-6">
                ONDE A ALFAIATARIA ENCONTRA O ASFALTO
                <span className="text-[#E4161C]">.</span>
              </h2>
            </Reveal>

            <Reveal delayMs={200}>
              <p className="text-sm sm:text-base text-[#C9CCD1] leading-relaxed mb-6">
                Nascida da necessidade de um streetwear autêntico com acabamento de alta-costura, a <strong>NEXUS WEAR</strong> traduz a energia urbana contemporânea em conjuntos estruturados, tecidos encorpados e caimento oversized sem concessões.
              </p>
              <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed mb-8">
                Cada peça do Drop 05 é desenvolvida com rigor industrial — desde o ponto do tricô canelado até a lavagem artesanal do denim e a precisão das costuras reforçadas. Não seguimos tendências passageiras: desenhamos armaduras urbanas para quem constrói o próprio caminho.
              </p>
            </Reveal>

            <Reveal delayMs={250}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2A2A2A]">
                <div>
                  <Scissors className="w-5 h-5 text-[#E4161C] mb-2" />
                  <span className="text-xs font-bold font-syne text-white uppercase block">
                    Modelagem Própria
                  </span>
                  <span className="text-[11px] text-[#9A9A9A]">
                    Caimento anatômico e proporções autorais
                  </span>
                </div>

                <div>
                  <Flame className="w-5 h-5 text-[#E4161C] mb-2" />
                  <span className="text-xs font-bold font-syne text-white uppercase block">
                    Tiragens Limitadas
                  </span>
                  <span className="text-[11px] text-[#9A9A9A]">
                    Sem reposição massiva para manter exclusividade
                  </span>
                </div>

                <div>
                  <Shield className="w-5 h-5 text-[#E4161C] mb-2" />
                  <span className="text-xs font-bold font-syne text-white uppercase block">
                    Origem Jarinu
                  </span>
                  <span className="text-[11px] text-[#9A9A9A]">
                    Produção 100% brasileira de alto padrão
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5">
            <Reveal delayMs={200} direction="right">
              <div className="relative p-6 bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#161616] mb-4">
                  <img
                    src="/src/assets/images/nexus_stripes_patch_1794194507881.jpg"
                    alt="Ateliê e detalhes NEXUS WEAR"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold font-syne text-white uppercase block">
                      NEXUS WEAR FLAGSHIP
                    </span>
                    <span className="text-[11px] text-[#9A9A9A]">
                      R. da Independência, 205 — Jarinu, SP
                    </span>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#161616] text-[#E4161C] hover:text-white border border-[#2A2A2A] rounded-sm transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
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
