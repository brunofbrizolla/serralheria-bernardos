import { useEffect } from 'react';

export default function PladurPage() {
  useEffect(() => {
    document.title = 'Pladur (Gesso Cartonado) em Lisboa | Serralheria Bernardo\'s';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A Serralheria Bernardo\'s presta serviços profissionais de pladur em Lisboa, oferecendo soluções práticas e modernas para remodelação e organização de espaços interiores.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A Serralheria Bernardo\'s presta serviços profissionais de pladur em Lisboa, oferecendo soluções práticas e modernas para remodelação e organização de espaços interiores.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serralheria Bernardo's - Pladur (Gesso Cartonado)",
    "description": "Pladur em Lisboa. Montagem de paredes, tetos falsos, divisórias e soluções em pladur para remodelações e reorganização de espaços.",
    "url": "https://serralheriabernardos.pt/pladur",
    "telephone": "+351968747769",
    "email": "geral@serralheriabernardos.pt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "serviceType": "Pladur, Gesso Cartonado, Divisórias e Tetos Falsos"
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png"
              alt="Montagem de Pladur Profissional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Pladur (Gesso Cartonado) em Lisboa
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  A Serralheria Bernardo's presta serviços profissionais de pladur em Lisboa, oferecendo soluções práticas e modernas para remodelação e organização de espaços interiores.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Pladur" 
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

        {/* Problem/Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-red-800 mb-4">O Problema com Espaços Desatualizados</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Divisórias desgastadas, tetos antigos e paredes com pouca proteção térmica ou acústica afetam a estética e o conforto do ambiente. 
                  Ignorar esses problemas pode resultar em gastos excessivos com energia, desvalorização do imóvel e insatisfação com o espaço.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-[#D4AF37] rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">A Solução: Montagem de Pladur Profissional</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong>Serralheria Bernardo's</strong> presta serviços profissionais de pladur em <strong>Lisboa</strong>, oferecendo soluções práticas e modernas para remodelação e organização de espaços interiores. O pladur, também conhecido como gesso cartonado, é ideal para criar divisórias, tetos falsos e revestimentos com rapidez, limpeza e excelente acabamento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Executamos montagem de paredes em pladur, tetos falsos, sancas, nichos e outras estruturas, permitindo dividir ambientes, melhorar o isolamento térmico e acústico e ocultar instalações elétricas ou canalizações. Cada projeto é adaptado às necessidades do espaço e do cliente.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Os nossos serviços de pladur em <strong>Lisboa</strong> são indicados tanto para remodelações como para obras novas, em habitações, escritórios e espaços comerciais. Trabalhamos com materiais de qualidade e técnicas adequadas para garantir resistência, alinhamento perfeito e acabamentos profissionais.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Serralheria Bernardo's atua em toda a região de Lisboa, assegurando cumprimento de prazos, organização no local e um resultado final funcional e esteticamente cuidado. Se procura uma solução versátil e eficiente para remodelar interiores, o pladur é a escolha certa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Por que escolher a Serralheria Bernardo's para Pladur?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Serviços profissionais de pladur em Lisboa com qualidade e cumprimento de prazos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: 'ri-award-line', title: '20+ Anos', desc: 'de experiência' },
                { icon: 'ri-shield-check-line', title: 'Garantia', desc: 'em todas as instalações' },
                { icon: 'ri-map-pin-line', title: 'Lisboa', desc: 'e região' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full mx-auto mb-4">
                    <i className={`${item.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png"
                  alt="Montagem de Pladur em Santiago do Cacém - Divisórias modernas e tetos falsos"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Especialistas em Montagem de Pladur em Santiago do Cacém</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Se procura <strong>"montagem de Pladur"</strong>, <strong>"divisórias modernas"</strong> ou 
                  <strong> "tetos falsos em Santiago do Cacém"</strong>, encontrou a solução ideal. O Pladur é uma opção eficiente e versátil, 
                  perfeita para criar espaços funcionais e com design sofisticado, seja em casa, escritório ou loja.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A <strong>Greenelite Unipessoal Lda.</strong> é especialista em instalação de Pladur em 
                  <strong> Santiago do Cacém</strong>, oferecendo serviços como divisórias para escritórios, tetos falsos modernos e 
                  isolamento acústico e térmico.
                </p>
                <ul className="space-y-3">
                  {['Remodelações rápidas', 'Acabamentos duradouros', 'Isolamento acústico e térmico', 'Design sofisticado'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <i className="ri-check-line text-[#D4AF37] text-2xl"></i>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Nossos Serviços em Montagem de Pladur</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Divisórias para Escritórios',
                    description: 'Criação de divisórias modernas para escritórios com Pladur. Espaços funcionais e com design sofisticado, ideais para ambientes profissionais.',
                    icon: 'ri-building-line'
                  },
                  {
                    title: 'Tetos Rebaixados',
                    description: 'Instalação de tetos rebaixados e tetos falsos modernos em Pladur. Soluções estéticas e funcionais para esconder instalações.',
                    icon: 'ri-home-4-line'
                  },
                  {
                    title: 'Isolamento Acústico com Pladur',
                    description: 'Isolamento acústico e térmico com Pladur. Reduz gastos com energia e melhora o conforto do ambiente.',
                    icon: 'ri-sound-module-line'
                  },
                  {
                    title: 'Paredes em Pladur',
                    description: 'Paredes em Pladur para casas e empresas. Remodelações rápidas com acabamentos duradouros e estéticos.',
                    icon: 'ri-layout-line'
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full mb-4">
                      <i className={`${feature.icon} text-3xl text-white`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Vantagens do Pladur</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Isolamento acústico superior',
                  'Isolamento térmico eficiente',
                  'Redução de gastos com energia',
                  'Design sofisticado e moderno',
                  'Instalação rápida',
                  'Acabamentos duradouros',
                  'Espaços funcionais',
                  'Valorização do imóvel',
                  'Remodelações rápidas'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Keywords Section */}
            <div className="mb-16 bg-[#B8860B]/5 border border-[#B8860B]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center">Áreas de Atuação</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Pladur Lisboa</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Divisórias para escritórios</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Tetos rebaixados</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Isolamento acústico com Pladur</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Paredes em Pladur para casas</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Paredes em Pladur para empresas</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-2xl p-12 text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Solicite o Seu Orçamento Grátis</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Entre em contacto connosco hoje e receba um orçamento personalizado para montagem de Pladur. Remodelações rápidas com acabamentos duradouros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Pladur" 
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
              <p className="mt-6 text-sm opacity-75">
                ✉️ geral@serralheriabernardos.pt | 📍 Lisboa e Região
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
