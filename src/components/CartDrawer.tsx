import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { cn, formatBRL, INSTAGRAM_URL } from '../lib/utils';

export const CartDrawer: React.FC = () => {
  const { lines, total, cartOpen, setCartOpen, changeQty, notify } = useStore();

  const handleCheckout = () => {
    const text =
      `Olá! Quero reservar:\n` +
      lines.map((l) => `${l.qty}x ${l.product.name}`).join(`\n`);

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => notify('Pedido copiado — cole no direct'))
        .catch(() => {});
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setCartOpen(false)}
        className={cn(
          'fixed inset-0 z-[80] bg-black/70 transition-opacity duration-300',
          cartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      {/* Aside Drawer */}
      <aside
        aria-hidden={!cartOpen}
        className={cn(
          'fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col bg-graphite transition-transform duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)]',
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line p-5">
          <h3 className="font-display text-xl font-extrabold text-white">SACOLA</h3>
          <button
            aria-label="Fechar sacola"
            onClick={() => setCartOpen(false)}
            className="text-white hover:text-nexus transition-colors cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          {lines.length === 0 && (
            <p className="mt-10 text-center text-sm text-muted">Sua sacola está vazia.</p>
          )}

          {lines.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[4/5] w-20 shrink-0 object-cover bg-ink"
              />
              <div className="flex-1 text-sm">
                <b className="font-display text-white block">{product.name}</b>
                <div className="text-muted">
                  {product.price != null ? formatBRL(product.price) : 'Consulte o preço'}
                </div>
                <div className="mt-2 flex items-center gap-3 text-white">
                  <button
                    className="border border-line px-2 py-1 hover:border-white transition-colors cursor-pointer"
                    onClick={() => changeQty(product.id, -1)}
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button
                    className="border border-line px-2 py-1 hover:border-white transition-colors cursor-pointer"
                    onClick={() => changeQty(product.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-line p-5">
          <div className="mb-4 flex justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <b className="text-white">
              {total != null ? formatBRL(total) : lines.length ? 'Sob consulta' : formatBRL(0)}
            </b>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCheckout}
            className="btn-outline block bg-white py-4 text-center text-xs font-bold uppercase text-ink hover:bg-nexus hover:text-white transition cursor-pointer"
          >
            Finalizar pelo direct
          </a>
        </div>
      </aside>
    </>
  );
};
