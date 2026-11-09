import React, { useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS, ProductCategory } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Reveal } from './Reveal';
import { cn } from '../lib/utils';
import { SlidersHorizontal } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useStore();

  const categories: Array<ProductCategory | 'Todos'> = [
    'Todos',
    'Alfaiataria',
    'Graphic Street',
    'Denim',
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todos' || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.pieces.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 bg-[#0A0A0A] border-t border-[#2A2A2A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal delayMs={100}>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E4161C] uppercase mb-2">
                <span>// CATÁLOGO OFICIAL</span>
                <span className="text-[#9A9A9A]">·</span>
                <span className="text-[#C9CCD1]">DROP 05</span>
              </div>
            </Reveal>

            <Reveal delayMs={150}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-syne text-white uppercase">
                NEW ARRIVALS
                <span className="text-[#E4161C]">.</span>
              </h2>
            </Reveal>
          </div>

          {/* Interactive Category Filter Tabs */}
          <Reveal delayMs={200}>
            <div className="flex items-center gap-1.5 p-1 bg-[#161616] border border-[#2A2A2A] rounded-sm overflow-x-auto no-scrollbar max-w-full">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer rounded-sm focus:outline-none',
                      isActive
                        ? 'bg-[#E4161C] text-white shadow-sm'
                        : 'text-[#9A9A9A] hover:text-white hover:bg-[#222222]'
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Active Search Feedback */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between p-3 bg-[#161616] border border-[#2A2A2A] rounded text-xs text-[#C9CCD1]">
            <span>
              Filtrando resultados por: <strong className="text-white">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#E4161C] hover:underline uppercase font-mono tracking-wider ml-4 cursor-pointer"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Product Grid: 2 columns mobile, 3 columns desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <Reveal key={product.id} delayMs={index * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-[#2A2A2A] bg-[#161616] p-8 rounded-sm">
            <SlidersHorizontal className="w-8 h-8 text-[#9A9A9A] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white font-syne uppercase mb-1">
              Nenhuma peça encontrada
            </h3>
            <p className="text-xs text-[#9A9A9A] max-w-md mx-auto mb-4">
              Não encontramos nenhum conjunto correspondente ao termo "{searchQuery}". Tente buscar por categorias como Tricô, Denim, Alfaiataria ou Jersey.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="px-4 py-2 bg-[#E4161C] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#c30f14] transition-colors"
            >
              Ver todos os conjuntos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
