import { Link } from 'react-router-dom';

export default function ServicosPage() {
  const services = [
    {
      id: 1,
      title: 'Serralharia',
      description: 'Fabrico, reparação e instalação de estruturas metálicas à medida, incluindo portões, grades, corrimões, escadas, vedações, portas metálicas e pequenas estruturas em ferro ou aço.',
      image: 'https://i.ibb.co/d0wz1hP8/PINTURA-INDUSTRIAL.webp',
      benefits: [
        'Estruturas metálicas à medida',
        'Portões, grades e vedações',
        'Corrimões e escadas metálicas',
        'Trabalhos personalizados',
        'Robustos e duradouros'
      ],
      features: [
        'Portões metálicos',
        'Grades de segurança',
        'Corrimões',
        'Escadas metálicas',
        'Vedações',
        'Portas metálicas'
      ]
    },
    {
      id: 2,
      title: 'Remodelações Gerais',
      description: 'Execução de remodelações parciais ou completas em interiores e exteriores. A Serralheria Bernardo\'s coordena os trabalhos necessários para renovar espaços, melhorar funcionalidade e valorizar o imóvel.',
      image: 'https://i.ibb.co/8nwsKHjK/BARRAMENTO.webp',
      benefits: [
        'Remodelações parciais ou completas',
        'Coordenação de trabalhos',
        'Renovação de espaços',
        'Melhoria de funcionalidade',
        'Valorização do imóvel'
      ],
      features: [
        'Remodelação de interiores',
        'Remodelação de exteriores',
        'Coordenação de obras',
        'Projetos personalizados'
      ]
    },
    {
      id: 3,
      title: 'Pintura',
      description: 'Pintura interior e exterior de casas, apartamentos, lojas e escritórios. Preparação adequada das superfícies, aplicação profissional e acabamentos limpos, garantindo um resultado duradouro e de qualidade.',
      image: 'https://i.ibb.co/vgRp9Fk/Chat-GPT-Image-13-de-nov-de-2025-16-16-09.png',
      benefits: [
        'Pintura interior e exterior',
        'Preparação adequada de superfícies',
        'Aplicação profissional',
        'Acabamentos limpos',
        'Resultado duradouro'
      ],
      features: [
        'Pintura de paredes',
        'Pintura de tetos',
        'Pintura de fachadas',
        'Preparação de superfícies'
      ]
    },
    {
      id: 4,
      title: 'Pladur (Gesso Cartonado)',
      description: 'Montagem de paredes, tetos falsos, divisórias e soluções em pladur para remodelações e reorganização de espaços. Ideal para melhorar isolamento, estética e funcionalidade de interiores.',
      image: 'https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png',
      benefits: [
        'Montagem de paredes em pladur',
        'Tetos falsos',
        'Divisórias',
        'Isolamento térmico e acústico',
        'Soluções versáteis'
      ],
      features: [
        'Paredes em pladur',
        'Tetos falsos',
        'Divisórias',
        'Sancas e nichos'
      ]
    },
    {
      id: 5,
      title: 'Serviços Elétricos',
      description: 'Trabalhos elétricos em remodelações, incluindo instalação, substituição e reparação de tomadas, iluminação, quadros elétricos e cablagens, sempre com foco na segurança e no cumprimento das normas.',
      image: 'https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png',
      benefits: [
        'Instalação elétrica',
        'Substituição e reparação',
        'Quadros elétricos',
        'Iluminação',
        'Cumprimento de normas'
      ],
      features: [
        'Instalação de tomadas',
        'Iluminação',
        'Quadros elétricos',
        'Cablagens'
      ]
    },
    {
      id: 6,
      title: 'Manutenção e Reparações',
      description: 'Pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade, ideais para imóveis habitados, lojas e condomínios.',
      image: 'https://i.ibb.co/8nwsKHjK/BARRAMENTO.webp',
      benefits: [
        'Reparações rápidas',
        'Manutenção preventiva',
        'Mínimo incómodo',
        'Resposta rápida',
        'Serviço profissional'
      ],
      features: [
        'Reparação de estruturas',
        'Reparação de pintura',
        'Reparação de pladur',
        'Reparação elétrica'
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Os Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            A Serralheria Bernardo's presta serviços profissionais de serralharia e remodelações, atendendo toda a região de Lisboa com qualidade, rigor e cumprimento de prazos
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
                    <h3 className="text-xl font-semibold text-bernardos-red mb-4">Benefícios do Serviço:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <i className="ri-check-line text-bernardos-red text-xl"></i>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-bernardos-red mb-4">Características:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <i className="ri-arrow-right-s-line text-bernardos-red"></i>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={
                        service.id === 1 ? '/serralharia' : 
                        service.id === 2 ? '/remodelacoes' : 
                        service.id === 3 ? '/pintura' : 
                        service.id === 4 ? '/pladur' :
                        service.id === 5 ? '/eletricos' :
                        service.id === 6 ? '/manutencao' :
                        '/servicos'
                      }
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-information-line text-xl"></i>
                      Saber Mais
                    </Link>
                    <a 
                      href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20uma%20avaliação%20técnica" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-bernardos-red text-bernardos-red rounded-lg font-semibold hover:bg-bernardos-red-dark hover:text-white transition-all cursor-pointer whitespace-nowrap"
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
              href="https://wa.me/351968747769?text=Olá,%20preciso%20de%20um%20orçamento%20personalizado" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-bernardos-red text-white rounded-lg font-semibold hover:bg-bernardos-red-dark transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Contactar WhatsApp
            </a>
            <a 
              href="tel:+351968747769"
              className="px-8 py-4 bg-bernardos-red text-white rounded-lg font-semibold hover:bg-bernardos-red-dark transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
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
