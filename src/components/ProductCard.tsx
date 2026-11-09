import React, { useState, useRef, useCallback } from 'react';
import { ShoppingBag, Eye, Check, Sparkles, Layers } from 'lucide-react';
import { Product, Hotspot } from '../data/products';
import { useStore } from '../context/StoreContext';
import { formatBRL, cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // States
  const [isXRayActive, setIsXRayActive] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);
  const [currentView, setCurrentView] = useState<'flatlay' | 'model'>('flatlay');

  // 3D Tilt on Mouse (Strictly disabled on touch devices)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Check for mouse/fine pointer
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: 'transform 0.1s ease-out',
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdded(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const toggleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentView((prev) => (prev === 'flatlay' ? 'model' : 'flatlay'));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={cn(
        'group relative bg-[#161616] border border-[#2A2A2A] rounded-sm overflow-hidden flex flex-col',
        'hover:border-[#E4161C]/60 transition-colors duration-300',
        'shadow-md shadow-black/40'
      )}
    >
      {/* 4:5 Photo Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0A0A]">
        {/* Main Product Image (Real photo flatlay) */}
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            'w-full h-full object-cover object-center transition-all duration-700 ease-out',
            isHovered && !isXRayActive && 'scale-105 contrast-[1.03]',
            isXRayActive && 'filter brightness-40 blur-[1px]',
            currentView === 'model' && product.image2 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          )}
          loading="lazy"
        />

        {/* Optional Secondary Image (On Model / Editorial Lookbook) */}
        {product.image2 && (
          <img
            src={product.image2}
            alt={`${product.name} no modelo`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out',
              currentView === 'model'
                ? 'opacity-100'
                : isHovered && !isXRayActive
                ? 'opacity-85'
                : 'opacity-0 pointer-events-none',
              isXRayActive && 'filter brightness-40 blur-[1px]'
            )}
            loading="lazy"
          />
        )}

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges / Category Indicator */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-mono tracking-widest uppercase bg-[#0A0A0A]/90 text-[#C9CCD1] px-2 py-0.5 border border-[#2A2A2A]">
            {product.category}
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#E4161C] bg-[#0A0A0A]/90 px-2 py-0.5 border border-[#E4161C]/40">
            FOTO REAL
          </span>
        </div>

        {/* Model view switch toggle (if image2 exists) */}
        {product.image2 && (
          <button
            onClick={toggleView}
            className="absolute top-10 right-3 z-20 text-[10px] font-mono tracking-wider uppercase px-2 py-1 bg-[#0A0A0A]/85 hover:bg-[#0A0A0A] text-[#C9CCD1] hover:text-white border border-[#2A2A2A] rounded-sm transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
            title="Alternar entre foto real da peça e no modelo"
          >
            <Layers className="w-3 h-3 text-[#E4161C]" />
            <span>{currentView === 'flatlay' ? 'Ver Modelo' : 'Ver Peça'}</span>
          </button>
        )}

        {/* X-Ray Hotspots Layer */}
        {isXRayActive && (
          <div className="absolute inset-0 z-20 p-4 animate-fadeIn">
            <div className="absolute top-3 right-3 bg-[#0A0A0A]/95 border border-[#E4161C] px-2 py-1 text-[10px] font-mono text-[#E4161C] uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4161C] animate-pulse" />
              Raio-X Ativo
            </div>

            {/* Hotspot Pulsing Pins */}
            {product.hotspots.map((spot) => {
              const isSelected = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group/spot"
                >
                  <button
                    onClick={() => setActiveHotspot(isSelected ? null : spot)}
                    className={cn(
                      'relative w-7 h-7 flex items-center justify-center rounded-full transition-transform',
                      'focus:outline-none cursor-pointer',
                      isSelected ? 'scale-125' : 'hover:scale-110'
                    )}
                    aria-label={`Ver detalhe: ${spot.title}`}
                  >
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-[#E4161C]/50 animate-ping" />
                    {/* Center red point */}
                    <span className="relative w-4 h-4 rounded-full bg-[#E4161C] border-2 border-white shadow-lg shadow-[#E4161C]/80 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                  </button>

                  {/* Hotspot Label Tooltip */}
                  {(isSelected || isHovered) && (
                    <div
                      className={cn(
                        'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-[#0A0A0A]/95 border border-[#2A2A2A] shadow-2xl rounded text-left z-40 transition-all pointer-events-auto',
                        isSelected ? 'border-[#E4161C]' : ''
                      )}
                    >
                      <div className="flex items-center gap-1 text-[11px] font-bold text-white font-syne uppercase">
                        <span className="w-1.5 h-1.5 bg-[#E4161C] rounded-full shrink-0" />
                        <span>{spot.title}</span>
                      </div>
                      {spot.description && (
                        <p className="text-[10px] text-[#C9CCD1] leading-tight mt-1">
                          {spot.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Raio-X Toggle Button */}
        <button
          onClick={() => {
            setIsXRayActive(!isXRayActive);
            setActiveHotspot(null);
          }}
          className={cn(
            'absolute bottom-3 left-3 z-20 text-[11px] font-mono tracking-wider uppercase px-2.5 py-1.5 rounded-sm transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer',
            isXRayActive
              ? 'bg-[#E4161C] text-white shadow-lg shadow-[#E4161C]/40'
              : 'bg-[#0A0A0A]/85 text-[#C9CCD1] hover:text-white hover:bg-[#0A0A0A] border border-[#2A2A2A]'
          )}
          title="Ver detalhes de construção e acabamentos"
        >
          <span>◎</span>
          <span>{isXRayActive ? 'Ocultar Raio-X' : 'Raio-X'}</span>
        </button>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-[#161616]">
        <div>
          {/* Subtitle / Pieces definition */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#9A9A9A] tracking-wider uppercase mb-1">
            <span>{product.subtitle}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-bold text-white font-syne tracking-tight leading-snug mb-2 group-hover:text-[#E4161C] transition-colors">
            {product.name}
          </h3>

          {/* Pieces breakdown info */}
          <p className="text-xs text-[#9A9A9A] line-clamp-2 leading-relaxed mb-4">
            {product.pieces}
          </p>
        </div>

        {/* Price & Buy Action */}
        <div className="pt-3 border-t border-[#2A2A2A] flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            {typeof product.price === 'number' ? (
              <div className="flex items-baseline gap-2">
                <span className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                  {formatBRL(product.price)}
                </span>
                {product.compareAt && product.compareAt > product.price && (
                  <span className="text-xs text-[#9A9A9A] line-through font-mono tabular-nums">
                    {formatBRL(product.compareAt)}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs font-mono tracking-wider uppercase text-[#C9CCD1]">
                Consulte o preço
              </span>
            )}

            <span className="text-[10px] font-mono text-[#9A9A9A]">
              DROP 05
            </span>
          </div>

          {/* Add to cart CTA */}
          <button
            onClick={handleAddToCart}
            className={cn(
              'w-full py-2.5 px-3 rounded-sm font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none',
              isAdded
                ? 'bg-[#E4161C] text-white scale-[1.02] shadow-lg shadow-[#E4161C]/50'
                : 'bg-[#222222] text-white hover:bg-[#E4161C] hover:text-white border border-[#2A2A2A] hover:border-[#E4161C]'
            )}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 animate-bounce" />
                <span>ADICIONADO ✓</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Adicionar à sacola</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
