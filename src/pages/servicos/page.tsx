import { Link } from 'react-router-dom';

export default function ServicosPage() {
  const services = [
    {
      id: 1,
      title: 'Pladur',
      description: 'Instalação profissional de sistemas Pladur para divisórias, tetos falsos e revestimentos. Trabalhamos com materiais de qualidade e instalação especializada.',
      image: 'https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png',
      benefits: [
        'Instalação profissional de sistemas Pladur',
        'Divisórias e revestimentos de qualidade',
        'Técnicos especializados e certificados',
        'Materiais de primeira qualidade',
        'Garantia em todas as instalações'
      ],
      features: [
        'Divisórias em Pladur',
        'Teto falso em Pladur',
        'Revestimentos',
        'Drywall profissional'
      ]
    },
    {
      id: 2,
      title: 'Barramento Geral',
      description: 'Nivelamento de paredes e preparação de superfícies para pintura. Especialistas em barramento geral em Santiago do Cacém, garantindo paredes lisas e acabamentos de alta qualidade.',
      image: 'https://i.ibb.co/8nwsKHjK/BARRAMENTO.webp',
      benefits: [
        'Nivelamento profissional de paredes',
        'Preparação de superfícies para pintura',
        'Paredes lisas para remodelação',
        'Acabamentos duradouros',
        'Mais de 20 anos de experiência'
      ],
      features: [
        'Nivelamento de paredes',
        'Preparação de superfícies',
        'Barramento geral',
        'Paredes lisas para remodelação'
      ]
    },
    {
      id: 3,
      title: 'Pintura Industrial',
      description: 'Pintura industrial e geral com mais de 20 anos de experiência. Serviços de pintura para espaços residenciais, comerciais e industriais.',
      image: 'https://i.ibb.co/d0wz1hP8/PINTURA-INDUSTRIAL.webp',
      benefits: [
        'Pintura industrial especializada',
        'Pintura geral residencial e comercial',
        'Mais de 20 anos de experiência',
        'Materiais de qualidade',
        'Acabamento profissional'
      ],
      features: [
        'Pintura industrial',
        'Pintura geral',
        'Preparação de superfícies',
        'Acabamento profissional'
      ]
    },
    {
      id: 4,
      title: 'Teto Falso',
      description: 'Instalação de tetos falsos com diferentes materiais e acabamentos. Soluções personalizadas para melhorar o conforto e estética dos espaços.',
      image: 'https://i.ibb.co/1fzjWqQK/TETO-FALSO.webp',
      benefits: [
        'Instalação de tetos falsos',
        'Diferentes materiais disponíveis',
        'Acabamentos personalizados',
        'Isolamento acústico e térmico',
        'Instalação profissional'
      ],
      features: [
        'Teto falso em Pladur',
        'Teto falso em PVC',
        'Teto falso em madeira',
        'Iluminação integrada'
      ]
    },
    {
      id: 5,
      title: 'Chão Flutuante',
      description: 'Instalação de chão flutuante com diferentes materiais e acabamentos. Soluções modernas e duráveis para o seu espaço.',
      image: 'https://i.ibb.co/spw64zLN/CHAO-FLUTUANTE.webp',
      benefits: [
        'Instalação de chão flutuante',
        'Diferentes materiais disponíveis',
        'Isolamento acústico',
        'Fácil manutenção',
        'Instalação rápida e profissional'
      ],
      features: [
        'Chão flutuante em madeira',
        'Chão flutuante em PVC',
        'Chão flutuante em vinil',
        'Instalação profissional'
      ]
    },
    {
      id: 6,
      title: 'Remodelação Geral',
      description: 'Remodelação geral de espaços residenciais e comerciais. Serviços completos de transformação com mais de 20 anos de experiência.',
      image: 'https://i.ibb.co/LDHjFX7D/REMODELA-OAO.webp',
      benefits: [
        'Remodelação geral completa',
        'Mais de 20 anos de experiência',
        'Projetos personalizados',
        'Equipa qualificada',
        'Transformação total do espaço'
      ],
      features: [
        'Remodelação de interiores',
        'Remodelação de exteriores',
        'Projetos completos',
        'Acompanhamento profissional'
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Os Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            A Greenelite oferece uma gama abrangente de serviços de construção civil, especializada em Pladur, barramento, pintura e remodelação geral com mais de 20 anos de experiência
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#B8860B] mb-4">Benefícios do Serviço:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <i className="ri-check-line text-[#D4AF37] text-xl"></i>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#B8860B] mb-4">Características:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <i className="ri-arrow-right-s-line text-[#D4AF37]"></i>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={
                        service.id === 1 ? '/pladur' : 
                        service.id === 2 ? '/barramento' : 
                        service.id === 3 ? '/pintura-industrial' : 
                        '/servicos'
                      }
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-information-line text-xl"></i>
                      Saber Mais
                    </Link>
                    <a 
                      href="https://wa.me/351934459441?text=Olá,%20gostaria%20de%20uma%20avaliação%20técnica" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#B8860B] text-[#B8860B] rounded-lg font-semibold hover:bg-[#B8860B] hover:text-white transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-whatsapp-line text-xl"></i>
                      Pedir Orçamento
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Precisa de um serviço específico?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco para uma consulta personalizada e orçamento sem compromisso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/351934459441?text=Olá,%20preciso%20de%20um%20orçamento%20personalizado" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D4AF37] text-white rounded-lg font-semibold hover:bg-[#B8860B] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Contactar WhatsApp
            </a>
            <a 
              href="tel:+351934459441"
              className="px-8 py-4 bg-[#B8860B] text-white rounded-lg font-semibold hover:bg-[#8B6914] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-phone-line text-xl"></i>
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
