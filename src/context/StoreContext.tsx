import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Product, PRODUCTS } from '../data/products';

export interface CartLine {
  product: Product;
  qty: number;
}

interface StoreContextType {
  lines: CartLine[];
  count: number;
  total: number | null;
  bump: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  query: string;
  setQuery: (q: string) => void;
  toast: string;
  notify: (msg: string) => void;
  add: (product: Product) => void;
  changeQty: (productId: number, delta: number) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('nexus_wear_cart_map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bump, setBump] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nexus_wear_cart_map', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 1800);
  }, []);

  const add = useCallback((product: Product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] ?? 0) + 1,
    }));
    setBump((prev) => prev + 1);
    setCartOpen(true);
    notify(`${product.name} adicionado`);
  }, [notify]);

  const changeQty = useCallback((productId: number, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] ?? 0;
      const nextVal = current + delta;
      const clone = { ...prev };
      delete clone[productId];
      return nextVal > 0 ? { ...clone, [productId]: nextVal } : clone;
    });
  }, []);

  const lines = useMemo(() => {
    return PRODUCTS.filter((p) => cart[p.id]).map((p) => ({
      product: p,
      qty: cart[p.id],
    }));
  }, [cart]);

  const count = useMemo(() => {
    return lines.reduce((acc, l) => acc + l.qty, 0);
  }, [lines]);

  const total = useMemo(() => {
    if (!lines.length) return null;
    const allHavePrice = lines.every((l) => l.product.price != null);
    if (!allHavePrice) return null;
    return lines.reduce((acc, l) => acc + l.qty * (l.product.price ?? 0), 0);
  }, [lines]);

  return (
    <StoreContext.Provider
      value={{
        lines,
        count,
        total,
        bump,
        cartOpen,
        setCartOpen,
        menuOpen,
        setMenuOpen,
        query,
        setQuery,
        toast,
        notify,
        add,
        changeQty,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('useStore deve ser usado dentro de <StoreProvider>');
  }
  return ctx;
};
