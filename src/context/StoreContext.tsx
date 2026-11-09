import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductCategory } from '../data/products';
import { INSTAGRAM_URL } from '../lib/utils';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ToastInfo {
  id: number;
  message: string;
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  totalCartCount: number;
  cartSubtotal: number | null;
  hasPriceOnAllItems: boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  selectedCategory: ProductCategory | 'Todos';
  setSelectedCategory: (cat: ProductCategory | 'Todos') => void;
  toasts: ToastInfo[];
  showToast: (message: string) => void;
  checkoutViaInstagram: () => void;
  cartBounceKey: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('nexus_wear_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Todos'>('Todos');
  const [toasts, setToasts] = useState<ToastInfo[]>([]);
  const [cartBounceKey, setCartBounceKey] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem('nexus_wear_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Trigger bag icon animation & feedback
    setCartBounceKey((prev) => prev + 1);
    showToast(`"${product.name}" adicionado à sacola!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removido da sacola.');
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const hasPriceOnAllItems = cart.length > 0 && cart.every((item) => typeof item.product.price === 'number');
  const cartSubtotal = hasPriceOnAllItems
    ? cart.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0)
    : null;

  const checkoutViaInstagram = () => {
    if (cart.length === 0) return;

    let summary = `Olá NEXUS WEAR! Vim pelo site da marca e gostaria de consultar/adquirir os seguintes itens:\n\n`;
    cart.forEach((item, index) => {
      const priceText = item.product.price ? `R$ ${item.product.price.toFixed(2)}` : 'Preço sob consulta';
      summary += `${index + 1}. ${item.quantity}x ${item.product.name} (${item.product.category})\n   ${item.product.pieces}\n   ${priceText}\n\n`;
    });

    summary += `Total de peças: ${totalCartCount}\nLocal de retirada ou entrega: Jarinu, SP / Envio nacional`;

    // Copy to clipboard
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumo copiado! Cole no direct da NEXUS WEAR.');
      }).catch(() => {
        showToast('Abrindo Instagram @_nexus.wear...');
      });
    } else {
      showToast('Abrindo Instagram @_nexus.wear...');
    }

    // Open Instagram in new window
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCartCount,
        cartSubtotal,
        hasPriceOnAllItems,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        selectedCategory,
        setSelectedCategory,
        toasts,
        showToast,
        checkoutViaInstagram,
        cartBounceKey,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
