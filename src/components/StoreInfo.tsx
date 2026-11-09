import React from 'react';
import { Reveal } from './Reveal';
import { GOOGLE_MAPS_URL, INSTAGRAM_URL } from '../lib/utils';
import { TESTIMONIALS } from '../data/products';

export const StoreInfo: React.FC = () => {
  return (
    <section id="loja" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="mb-4 text-xs uppercase tracking-[.4em] text-nexus">
            Avaliada pelos clientes
          </p>
          <h2 className="font-display text-3xl font-extrabold md:text-5xl text-white">
            5.013 AVALIAÇÕES<br />
            <span className="text-silver">NO GOOGLE</span>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {TESTIMONIALS.map(([author, text]) => (
              <figure key={author} className="border border-line bg-graphite p-5">
                <div className="text-sm text-nexus" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote className="mt-3 text-sm text-white">“{text}”</blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-widest text-muted">
                  {author}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col border border-line bg-graphite p-6 md:p-8 lg:col-span-2">
          <p className="mb-4 text-xs uppercase tracking-[.4em] text-muted">
            Loja física
          </p>
          <h3 className="font-display text-2xl font-extrabold md:text-3xl text-white">
            VISITE A NEXUS WEAR
          </h3>
          <address className="mt-5 text-sm not-italic leading-relaxed text-white">
            R. da Independência, 205 — Centro<br />
            Jarinu, SP · 13240-000
          </address>
          <p className="mt-4 flex items-center gap-2 text-sm text-white">
            <span className="h-2 w-2 rounded-full bg-nexus" />
            Abre segunda às 09:00
          </p>
          <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
            <a
              className="btn-outline px-6 py-3 text-center text-xs font-medium uppercase text-white cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href={GOOGLE_MAPS_URL}
            >
              Como chegar
            </a>
            <a
              className="btn-outline px-6 py-3 text-center text-xs font-medium uppercase text-white cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href={INSTAGRAM_URL}
            >
              Ver no Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
