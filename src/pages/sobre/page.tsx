export default function SobrePage() {
  const values = [
    {
      icon: 'ri-leaf-line',
      title: 'Sustentabilidade',
      description: 'Comprometidos com soluções ecológicas e eficientes energeticamente que respeitam o meio ambiente.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Confiança',
      description: 'Serviços profissionais com qualidade, rigor e cumprimento de prazos em Lisboa e região.'
    },
    {
      icon: 'ri-star-line',
      title: 'Profissionalismo',
      description: 'Técnicos certificados e especializados, equipamentos de última geração e serviço de excelência.'
    }
  ];

  const timeline = [
    {
      year: 'Fundação',
      title: 'Serralheria Bernardo\'s',
      description: 'Início das atividades especializadas em serralharia e remodelações em Lisboa.'
    },
    {
      year: 'Expansão',
      title: 'Ampliação de Serviços',
      description: 'Expansão dos serviços para incluir pintura, pladur, serviços elétricos e manutenção.'
    },
    {
      year: 'Atual',
      title: 'Lisboa e Região',
      description: 'Atendimento em toda a região de Lisboa com qualidade, rigor e cumprimento de prazos.'
    }
  ];

  const team = [
    {
      name: 'Equipa Especializada',
      position: 'Profissionais Qualificados',
      description: 'Equipa experiente especializada em serralharia, remodelações, pintura, pladur e serviços elétricos.',
      image: 'https://readdy.ai/api/search-image?query=professional%20construction%20workers%20team%20working%20on%20pladur%20drywall%20installation%20portuguese%20company%20santiago%20do%20cacem%20region%20teamwork%20quality%20service&width=300&height=400&seq=team1&orientation=portrait'
    },
    {
      name: 'Técnicos Certificados',
      position: 'Especialistas em Pladur',
      description: 'Profissionais qualificados em instalação de Pladur, divisórias, tetos falsos e isolamento acústico.',
      image: 'https://readdy.ai/api/search-image?query=professional%20construction%20worker%20installing%20drywall%20pladur%20portuguese%20technician%20work%20uniform%20construction%20site%20quality%20workmanship&width=300&height=400&seq=team2&orientation=portrait'
    },
    {
      name: 'Pintores Especializados',
      position: 'Pintura',
      description: 'Especialistas em pintura industrial, anti-corrosão e pinturas residenciais e comerciais.',
      image: 'https://readdy.ai/api/search-image?query=professional%20painter%20industrial%20painting%20portuguese%20technician%20work%20clothes%20construction%20site%20quality%20service&width=300&height=400&seq=team3&orientation=portrait'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(184, 134, 11, 0.9) 0%, rgba(212, 175, 55, 0.8) 100%), url('https://readdy.ai/api/search-image?query=modern%20portuguese%20construction%20company%20office%20building%20exterior%20professional%20architecture%20santiago%20do%20cacem%20region%20corporate%20environment%20blue%20sky&width=1920&height=800&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Sobre a Serralheria Bernardo's</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A Serralheria Bernardo's presta serviços profissionais de serralharia e remodelações, atendendo toda a região de Lisboa com qualidade, rigor e cumprimento de prazos.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">A Nossa História</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20construction%20workers%20team%20working%20on%20pladur%20drywall%20installation%20portuguese%20company%20santiago%20do%20cacem%20region%20teamwork%20quality%20service&width=600&height=400&seq=company-story&orientation=landscape"
                  alt="História da Serralheria Bernardo's"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl border-2 border-bernardos-red">
                  <img 
                    src="https://i.ibb.co/9HRRKhQf/Imagem-do-Whats-App-de-2025-11-13-s-10-48-58-4162b361.webp" 
                    alt="Serralheria Bernardo's Logo" 
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong>Serralheria Bernardo's</strong> presta serviços profissionais de serralharia e remodelações, atendendo toda a região de Lisboa com qualidade, rigor e cumprimento de prazos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Oferecemos serviços de serralharia, remodelações gerais, pintura, pladur, serviços elétricos e manutenção. Trabalhos personalizados, robustos e duradouros, para habitações e espaços comerciais.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Atuamos em toda a região de Lisboa, servindo clientes com soluções profissionais e de qualidade superior, sempre com foco na satisfação do cliente e no cumprimento de prazos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Os Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam o nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-full mx-auto mb-6">
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">A Nossa Evolução</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Marcos importantes da nossa jornada de crescimento e inovação
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#B8860B]/20"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#B8860B] rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-[#B8860B] mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">A Nossa Equipa</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais qualificados e dedicados ao seu conforto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{member.name}</h3>
                  <p className="text-[#B8860B] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-16 bg-[#B8860B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <i className="ri-shield-check-line text-5xl text-[#D4AF37] mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Experiência e Qualidade</h3>
              <p className="text-lg leading-relaxed opacity-90">
                A Serralheria Bernardo's oferece serviços profissionais de serralharia e remodelações em <strong>Lisboa e região</strong>, 
                garantindo qualidade, rigor e cumprimento de prazos em todos os projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Conheça melhor o nosso trabalho</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco para saber como podemos ajudar com o seu projeto de serralharia, remodelações, pintura, pladur e serviços elétricos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20conhecer%20melhor%20os%20vossos%20serviços" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D4AF37] text-white rounded-lg font-semibold hover:bg-[#B8860B] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Contactar WhatsApp
            </a>
            <a 
              href="tel:+351968747769"
              className="px-8 py-4 bg-[#B8860B] text-white rounded-lg font-semibold hover:bg-[#8B6914] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              Ligar: 968 747 769
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}