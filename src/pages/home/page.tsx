
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: 'https://i.ibb.co/kVrv3Jkf/serralheria.webp',
      title: 'Serralharia e Remodelações em Geral',
      subtitle: 'A Serralheria Bernardo\'s presta serviços profissionais de serralharia e remodelações, atendendo toda a região de Lisboa com qualidade, rigor e cumprimento de prazos.',
      description: 'Serralheria e Remodelações em Geral – Lisboa e Região. Fabrico, reparação e instalação de estruturas metálicas à medida, incluindo portões, grades, corrimões, escadas, vedações, portas metálicas e pequenas estruturas em ferro ou aço.'
    },
    {
      url: 'https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png',
      title: 'Pladur (Gesso Cartonado)',
      subtitle: 'Montagem de paredes, tetos falsos, divisórias e soluções em pladur para remodelações e reorganização de espaços. Ideal para melhorar isolamento, estética e funcionalidade de interiores.',
      description: 'A Serralheria Bernardo\'s presta serviços profissionais de pladur em Lisboa, oferecendo soluções práticas e modernas para remodelação e organização de espaços interiores.'
    },
    {
      url: 'https://i.ibb.co/vgRp9Fk/Chat-GPT-Image-13-de-nov-de-2025-16-16-09.png',
      title: 'Serviços de Pintura',
      subtitle: 'Pintura interior e exterior de casas, apartamentos, lojas e escritórios. Preparação adequada das superfícies, aplicação profissional e acabamentos limpos, garantindo um resultado duradouro e de qualidade.',
      description: 'A Serralheria Bernardo\'s disponibiliza serviços profissionais de pintura em Lisboa, tanto para interiores como para exteriores, destinados a habitações, apartamentos, lojas, escritórios e condomínios.'
    },
    {
      url: 'https://i.ibb.co/LDHjFX7D/REMODELA-OAO.webp',
      title: 'Remodelações Gerais',
      subtitle: 'Execução de remodelações parciais ou completas em interiores e exteriores. A Serralheria Bernardo\'s coordena os trabalhos necessários para renovar espaços, melhorar funcionalidade e valorizar o imóvel.',
      description: 'A Serralheria Bernardo\'s presta serviços profissionais de remodelações gerais em Lisboa, ajudando a renovar, modernizar e valorizar espaços residenciais e comerciais.'
    }
  ];


  const services = [
    {
      icon: 'ri-gate-line',
      title: 'Serralharia',
      description: 'Fabrico, reparação e instalação de estruturas metálicas à medida, incluindo portões, grades, corrimões, escadas, vedações, portas metálicas e pequenas estruturas em ferro ou aço.',
      link: '/serralharia',
      image: 'https://i.ibb.co/kVrv3Jkf/serralheria.webp'
    },
    {
      icon: 'ri-home-4-line',
      title: 'Remodelações Gerais',
      description: 'Execução de remodelações parciais ou completas em interiores e exteriores. Coordenação dos trabalhos necessários para renovar espaços, melhorar funcionalidade e valorizar o imóvel.',
      link: '/remodelacoes',
      image: 'https://i.ibb.co/LDHjFX7D/REMODELA-OAO.webp'
    },
    {
      icon: 'ri-paint-brush-line',
      title: 'Pintura',
      description: 'Pintura interior e exterior de casas, apartamentos, lojas e escritórios. Preparação adequada das superfícies, aplicação profissional e acabamentos limpos.',
      link: '/pintura',
      image: 'https://i.ibb.co/vgRp9Fk/Chat-GPT-Image-13-de-nov-de-2025-16-16-09.png'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Pladur',
      description: 'Montagem de paredes, tetos falsos, divisórias e soluções em pladur para remodelações e reorganização de espaços. Ideal para melhorar isolamento, estética e funcionalidade.',
      link: '/pladur',
      image: 'https://i.ibb.co/pvBWprjB/Chat-GPT-Image-13-de-nov-de-2025-15-57-19.png'
    },
    {
      icon: 'ri-wire-line',
      title: 'Serviços Elétricos',
      description: 'Trabalhos elétricos em remodelações, incluindo instalação, substituição e reparação de tomadas, iluminação, quadros elétricos e cablagens, sempre com foco na segurança.',
      link: '/eletricos',
      image: 'https://i.ibb.co/Ldj4qsfg/6-11zon-2.jpg'
    },
    {
      icon: 'ri-tools-line',
      title: 'Manutenção e Reparações',
      description: 'Pequenas reparações e trabalhos de manutenção em estruturas metálicas, pintura, pladur e eletricidade, ideais para imóveis habitados, lojas e condomínios.',
      link: '/manutencao',
      image: 'https://i.ibb.co/MDjmnWtL/5-11zon-1.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Lisboa',
      rating: 5,
      text: 'Excelente serviço! A equipa foi muito profissional e a instalação de serralharia ficou perfeita. Recomendo sem dúvida.',
      date: 'Há 2 semanas'
    },
    {
      name: 'João Santos',
      location: 'Lisboa',
      rating: 5,
      text: 'Muito satisfeito com a remodelação realizada. Técnicos competentes e atendimento de qualidade.',
      date: 'Há 1 mês'
    },
    {
      name: 'Ana Costa',
      location: 'Lisboa',
      rating: 5,
      text: 'Pintura realizada com excelência. O trabalho ficou impecável e a equipa muito profissional. Obrigada!',
      date: 'Há 3 semanas'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 sm:mb-8 px-2">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 sm:mb-4 transition-all duration-500 font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  {heroImages[currentSlide].title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white transition-all duration-500 font-semibold leading-relaxed" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)' }}>
                  {heroImages[currentSlide].subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/servicos"
                  className="bg-gradient-to-r from-bernardos-red to-bernardos-red-dark text-white px-8 py-4 rounded-lg font-semibold hover:from-bernardos-red-dark hover:to-bernardos-red transition-all duration-300 transform hover:scale-105 shadow-lg text-center whitespace-nowrap"
                >
                  Ver Serviços
                </Link>
                <Link
                  to="/contato"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-center whitespace-nowrap"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          <i className="ri-arrow-left-line text-xl"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          <i className="ri-arrow-right-line text-xl"></i>
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-[#0F172A] mb-6">Os Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Serralheria e Remodelações em Geral – Lisboa e Região. Soluções profissionais com qualidade, rigor e cumprimento de prazos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bernardos-red/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full mb-2 group-hover:scale-110 transition-transform">
                      <i className={`${service.icon} text-2xl text-bernardos-red`}></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-bernardos-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center text-bernardos-red font-semibold group-hover:gap-3 transition-all">
                    <span>Saber mais</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-bernardos-red text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por que escolher a Serralheria Bernardo's?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Qualidade</h3>
              <p className="text-white/90">Trabalhos com rigor e profissionalismo</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Cumprimento de Prazos</h3>
              <p className="text-white/90">Trabalhos entregues no prazo acordado</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-full mx-auto mb-4">
                <i className="ri-map-pin-line text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Lisboa e Região</h3>
              <p className="text-white/90">Atendimento em toda a região de Lisboa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">O que dizem os nossos clientes</h2>
            <p className="text-xl text-gray-600">Avaliações reais de clientes satisfeitos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="fale-agora-section" className="py-20 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Fale agora com um especialista</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Estamos prontos para ajudá-lo com o seu projeto de serralharia, remodelações, pintura, pladur e serviços elétricos
          </p>
          <a 
            href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-bernardos-red rounded-lg font-bold hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap text-lg shadow-xl"
          >
            <i className="ri-whatsapp-line text-3xl"></i>
            Contactar via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
