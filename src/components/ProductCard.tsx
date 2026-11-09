import React, { useState, useRef } from 'react';
import { Product } from '../data/products';
import { useStore } from '../context/StoreContext';
import { cn, formatBRL } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { add } = useStore();
  const [xray, setXray] = useState(false);
  const [added, setAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  const applyTilt = (x: number, y: number) => {
    const el = cardRef.current;
    if (el) {
      el.style.setProperty('--rx', `${-y * 10}deg`);
      el.style.setProperty('--ry', `${x * 10}deg`);
      el.style.setProperty('--px', `${-x * 18}px`);
      el.style.setProperty('--py', `${-y * 18}px`);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => applyTilt(x, y));
  };

  const handleAdd = () => {
    add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="group/card">
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => applyTilt(0, 0)}
        className="relative aspect-[4/5] overflow-hidden bg-graphite [perspective:900px]"
      >
        <div className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] motion-reduce:![transform:none]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition duration-300 ease-out group-hover/card:[transform:translate(var(--px,0px),var(--py,0px))_scale(1.18)]',
              xray && 'brightness-[.65] contrast-110 grayscale'
            )}
          />

          {product.image2 && (
            <img
              src={product.image2}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            />
          )}

          {/* Hotspots */}
          <div
            className={cn(
              'pointer-events-none absolute inset-0 transition-opacity duration-300',
              xray ? 'opacity-100' : 'opacity-0'
            )}
          >
            {product.hotspots.map((h) => (
              <b
                key={h.label}
                className="absolute"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <i className="-ml-1.5 -mt-1.5 block h-3 w-3 animate-ping-red rounded-full bg-nexus" />
                <span
                  className={cn(
                    'absolute top-1/2 -translate-y-1/2 whitespace-nowrap border border-line bg-ink/90 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-white',
                    h.x > 55 ? 'right-3' : 'left-3'
                  )}
                >
                  {h.label}
                </span>
              </b>
            ))}
          </div>
        </div>

        {/* Category label */}
        <span className="absolute left-3 top-3 z-10 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-widest text-white">
          {product.category}
        </span>

        {/* Raio-X Button */}
        <button
          aria-pressed={xray}
          onClick={() => setXray((v) => !v)}
          className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 border border-line bg-black/70 px-2 py-1.5 text-[10px] uppercase tracking-widest text-white transition hover:border-nexus hover:text-nexus cursor-pointer"
        >
          <span className="text-nexus">◎</span> Raio-X
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-[.25em] text-muted">
          {product.collection} · {product.pieces}
          {product.gsm ? ` · ${product.gsm} GSM` : ''}
        </p>
        <h3 className="font-display text-sm font-extrabold tracking-tight text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-muted">
          {product.price != null ? (
            <>
              <span className="text-white">{formatBRL(product.price)}</span>
              {product.compareAt && (
                <span className="ml-2 line-through">{formatBRL(product.compareAt)}</span>
              )}
            </>
          ) : (
            'Consulte o preço'
          )}
        </p>

        {product.sizes && (
          <p className="text-[10px] uppercase tracking-widest text-muted">
            Tam: {product.sizes.join(' · ')}
          </p>
        )}

        <button
          onClick={handleAdd}
          className={cn(
            'mt-4 w-full border border-line py-3 text-[11px] uppercase tracking-[.18em] transition duration-300 hover:border-nexus hover:bg-nexus hover:text-white cursor-pointer text-white',
            added && 'animate-pulse-ok border-white bg-white text-ink hover:border-white hover:bg-white'
          )}
        >
          {added ? 'ADICIONADO ✓' : 'Adicionar à sacola'}
        </button>
      </div>
    </article>
  );
};
