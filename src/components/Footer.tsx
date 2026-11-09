import React, { useState } from 'react';
import { Logo } from './Logo';
import { INSTAGRAM_URL } from '../lib/utils';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const linkClass = 'block hover:underline text-white';
  const headingClass = 'mb-4 text-xs uppercase tracking-[.3em] text-muted';

  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-4">
        {/* Brand & Newsletter */}
        <div className="md:col-span-2">
          <Logo className="text-3xl items-start" />
          <p className="mt-4 max-w-sm text-sm text-muted">
            Cadastre-se para drops exclusivos e ganhe 10% OFF na primeira compra.
          </p>
          {subscribed ? (
            <p className="mt-5 text-xs text-silver">
              Você está na lista. Cupom enviado por e-mail.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 flex max-w-sm border border-line">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500"
              />
              <button className="bg-white px-5 text-xs font-bold uppercase tracking-widest text-ink cursor-pointer hover:bg-neutral-200 transition-colors">
                Entrar
              </button>
            </form>
          )}
        </div>

        {/* Atendimento */}
        <div className="space-y-3 text-sm">
          <h4 className={headingClass}>Atendimento</h4>
          <a className={linkClass} href="#loja">Fale conosco</a>
          <a className={linkClass} href="#loja">Trocas e devoluções</a>
          <a className={linkClass} href="#loja">Termos de serviço</a>
          <a className={linkClass} href="#loja">Política de privacidade</a>
        </div>

        {/* Social */}
        <div className="space-y-3 text-sm">
          <h4 className={headingClass}>Social</h4>
          <a className={linkClass} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram @_nexus.wear
          </a>
          <span className="block text-muted cursor-not-allowed">TikTok (Em breve)</span>
          <p className="pt-3 text-xs leading-relaxed text-muted">
            Loja física<br />
            R. da Independência, 205<br />
            Centro, Jarinu — SP
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row">
        <span>© 2026 NEXUS Wear. Todos os direitos reservados. Feito no Brasil.</span>
        <span className="flex gap-2 uppercase tracking-widest">
          {['Pix', 'Visa', 'Master', 'SSL'].map((item) => (
            <b key={item} className="border border-line px-2 py-1 font-medium text-white">
              {item}
            </b>
          ))}
        </span>
      </div>
    </footer>
  );
};
