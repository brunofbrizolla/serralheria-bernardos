import { useEffect } from 'react';

export default function PinturaIndustrialPage() {
  useEffect(() => {
    document.title = 'Pintura Industrial - Sistemas Anti-Corrosão | Greenelite - Santiago do Cacém';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Pintura industrial em Santiago do Cacém. Sistemas anti-corrosão, decapagem e repintura para equipamentos e estruturas metálicas. Fábricas, armazéns e indústrias. Orçamento gratuito.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Pintura industrial em Santiago do Cacém. Sistemas anti-corrosão, decapagem e repintura para equipamentos e estruturas metálicas. Fábricas, armazéns e indústrias. Orçamento gratuito.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Greenelite Unipessoal Lda - Pintura Industrial",
    "description": "Pintura industrial especializada em Santiago do Cacém. Sistemas anti-corrosão, decapagem e repintura para equipamentos e estruturas metálicas.",
    "url": "https://greenelite.pt/pintura-industrial",
    "telephone": "+351934459441",
    "email": "greenelite.flavio@outlook.pt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vale Verde",
      "addressLocality": "Santiago do Cacém",
      "postalCode": "7540-230",
      "addressCountry": "PT"
    },
    "serviceType": "Pintura Industrial e Sistemas Anti-Corrosão"
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
              src="https://i.ibb.co/d0wz1hP8/PINTURA-INDUSTRIAL.webp"
              alt="Pintura Industrial Especializada"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Pintura Industrial Especializada
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  Sistemas anti-corrosão, decapagem e repintura para equipamentos e estruturas metálicas em Santiago do Cacém. Proteção e durabilidade para instalações industriais.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351934459441?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Pintura%20Industrial" 
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

        {/* Service Description Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6 text-center">Pintura Industrial Profissional</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oferecemos serviços especializados em <strong>pintura industrial</strong>, incluindo <strong>sistemas anti-corrosão</strong>, 
                <strong> decapagem</strong> e <strong>repintura</strong> para equipamentos e estruturas metálicas. Nosso trabalho visa proteger 
                e prolongar a vida útil de instalações industriais, prevenindo danos causados pela corrosão e outros fatores ambientais.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Utilizamos produtos de alta qualidade e técnicas avançadas para garantir acabamentos duráveis, resistentes e eficientes.
              </p>
              <div className="bg-[#B8860B]/5 border border-[#B8860B]/20 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Ideal para:</strong> fábricas, armazéns, indústrias e outras instalações que necessitam de proteção extra contra 
                  o desgaste e condições severas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Por que escolher a Greenelite para Pintura Industrial?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mais de 20 anos de experiência em pintura industrial em Santiago do Cacém e região
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: 'ri-award-line', title: '20+ Anos', desc: 'de experiência' },
                { icon: 'ri-shield-check-line', title: 'Proteção', desc: 'anti-corrosão duradoura' },
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
                  src="https://i.ibb.co/d0wz1hP8/PINTURA-INDUSTRIAL.webp"
                  alt="Pintura industrial com sistemas anti-corrosão em Santiago do Cacém - Fábricas e armazéns"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Especialistas em Pintura Industrial em Santiago do Cacém</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A <strong>Greenelite Unipessoal Lda.</strong> oferece serviços especializados em <strong>pintura industrial</strong> em 
                  <strong> Santiago do Cacém</strong>, incluindo <strong>sistemas anti-corrosão</strong>, <strong>decapagem</strong> e 
                  <strong> repintura</strong> para equipamentos e estruturas metálicas.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Nosso trabalho visa proteger e prolongar a vida útil de instalações industriais, prevenindo danos causados pela corrosão 
                  e outros fatores ambientais. Utilizamos produtos de alta qualidade e técnicas avançadas.
                </p>
                <ul className="space-y-3">
                  {['Sistemas anti-corrosão', 'Decapagem profissional', 'Repintura de estruturas metálicas', 'Proteção contra desgaste'].map((item, i) => (
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
              <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Nossos Serviços em Pintura Industrial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Sistemas Anti-Corrosão',
                    description: 'Aplicação de sistemas anti-corrosão para proteger equipamentos e estruturas metálicas contra corrosão e desgaste. Produtos de alta qualidade e técnicas avançadas.',
                    icon: 'ri-shield-check-line'
                  },
                  {
                    title: 'Decapagem',
                    description: 'Serviços de decapagem profissional para remover tintas antigas e preparar superfícies para nova aplicação. Técnicas seguras e eficientes.',
                    icon: 'ri-tools-line'
                  },
                  {
                    title: 'Repintura de Equipamentos',
                    description: 'Repintura de equipamentos e estruturas metálicas industriais. Acabamentos duráveis e resistentes a condições severas.',
                    icon: 'ri-building-line'
                  },
                  {
                    title: 'Proteção Industrial',
                    description: 'Proteção completa de instalações industriais contra desgaste e condições ambientais severas. Ideal para fábricas, armazéns e indústrias.',
                    icon: 'ri-shield-star-line'
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
              <h3 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">Vantagens da Pintura Industrial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Proteção contra corrosão',
                  'Prolongamento da vida útil',
                  'Resistência a condições severas',
                  'Produtos de alta qualidade',
                  'Técnicas avançadas',
                  'Acabamentos duráveis',
                  'Prevenção de danos ambientais',
                  'Proteção de equipamentos',
                  'Custo-benefício superior'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For Section */}
            <div className="mb-16 bg-gradient-to-r from-[#B8860B]/10 to-[#D4AF37]/10 rounded-xl p-8 border border-[#B8860B]/20">
              <h3 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">Ideal Para</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Fábricas', 'Armazéns', 'Indústrias', 'Instalações Industriais'].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-lg">
                    <i className="ri-building-2-line text-4xl text-[#B8860B] mb-3"></i>
                    <p className="text-gray-700 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-700 mt-6 text-lg">
                Instalações que necessitam de proteção extra contra o desgaste e condições severas
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-2xl p-12 text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Solicite o Seu Orçamento Grátis</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Entre em contacto connosco hoje e receba um orçamento personalizado para pintura industrial. Proteção duradoura para as suas instalações.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/351934459441?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Pintura%20Industrial" 
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
