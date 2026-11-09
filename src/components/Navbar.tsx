import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { useStore } from '../context/StoreContext';
import { INSTAGRAM_URL, cn } from '../lib/utils';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const {
    totalCartCount,
    setIsCartOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    cartBounceKey,
  } = useStore();

  const [isScrolled] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Início', target: 'hero' },
    { label: 'Novidades', target: 'products' },
    { label: 'Coleção', target: 'lookbook' },
    { label: 'Acessórios', target: 'products' },
    { label: 'Sobre Nós', target: 'about' },
    { label: 'Loja Física', target: 'store-location' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]/80',
          isScrolled ? 'py-2 shadow-2xl shadow-black/80' : 'py-3'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-8 h-12 md:h-14">
            
            {/* Zone 1: Brand Wordmark / Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="group flex items-center gap-2 focus:outline-none shrink-0"
              aria-label="NEXUS WEAR Home"
            >
              <Logo variant="horizontal" size="md" className="group-hover:opacity-90 transition-opacity" />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#C9CCD1]">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  className="hover:text-white transition-colors py-1 relative group focus:outline-none"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E4161C] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Zone 3: Actions (Search, Cart & Mobile Trigger) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  'p-2.5 rounded-lg text-[#C9CCD1] hover:text-white hover:bg-[#161616] transition-colors focus:outline-none',
                  isSearchOpen && 'text-[#E4161C] bg-[#161616]'
                )}
                aria-label="Buscar produtos"
                title="Filtrar produtos"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Bag with bounce badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-lg text-[#C9CCD1] hover:text-white hover:bg-[#161616] transition-colors focus:outline-none group"
                aria-label="Abrir sacola de compras"
              >
                <ShoppingBag className="w-5 h-5 group-hover:text-white transition-colors" />
                {totalCartCount > 0 && (
                  <span
                    key={cartBounceKey}
                    className="absolute -top-1 -right-1 bg-[#E4161C] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-cart-bounce shadow-md shadow-[#E4161C]/40 tabular-nums"
                  >
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-lg text-[#C9CCD1] hover:text-white hover:bg-[#161616] transition-colors focus:outline-none"
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown / Filter Bar */}
          {isSearchOpen && (
            <div className="py-3 border-t border-[#2A2A2A] mt-2 animate-fadeIn">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9A9A]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por peça, conjunto ou categoria (ex: tricô, denim, jersey)..."
                  className="w-full bg-[#161616] border border-[#2A2A2A] rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder-[#9A9A9A] focus:outline-none focus:border-[#E4161C] transition-colors"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9A9A9A] hover:text-white"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col justify-between p-6 animate-fadeIn lg:hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
            <Logo variant="horizontal" size="sm" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#C9CCD1] hover:text-white focus:outline-none"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 my-auto">
            <span className="text-[11px] font-mono tracking-widest text-[#9A9A9A] uppercase">
              Navegação // DROP 05
            </span>
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="text-left text-2xl font-extrabold tracking-tight font-syne text-[#C9CCD1] hover:text-[#E4161C] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#9A9A9A] group-hover:text-[#E4161C]">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-6 border-t border-[#2A2A2A] flex flex-col gap-3">
            <p className="text-xs text-[#9A9A9A]">
              Jarinu, SP — R. da Independência, 205 — Centro
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-xs font-semibold text-white bg-[#161616] p-3 rounded-lg border border-[#2A2A2A] hover:border-[#E4161C] transition-colors"
            >
              <span>Acompanhe @_nexus.wear no Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-[#E4161C]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
