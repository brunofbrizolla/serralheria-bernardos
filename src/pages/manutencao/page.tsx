import { useEffect } from 'react';

export default function ManutencaoPage() {
  useEffect(() => {
    document.title = 'Manutenção e Reparações em Lisboa | Serralheria Bernardo\'s';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade, ideais para imóveis habitados, lojas e condomínios.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade, ideais para imóveis habitados, lojas e condomínios.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serralheria Bernardo's - Manutenção e Reparações",
    "description": "Manutenção e reparações em Lisboa. Pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade.",
    "url": "https://serralheriabernardos.pt/manutencao",
    "telephone": "+351968747769",
    "email": "geral@serralheriabernardos.pt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "serviceType": "Manutenção e Reparações"
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="min-h-screen">
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://i.ibb.co/MDjmnWtL/5-11zon-1.jpg"
              alt="Manutenção e Reparações Profissionais"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Manutenção e Reparações em Lisboa
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  Pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade, ideais para imóveis habitados, lojas e condomínios.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Manutenção%20e%20Reparações" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-bernardos-red rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 text-base sm:text-lg shadow-xl"
                  >
                    <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
                    <span className="hidden sm:inline">Solicitar Orçamento Grátis</span>
                    <span className="sm:hidden">Orçamento Grátis</span>
                  </a>
                  <a 
                    href="tel:+351968747769"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 border-2 border-white/30 text-base sm:text-lg"
                  >
                    <i className="ri-phone-line text-xl sm:text-2xl"></i>
                    Ligar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong>Serralheria Bernardo's</strong> oferece serviços de manutenção e reparações em Lisboa, ideais para imóveis habitados, lojas e condomínios. Realizamos pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade, sempre com foco na rapidez, qualidade e mínimo incómodo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Os nossos serviços de manutenção incluem reparação de portões, grades e estruturas metálicas, correção de problemas em pintura, reparação de pladur e trabalhos elétricos de pequena dimensão. Trabalhamos de forma eficiente, respeitando o espaço do cliente e minimizando os incómodos durante a execução.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A Serralheria Bernardo's atua em toda a região de Lisboa, oferecendo resposta rápida para trabalhos de manutenção e reparação. Se precisa de uma reparação urgente ou de manutenção preventiva, conte connosco para um serviço profissional e eficiente.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  { 
                    icon: 'ri-tools-line', 
                    title: 'Reparação de Estruturas', 
                    desc: 'Reparação de portões, grades e estruturas metálicas em imóveis habitados, lojas e condomínios. Trabalhos realizados com rapidez e qualidade, garantindo a funcionalidade e segurança das estruturas metálicas com mínimo incómodo.' 
                  },
                  { 
                    icon: 'ri-paint-brush-line', 
                    title: 'Reparação de Pintura', 
                    desc: 'Correção de problemas em pintura, incluindo retoques, correção de imperfeições e renovação de áreas danificadas. Trabalhos realizados com materiais de qualidade, garantindo um acabamento uniforme e duradouro.' 
                  },
                  { 
                    icon: 'ri-hammer-line', 
                    title: 'Reparação de Pladur', 
                    desc: 'Reparação de danos em pladur, incluindo correção de fissuras, substituição de painéis danificados e restauro de acabamentos. Trabalhos realizados com técnicas adequadas para garantir resistência e alinhamento perfeito.' 
                  },
                  { 
                    icon: 'ri-wire-line', 
                    title: 'Reparação Elétrica', 
                    desc: 'Trabalhos elétricos de pequena dimensão, incluindo substituição de tomadas, interruptores, reparação de circuitos e correção de problemas elétricos. Serviços realizados com segurança e cumprimento das normas.' 
                  },
                  { 
                    icon: 'ri-time-line', 
                    title: 'Resposta Rápida', 
                    desc: 'Serviço rápido e eficiente para trabalhos de manutenção e reparação urgente. Atuamos em toda a região de Lisboa, oferecendo resposta rápida para garantir a funcionalidade do seu espaço no menor tempo possível.' 
                  },
                  { 
                    icon: 'ri-home-4-line', 
                    title: 'Mínimo Incómodo', 
                    desc: 'Trabalhos realizados com mínimo incómodo para imóveis habitados, lojas e condomínios. Trabalhamos de forma organizada e eficiente, respeitando o espaço do cliente e minimizando os incómodos durante a execução dos trabalhos.' 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-bernardos-red to-bernardos-red-dark rounded-full mb-4">
                      <i className={`${item.icon} text-3xl text-white`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">Solicite o Seu Orçamento Grátis</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Entre em contacto connosco hoje e receba um orçamento personalizado para manutenção e reparações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Manutenção%20e%20Reparações" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-bernardos-red rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-3 text-lg shadow-xl"
              >
                <i className="ri-whatsapp-line text-2xl"></i>
                WhatsApp - Orçamento Grátis
              </a>
              <a 
                href="tel:+351968747769"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-3 border border-white/20 text-lg"
              >
                <i className="ri-phone-line text-2xl"></i>
                Ligar: 968 747 769
              </a>
            </div>
            <p className="mt-6 text-sm text-white/75">
              ✉️ geral@serralheriabernardos.pt | 📍 Lisboa e Região
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
