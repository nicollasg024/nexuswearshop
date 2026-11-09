import React from 'react';
import { X, Plus, Minus, Trash2, ArrowUpRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatBRL, cn } from '../lib/utils';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCartCount,
    cartSubtotal,
    hasPriceOnAllItems,
    checkoutViaInstagram,
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0A0A0A] border-l border-[#2A2A2A] text-white flex flex-col justify-between shadow-2xl animate-slideLeft">
          
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-[#2A2A2A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E4161C]" />
              <h2 className="text-base sm:text-lg font-bold font-syne uppercase tracking-wider">
                Sua Sacola
              </h2>
              <span className="text-xs font-mono text-[#9A9A9A] tabular-nums">
                ({totalCartCount} {totalCartCount === 1 ? 'item' : 'itens'})
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#9A9A9A] hover:text-white rounded-sm hover:bg-[#161616] transition-colors focus:outline-none"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-[#2A2A2A]">
            {cart.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-[#2A2A2A] mb-4" />
                <p className="text-sm font-syne text-[#C9CCD1] uppercase tracking-wider mb-2">
                  Sua sacola está vazia
                </p>
                <p className="text-xs text-[#9A9A9A] max-w-xs mb-6">
                  Explore os conjuntos do Drop 05 e garanta suas peças exclusivas.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#161616] border border-[#2A2A2A] hover:border-[#E4161C] text-xs font-bold text-white uppercase tracking-wider transition-colors"
                >
                  Ver Lançamentos
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-[#161616] border border-[#2A2A2A] rounded-sm overflow-hidden shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs font-bold font-syne text-white uppercase leading-snug">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#9A9A9A] hover:text-[#E4161C] transition-colors p-1"
                          aria-label={`Remover ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#9A9A9A] block mt-0.5">
                        {item.product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#2A2A2A] bg-[#161616] rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1.5 text-[#9A9A9A] hover:text-white transition-colors"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-mono font-bold text-white tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1.5 text-[#9A9A9A] hover:text-white transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Item Price */}
                      <div className="text-right">
                        {typeof item.product.price === 'number' ? (
                          <span className="text-xs font-bold font-mono text-white tabular-nums">
                            {formatBRL(item.product.price * item.quantity)}
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-[#C9CCD1] uppercase">
                            Sob consulta
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Subtotal & Actions */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#2A2A2A] bg-[#161616]">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-syne uppercase tracking-wider text-[#C9CCD1]">
                  Subtotal
                </span>
                <span className="text-sm font-bold font-mono text-white tabular-nums">
                  {hasPriceOnAllItems && cartSubtotal !== null
                    ? formatBRL(cartSubtotal)
                    : 'Sob consulta'}
                </span>
              </div>

              <p className="text-[11px] text-[#9A9A9A] leading-tight mb-4">
                Ao finalizar, o resumo do seu pedido será copiado automaticamente para você enviar no Direct do Instagram da loja com atendimento prioritário.
              </p>

              {/* Instagram Direct Checkout CTA */}
              <button
                onClick={checkoutViaInstagram}
                className="w-full py-3.5 px-4 bg-[#E4161C] hover:bg-[#c30f14] text-white text-xs font-bold tracking-widest uppercase transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E4161C]/30 focus:outline-none mb-3"
              >
                <span>Finalizar pelo Direct</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={clearCart}
                className="w-full py-2 text-[11px] font-mono text-[#9A9A9A] hover:text-white transition-colors uppercase tracking-wider"
              >
                Esvaziar sacola
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
