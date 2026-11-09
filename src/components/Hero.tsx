import React from 'react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink md:items-center">
      {/* Background Image: Apresentação NEXUS WEAR (Dois modelos centralizados no mobile) */}
      <img
        src="/assets/presentation_store.jpg"
        alt="Apresentação NEXUS WEAR Flagship Store"
        className="absolute inset-0 h-full w-full object-cover object-[50%_18%] sm:object-[center_28%] filter brightness-[0.72] contrast-[1.05]"
        loading="eager"
      />

      {/* Atmospheric dark gradient overlays: mais transparentes no topo/centro para destacar os modelos */}
      {/* Scrim no rodapé do Hero para garantir contraste nos textos */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 via-40% to-ink/20 pointer-events-none" />
      {/* Gradiente lateral no desktop para a coluna de texto */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-ink/80 via-ink/35 to-transparent pointer-events-none" />
      
      {/* Grade técnica com opacidade suave */}
      <div className="absolute inset-0 animate-grid bg-[linear-gradient(#2a2a2a_1px,transparent_1px),linear-gradient(90deg,#2a2a2a_1px,transparent_1px)] bg-[length:64px_64px] opacity-15 [mask-image:linear-gradient(180deg,#000,transparent_90%)] pointer-events-none" />

      {/* Content com drop-shadow para máxima legibilidade sobre a foto */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 md:px-8 md:pb-0 z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-ink/75 backdrop-blur-sm border border-line rounded-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-nexus animate-ping" />
            <p className="text-[11px] uppercase tracking-[.3em] text-white font-bold">
              Drop 05 — Edição Limitada // Jarinu, SP
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold leading-[.95] tracking-tight text-white uppercase max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            DITE SEU<br />
            PRÓPRIO RITMO<span className="text-nexus">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-lg text-sm text-silver md:text-base leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] font-medium">
            Streetwear e alfaiataria urbana de alto padrão direto de Jarinu, SP. Cortes estruturados, tecidos de gramatura encorpada e atitude autêntica em tiragem estrita.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#novidades"
              className="inline-flex items-center gap-2 border border-nexus bg-nexus px-7 py-3.5 text-xs font-bold uppercase tracking-[.25em] text-white transition duration-300 hover:bg-[#c30f14] hover:border-[#c30f14] cursor-pointer shadow-xl shadow-black/80"
            >
              COMPRAR AGORA
            </a>
            <a
              href="#loja"
              className="inline-flex items-center gap-2 border border-white/20 bg-ink/80 px-6 py-3.5 text-xs font-bold uppercase tracking-[.2em] text-white backdrop-blur transition duration-300 hover:border-white hover:bg-ink cursor-pointer shadow-lg shadow-black/60"
            >
              Conheça a Loja Física
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
