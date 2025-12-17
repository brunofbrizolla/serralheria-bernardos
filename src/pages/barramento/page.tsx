import { useEffect } from 'react';

export default function BarramentoPage() {
  useEffect(() => {
    document.title = 'Barramento de Paredes - Nivelamento para Pintura | Greenelite - Santiago do Cacém';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Barramento de paredes em Santiago do Cacém. Nivelamento para pintura e preparação de superfícies. Paredes lisas para remodelação. Orçamento gratuito.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Barramento de paredes em Santiago do Cacém. Nivelamento para pintura e preparação de superfícies. Paredes lisas para remodelação. Orçamento gratuito.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Greenelite Unipessoal Lda - Barramento Geral",
    "description": "Barramento geral e nivelamento de paredes em Santiago do Cacém. Preparação de superfícies para pintura e remodelação.",
    "url": "https://greenelite.pt/barramento",
    "telephone": "+351934459441",
    "email": "greenelite.flavio@outlook.pt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vale Verde",
      "addressLocality": "Santiago do Cacém",
      "postalCode": "7540-230",
      "addressCountry": "PT"
    },
    "serviceType": "Barramento Geral e Nivelamento de Paredes"
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
              src="https://i.ibb.co/8nwsKHjK/BARRAMENTO.webp"
              alt="Barramento de Paredes e Nivelamento"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Barramento de Paredes e Nivelamento
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  Nivelamento profissional de paredes e preparação de superfícies para pintura em Santiago do Cacém. Mais de 20 anos de experiência em barramento geral.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351934459441?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Barramento%20de%20Paredes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#B8860B] rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 text-base sm:text-lg shadow-xl"
                  >
                    <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
                    <span className="hidden sm:inline">Solicitar Orçamento Grátis</span>
                    <span className="sm:hidden">Orçamento Grátis</span>
                  </a>
                  <a 
                    href="tel:+351934459441"
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
                <h2 className="text-2xl font-bold text-red-800 mb-4">O Problema com Paredes Desniveladas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Paredes desniveladas ou com fissuras comprometem o acabamento final, reduzindo a durabilidade da pintura ou revestimento. 
                  Superfícies mal preparadas aumentam os custos de manutenção e deixam uma aparência amadora no ambiente.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-[#D4AF37] rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">A Solução: Nivelamento Profissional</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O <strong>nivelamento de paredes</strong> é essencial para garantir superfícies lisas e acabamentos de alta qualidade em 
                  remodelações de casas e espaços comerciais. A <strong>Greenelite Unipessoal Lda.</strong> é especializada em 
                  <strong> barramento geral em Santiago do Cacém</strong>, oferecendo nivelamento de paredes e preparação para pintura. 
                  Garantimos paredes lisas e prontas para qualquer aplicação, com acabamentos duradouros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Por que escolher a Greenelite para Barramento?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mais de 20 anos de experiência em barramento geral e nivelamento de paredes em Santiago do Cacém
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: 'ri-award-line', title: '20+ Anos', desc: 'de experiência' },
                { icon: 'ri-shield-check-line', title: 'Garantia', desc: 'em todas as instalações' },
                { icon: 'ri-map-pin-line', title: 'Santiago do Cacém', desc: 'e região' }
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
                  src="https://i.ibb.co/8nwsKHjK/BARRAMENTO.webp"
                  alt="Nivelamento de paredes e barramento geral em Santiago do Cacém - Preparação de superfícies para pintura"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Especialistas em Barramento e Nivelamento em Santiago do Cacém</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A <strong>Greenelite Unipessoal Lda.</strong> é especializada em <strong>barramento geral em Santiago do Cacém</strong>, 
                  oferecendo <strong>nivelamento de paredes</strong> e preparação para pintura. Garantimos paredes lisas e prontas para 
                  qualquer aplicação, com acabamentos duradouros.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Com mais de <strong>20 anos de experiência</strong> em construção civil, oferecemos soluções personalizadas para 
                  projetos residenciais e comerciais em toda a região de Santiago do Cacém, Vale Verde e arredores.
                </p>
                <ul className="space-y-3">
                  {['Nivelamento profissional de paredes', 'Preparação de superfícies para pintura', 'Paredes lisas para remodelação', 'Acabamentos duradouros'].map((item, i) => (
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
              <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Nossos Serviços em Barramento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Nivelamento de Paredes',
                    description: 'Nivelamento profissional de paredes desniveladas ou com fissuras. Garantimos superfícies lisas e prontas para pintura ou revestimento, essencial para acabamentos de alta qualidade.',
                    icon: 'ri-ruler-line'
                  },
                  {
                    title: 'Preparação de Superfícies',
                    description: 'Preparação completa de superfícies para pintura. Eliminamos fissuras, irregularidades e imperfeições, garantindo um acabamento perfeito e duradouro.',
                    icon: 'ri-tools-line'
                  },
                  {
                    title: 'Barramento Geral',
                    description: 'Barramentos gerais e tetos amovíveis com materiais de qualidade. Instalação profissional especializada para projetos residenciais e comerciais.',
                    icon: 'ri-building-line'
                  },
                  {
                    title: 'Paredes Lisas para Remodelação',
                    description: 'Preparação de paredes para remodelação de casas e espaços comerciais. Superfícies perfeitamente niveladas e prontas para qualquer tipo de acabamento.',
                    icon: 'ri-home-4-line'
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
              <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Vantagens do Nivelamento de Paredes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Superfícies lisas e uniformes',
                  'Acabamentos de alta qualidade',
                  'Maior durabilidade da pintura',
                  'Redução de custos de manutenção',
                  'Aparência profissional',
                  'Preparação para qualquer revestimento',
                  'Eliminação de fissuras',
                  'Paredes prontas para remodelação',
                  'Garantia de acabamento duradouro'
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
                  <p className="text-gray-700 font-semibold">Barramento de paredes Santiago do Cacém</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Nivelamento para pintura</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Preparação de superfícies</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold">Paredes lisas para remodelação</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-2xl p-12 text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Solicite o Seu Orçamento Grátis</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Entre em contacto connosco hoje e receba um orçamento personalizado para nivelamento de paredes e barramento geral. Sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/351934459441?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Barramento%20de%20Paredes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-[#B8860B] rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-3 text-lg shadow-xl"
                >
                  <i className="ri-whatsapp-line text-2xl"></i>
                  WhatsApp - Orçamento Grátis
                </a>
                <a 
                  href="tel:+351934459441"
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-3 border border-white/20 text-lg"
                >
                  <i className="ri-phone-line text-2xl"></i>
                  Ligar: +351 934 459 441
                </a>
              </div>
              <p className="mt-6 text-sm opacity-75">
                📍 Vale Verde, 7540-230 Santiago do Cacém | ✉️ greenelite.flavio@outlook.pt
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
