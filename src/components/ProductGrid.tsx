import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Reveal } from './Reveal';
import { cn } from '../lib/utils';

export const ProductGrid: React.FC = () => {
  const { query } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Alfaiataria', 'Graphic Street', 'Denim'];

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (item) =>
        (selectedCategory === 'Todos' || item.category === selectedCategory) &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [selectedCategory, query]);

  return (
    <section id="novidades" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <Reveal className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-3xl font-extrabold md:text-5xl text-white">
          NEW ARRIVALS
        </h2>
        <span className="text-xs uppercase tracking-widest text-muted">
          {filtered.length} {filtered.length === 1 ? 'conjunto' : 'conjuntos'}
        </span>
      </Reveal>

      <Reveal className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'border border-line px-4 py-2 text-[11px] uppercase tracking-widest transition hover:border-silver cursor-pointer text-white',
              cat === selectedCategory && 'border-white bg-white text-ink hover:text-ink'
            )}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      <div
        id="acessorios"
        className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 lg:grid-cols-3"
      >
        {filtered.map((product, idx) => (
          <Reveal key={product.id} delay={(idx % 3) * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
        {!filtered.length && (
          <p className="col-span-full text-sm text-muted">Nenhuma peça encontrada.</p>
        )}
      </div>
    </section>
  );
};
