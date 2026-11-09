import React from 'react';
import { Truck, ShieldCheck, Crown } from 'lucide-react';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
  const items = [
    {
      icon: Truck,
      title: 'Envio Rápido para Todo o País',
      description: 'Logística ágil e rastreada com embalagem reforçada para qualquer região do Brasil.',
    },
    {
      icon: ShieldCheck,
      title: 'Pagamento Seguro',
      description: 'Facilidade com Pix imediato e parcelamento no cartão de crédito em até 6x.',
    },
    {
      icon: Crown,
      title: 'Edição Limitada',
      description: 'Peças exclusivas produzidas em tiragens estritas para manter sua autenticidade e raridade.',
    },
  ];

  return (
    <section className="py-16 bg-[#161616] border-t border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delayMs={idx * 150}>
                <div className="flex flex-col items-start p-6 bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm hover:border-[#E4161C]/50 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-sm bg-[#161616] border border-[#2A2A2A] flex items-center justify-center text-[#E4161C] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white font-syne uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
