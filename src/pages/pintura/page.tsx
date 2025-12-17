import { useEffect } from 'react';

export default function PinturaPage() {
  useEffect(() => {
    document.title = 'Serviços de Pintura em Lisboa | Serralheria Bernardo\'s';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A Serralheria Bernardo\'s disponibiliza serviços profissionais de pintura em Lisboa, tanto para interiores como para exteriores.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A Serralheria Bernardo\'s disponibiliza serviços profissionais de pintura em Lisboa, tanto para interiores como para exteriores.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serralheria Bernardo's - Serviços de Pintura",
    "description": "Serviços de pintura em Lisboa. Pintura interior e exterior de casas, apartamentos, lojas e escritórios.",
    "url": "https://serralheriabernardos.pt/pintura",
    "telephone": "+351968747769",
    "email": "geral@serralheriabernardos.pt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "serviceType": "Pintura Interior e Exterior"
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
              src="https://i.ibb.co/vgRp9Fk/Chat-GPT-Image-13-de-nov-de-2025-16-16-09.png"
              alt="Serviços de Pintura Profissional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Serviços de Pintura em Lisboa
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  A Serralheria Bernardo's disponibiliza serviços profissionais de pintura em Lisboa, tanto para interiores como para exteriores, destinados a habitações, apartamentos, lojas, escritórios e condomínios.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Serviços%20de%20Pintura" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#B8860B] rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 text-base sm:text-lg shadow-xl"
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
                  A <strong>Serralheria Bernardo's</strong> disponibiliza serviços profissionais de pintura em Lisboa, tanto para interiores como para exteriores, destinados a habitações, apartamentos, lojas, escritórios e condomínios. Um bom trabalho de pintura melhora a estética, protege as superfícies e valoriza o imóvel.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Realizamos pintura de paredes, tetos, fachadas, estruturas metálicas e outros elementos, garantindo sempre uma preparação adequada das superfícies. Antes da pintura, procedemos à limpeza, correção de imperfeições, lixagem e aplicação de primários quando necessário, assegurando um acabamento uniforme e duradouro.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Os nossos serviços de pintura em Lisboa utilizam materiais de qualidade e técnicas adequadas a cada tipo de superfície, respeitando o espaço do cliente e mantendo o local organizado durante todo o processo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A Serralheria Bernardo's atua em toda a região de Lisboa, cumprindo prazos e assegurando um serviço limpo, rigoroso e profissional. Se pretende renovar o aspeto do seu espaço com uma pintura bem executada, conte connosco para um resultado final de qualidade e confiança.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: 'ri-home-4-line', title: 'Pintura Interior', desc: 'Pintura de paredes, tetos e interiores' },
                  { icon: 'ri-building-line', title: 'Pintura Exterior', desc: 'Pintura de fachadas e exteriores' },
                  { icon: 'ri-paint-brush-line', title: 'Preparação de Superfícies', desc: 'Limpeza, correção e lixagem profissional' },
                  { icon: 'ri-shield-check-line', title: 'Acabamentos de Qualidade', desc: 'Resultado uniforme e duradouro' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full mb-4">
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

        <section className="py-20 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">Solicite o Seu Orçamento Grátis</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Entre em contacto connosco hoje e receba um orçamento personalizado para serviços de pintura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Serviços%20de%20Pintura" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white text-[#B8860B] rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-3 text-lg shadow-xl"
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
