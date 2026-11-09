import React from 'react';
import { Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
  const items = [
    {
      Icon: Truck,
      title: 'ENVIO RÁPIDO',
      text: 'Para todo o Brasil, com rastreio em tempo real.',
    },
    {
      Icon: ShieldCheck,
      title: 'PAGAMENTO SEGURO',
      text: 'Pix, cartão em até 6x e checkout criptografado.',
    },
    {
      Icon: Sparkles,
      title: 'EDIÇÃO LIMITADA',
      text: 'Peças numeradas, alta durabilidade e sem reposição.',
    },
  ];

  return (
    <section id="sobre" className="border-y border-line bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 text-center md:grid-cols-3 md:px-8 md:text-left">
        {items.map(({ Icon, title, text }, idx) => (
          <Reveal key={title} delay={idx * 0.1}>
            <Icon size={32} strokeWidth={1.3} className="mx-auto mb-4 text-silver md:mx-0" />
            <h3 className="font-display text-lg font-extrabold text-white">{title}</h3>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
