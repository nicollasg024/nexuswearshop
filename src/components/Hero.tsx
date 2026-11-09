import React from 'react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[radial-gradient(ellipse_at_70%_30%,#2b2d31_0,transparent_55%),linear-gradient(180deg,#111,#0A0A0A)] md:items-center">
      <div className="absolute inset-0 animate-grid bg-[linear-gradient(#2a2a2a_1px,transparent_1px),linear-gradient(90deg,#2a2a2a_1px,transparent_1px)] bg-[length:64px_64px] opacity-35 [mask-image:linear-gradient(180deg,#000,transparent_90%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-0">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[.4em] text-nexus">
            Drop 05 — Edição limitada
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-[3.4rem] font-extrabold leading-[.9] tracking-tight sm:text-8xl md:text-[9rem] text-white">
            FUTURE<br />IS NOW<span className="text-nexus">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-sm text-muted md:text-base">
            Techwear e streetwear de alto padrão. Cortes estruturais, tecidos técnicos, atitude em cada detalhe.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="#novidades"
            className="mt-8 inline-flex items-center gap-2 border border-line bg-graphite/60 px-8 py-4 text-xs font-bold uppercase tracking-[.25em] backdrop-blur transition duration-300 hover:border-nexus hover:bg-nexus hover:text-white text-white cursor-pointer"
          >
            COMPRAR AGORA
          </a>
        </Reveal>
      </div>
    </section>
  );
};
