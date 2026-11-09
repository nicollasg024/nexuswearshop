import React, { useState } from 'react';
import { Logo } from './Logo';
import { INSTAGRAM_URL, cn } from '../lib/utils';
import { ArrowUpRight, Check, ShieldCheck, CreditCard, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
    }
  };

  const supportPolicies = {
    faleConosco: {
      title: 'Fale Conosco // Atendimento',
      body: 'Nosso canal principal de suporte e consultoria de estilo é o direct do Instagram @_nexus.wear e atendimento presencial em nossa flagship store em Jarinu, SP.',
    },
    trocas: {
      title: 'Trocas e Devoluções',
      body: 'Garantimos 7 dias após o recebimento para troca ou devolução sem complicações. As peças devem estar com etiquetas intactas e sem marcas de uso.',
    },
    termos: {
      title: 'Termos de Serviço',
      body: 'Todas as peças NEXUS WEAR são produzidas sob rigoroso controle de qualidade e tiragens estritas. Os pedidos estão sujeitos à disponibilidade do estoque.',
    },
    privacidade: {
      title: 'Política de Privacidade',
      body: 'Seus dados de navegação e contato são protegidos com criptografia SSL 256-bit e utilizados unicamente para processamento de entregas e avisos de lançamentos de drops.',
    },
  };

  return (
    <>
      <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Newsletter Strip */}
          <div className="pb-16 border-b border-[#2A2A2A]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <span className="text-[11px] font-mono tracking-widest text-[#E4161C] uppercase block mb-2">
                  // EXCLUSIVIDADE &amp; COMUNIDADE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-syne uppercase tracking-tight mb-2">
                  Cadastre-se para drops exclusivos e ganhe 10% OFF
                </h3>
                <p className="text-xs text-[#9A9A9A] max-w-md">
                  Seja o primeiro a saber das novas coleções limitadas e receba acesso antecipado antes que esgote.
                </p>
              </div>

              <div className="lg:col-span-6">
                {isSubscribed ? (
                  <div className="p-4 bg-[#161616] border border-[#E4161C] rounded-sm flex items-center gap-3 animate-fadeIn">
                    <div className="w-8 h-8 rounded-full bg-[#E4161C] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-syne uppercase text-white block">
                        Inscrição confirmada!
                      </span>
                      <p className="text-xs text-[#C9CCD1]">
                        Use o código <strong className="text-[#E4161C] font-mono">NEXUS10</strong> no seu primeiro pedido.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail..."
                      required
                      className="flex-1 bg-[#161616] border border-[#2A2A2A] rounded-sm px-4 py-3 text-xs text-white placeholder-[#9A9A9A] focus:outline-none focus:border-[#E4161C] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#E4161C] hover:bg-[#c30f14] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none shrink-0"
                    >
                      <span>Cadastrar</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Main Footer Links & Info */}
          <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Logo variant="stacked" size="md" className="items-start text-left mb-6" />
              <p className="text-xs text-[#9A9A9A] leading-relaxed max-w-sm mb-6">
                Marca independente de streetwear e techwear com base em Jarinu, SP. Silhuetas marcantes, cortes volumosos e acabamentos premium para quem dita seu próprio estilo.
              </p>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#161616] border border-[#2A2A2A] hover:border-[#E4161C] text-xs font-semibold text-[#C9CCD1] hover:text-white rounded-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram @_nexus.wear</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E4161C]" />
                </a>

                <span
                  title="TikTok oficial da NEXUS WEAR (Em breve)"
                  className="px-3 py-1.5 bg-[#161616] border border-[#2A2A2A] text-xs font-semibold text-[#9A9A9A] rounded-sm cursor-not-allowed"
                >
                  TikTok (Em breve)
                </span>
              </div>
            </div>

            {/* Col 2: Institutional */}
            <div className="lg:col-span-3">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
                Atendimento &amp; Suporte
              </span>
              <ul className="space-y-2.5 text-xs text-[#9A9A9A]">
                <li>
                  <button
                    onClick={() => setModalContent(supportPolicies.faleConosco)}
                    className="hover:text-white transition-colors"
                  >
                    Fale Conosco
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalContent(supportPolicies.trocas)}
                    className="hover:text-white transition-colors"
                  >
                    Trocas e Devoluções
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalContent(supportPolicies.termos)}
                    className="hover:text-white transition-colors"
                  >
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalContent(supportPolicies.privacidade)}
                    className="hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Physical Address */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
                Loja Física Oficial
              </span>
              <p className="text-xs text-[#C9CCD1] leading-relaxed mb-4">
                R. da Independência, 205 — Centro<br />
                Jarinu, SP — CEP 13240-000<br />
                <span className="text-[#9A9A9A] mt-1 block">Abre segunda às 09:00</span>
              </p>

              {/* Payment & Security Seals */}
              <div className="pt-4 border-t border-[#2A2A2A]">
                <span className="text-[10px] font-mono text-[#9A9A9A] uppercase tracking-wider block mb-2">
                  Formas de Pagamento &amp; Segurança
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 bg-[#161616] border border-[#2A2A2A] rounded-sm font-mono text-[11px] text-[#C9CCD1]">
                    PIX Instantâneo
                  </span>
                  <span className="px-2.5 py-1 bg-[#161616] border border-[#2A2A2A] rounded-sm font-mono text-[11px] text-[#C9CCD1]">
                    Visa
                  </span>
                  <span className="px-2.5 py-1 bg-[#161616] border border-[#2A2A2A] rounded-sm font-mono text-[11px] text-[#C9CCD1]">
                    Mastercard
                  </span>
                  <span className="px-2.5 py-1 bg-[#161616] border border-[#2A2A2A] rounded-sm font-mono text-[11px] text-[#C9CCD1] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E4161C]" />
                    <span>SSL 256-bit</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9A9A]">
            <p>© 2026 NEXUS WEAR. Todos os direitos reservados. Jarinu, SP.</p>
            <p className="font-mono text-[11px]">
              STREETWEAR CULTURE // BRAZIL
            </p>
          </div>

        </div>
      </footer>

      {/* Support Policy Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#161616] border border-[#2A2A2A] max-w-lg w-full p-6 rounded-sm shadow-2xl relative">
            <h3 className="text-lg font-bold font-syne text-white uppercase mb-3">
              {modalContent.title}
            </h3>
            <p className="text-xs text-[#C9CCD1] leading-relaxed mb-6">
              {modalContent.body}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full py-2.5 bg-[#E4161C] hover:bg-[#c30f14] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};
