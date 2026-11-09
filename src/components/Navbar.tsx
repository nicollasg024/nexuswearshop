import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { useStore } from '../context/StoreContext';
import { cn, INSTAGRAM_URL } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { count, bump, setCartOpen, menuOpen, setMenuOpen, query, setQuery } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    ['Início', '#top'],
    ['Novidades', '#novidades'],
    ['Coleção', '#colecao'],
    ['Acessórios', '#acessorios'],
    ['Sobre Nós', '#sobre'],
    ['Loja Física', '#loja'],
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Mobile menu trigger */}
          <button
            className="-ml-2 p-2.5 md:hidden text-white hover:text-nexus transition-colors cursor-pointer focus:outline-none"
            aria-label="Abrir menu de navegação"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>

          {/* Logo */}
          <Logo className="text-[1.15rem] max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2" />

          {/* Desktop Nav */}
          <nav className="hidden gap-9 text-xs uppercase tracking-[.2em] md:flex text-white">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="link-u">
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              className="p-2 text-white hover:text-nexus transition-colors cursor-pointer"
              aria-label="Buscar"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              className="relative p-2 text-white hover:text-nexus transition-colors cursor-pointer"
              aria-label="Abrir sacola"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span
                key={bump}
                className={cn(
                  'absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-nexus text-[10px] font-bold text-white',
                  bump > 0 && 'animate-bump'
                )}
              >
                {count}
              </span>
            </button>
          </div>
        </div>

        {/* Quick Search */}
        {searchOpen && (
          <div className="border-t border-line bg-graphite/95">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar peças, tecidos ou categorias…"
                className="w-full bg-transparent py-1.5 text-sm text-white outline-none placeholder:text-neutral-500"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer (Compact, refined typography for mobile screens) */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col justify-between bg-ink/95 backdrop-blur-xl p-5 md:hidden animate-fadeIn">
          {/* Header row in mobile menu */}
          <div className="flex items-center justify-between border-b border-line pb-4">
            <Logo className="text-base items-start" />
            <button
              className="p-2 text-white hover:text-nexus transition-colors cursor-pointer"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links - Compact, readable, touch-friendly */}
          <nav className="my-auto flex flex-col divide-y divide-line/40 py-4">
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase pb-2">
              Menu // Navegação
            </span>
            {navLinks.map(([label, href], idx) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-base font-bold font-display uppercase tracking-wider text-white hover:text-nexus transition-colors active:text-nexus"
              >
                <span>{label}</span>
                <span className="text-[10px] font-mono text-muted">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          {/* Bottom quick details */}
          <div className="pt-4 border-t border-line flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>Jarinu, SP — R. da Independência, 205</span>
              <span className="text-nexus font-mono">DROP 05</span>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border border-line bg-graphite text-xs font-bold uppercase tracking-wider text-white hover:border-nexus transition-colors rounded-sm"
            >
              <span>Instagram @_nexus.wear</span>
              <ArrowUpRight size={14} className="text-nexus" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
