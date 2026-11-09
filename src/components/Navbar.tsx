import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { Logo } from './Logo';
import { useStore } from '../context/StoreContext';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const { count, bump, setCartOpen, menuOpen, setMenuOpen, query, setQuery } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    ['Início', '#top'],
    ['Novidades', '#novidades'],
    ['Coleção', '#colecao'],
    ['Acessórios', '#acessorios'],
    ['Sobre Nós', '#sobre'],
    ['Loja', '#loja'],
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Mobile menu trigger */}
          <button
            className="-ml-2 p-2 md:hidden text-white cursor-pointer"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Logo className="text-[1.15rem] max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2" />

          {/* Desktop Nav */}
          <nav className="hidden gap-10 text-xs uppercase tracking-[.2em] md:flex text-white">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="link-u">
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              className="p-2 text-white hover:text-nexus transition-colors cursor-pointer"
              aria-label="Buscar"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search size={22} strokeWidth={1.5} />
            </button>

            <button
              className="relative p-2 text-white hover:text-nexus transition-colors cursor-pointer"
              aria-label="Abrir sacola"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
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
          <div className="border-t border-line">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar peças…"
                className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-neutral-500"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fullscreen Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-ink p-6">
          <button
            className="self-end p-2 text-white cursor-pointer"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <nav className="mt-8 flex flex-col gap-6 font-display text-4xl font-extrabold text-white">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-nexus transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
