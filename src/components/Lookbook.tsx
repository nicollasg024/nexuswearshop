import React from 'react';
import { PRODUCTS } from '../data/products';
import { Reveal } from './Reveal';

export const Lookbook: React.FC = () => {
  return (
    <section id="colecao" className="border-t border-line py-20">
      <Reveal className="mx-auto mb-8 max-w-7xl px-4 md:px-8">
        <p className="mb-4 text-xs uppercase tracking-[.4em] text-nexus">
          Lookbook
        </p>
        <h2 className="font-display text-3xl font-extrabold md:text-5xl text-white">
          A COLEÇÃO EM CAMADAS
        </h2>
      </Reveal>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:px-8 [scrollbar-width:none]">
        {PRODUCTS.map((p) => (
          <figure
            key={p.id}
            className="relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden bg-graphite sm:w-[44%] lg:w-[30%]"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-xs uppercase tracking-widest text-white">
              {p.pieces}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
