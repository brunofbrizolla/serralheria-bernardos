import { useEffect } from 'react';

export default function RemodelacoesPage() {
  useEffect(() => {
    document.title = 'Remodelações Gerais em Lisboa | Serralheria Bernardo\'s';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A Serralheria Bernardo\'s presta serviços profissionais de remodelações gerais em Lisboa, ajudando a renovar, modernizar e valorizar espaços residenciais e comerciais.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A Serralheria Bernardo\'s presta serviços profissionais de remodelações gerais em Lisboa, ajudando a renovar, modernizar e valorizar espaços residenciais e comerciais.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serralheria Bernardo's - Remodelações Gerais",
    "description": "Remodelações gerais em Lisboa. Execução de remodelações parciais ou completas em interiores e exteriores.",
    "url": "https://serralheriabernardos.pt/remodelacoes",
    "telephone": "+351968747769",
    "email": "geral@serralheriabernardos.pt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "serviceType": "Remodelações Gerais"
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
              src="https://i.ibb.co/Ps0XLvHs/REMODELA-OAO.jpg"
              alt="Remodelações Gerais Profissionais"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Remodelações Gerais em Lisboa
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  A Serralheria Bernardo's presta serviços profissionais de remodelações gerais em Lisboa, ajudando a renovar, modernizar e valorizar espaços residenciais e comerciais.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Remodelações%20Gerais" 
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
                  A <strong>Serralheria Bernardo's</strong> presta serviços profissionais de remodelações gerais em Lisboa, ajudando a renovar, modernizar e valorizar espaços residenciais e comerciais. Executamos remodelações parciais ou completas, adaptadas às necessidades de cada cliente, sempre com foco na funcionalidade, qualidade e bom acabamento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As remodelações podem incluir renovação de interiores, melhoria de espaços existentes, alterações estruturais simples e coordenação de diferentes trabalhos, como serralharia, pintura, pladur e eletricidade. A nossa equipa acompanha todo o processo, desde a avaliação inicial até à conclusão da obra.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  O serviço de remodelações em Lisboa é ideal para quem pretende atualizar casas, apartamentos, lojas ou escritórios, corrigir desgastes do tempo ou adaptar os espaços a novas necessidades. Trabalhamos de forma organizada, cumprindo prazos e reduzindo ao máximo os incómodos durante a execução.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A Serralheria Bernardo's atua em toda a região de Lisboa, oferecendo soluções práticas, duradouras e ajustadas ao orçamento do cliente. Se procura uma empresa de confiança para remodelações gerais, conte connosco para transformar o seu espaço com profissionalismo e atenção ao detalhe.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: 'ri-home-4-line', title: 'Remodelação de Interiores', desc: 'Renovação completa de espaços interiores' },
                  { icon: 'ri-building-line', title: 'Remodelação de Exteriores', desc: 'Melhoria de fachadas e espaços exteriores' },
                  { icon: 'ri-tools-line', title: 'Coordenação de Obras', desc: 'Coordenação de diferentes trabalhos e especialidades' },
                  { icon: 'ri-time-line', title: 'Cumprimento de Prazos', desc: 'Trabalhos organizados e dentro do prazo' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-bernardos-red to-bernardos-red-dark rounded-full mb-4">
                      <i className={`${item.icon} text-3xl text-white`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
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
              Entre em contacto connosco hoje e receba um orçamento personalizado para remodelações gerais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Remodelações%20Gerais" 
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
