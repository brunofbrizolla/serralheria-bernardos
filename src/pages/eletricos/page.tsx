import { useEffect } from 'react';

export default function EletricosPage() {
  useEffect(() => {
    document.title = 'Serviços Elétricos em Lisboa | Serralheria Bernardo\'s';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Na Serralheria Bernardo\'s, também oferecemos serviços elétricos especializados, garantindo que todas as suas necessidades em eletricidade sejam atendidas de forma segura e eficiente.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Na Serralheria Bernardo\'s, também oferecemos serviços elétricos especializados, garantindo que todas as suas necessidades em eletricidade sejam atendidas de forma segura e eficiente.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serralheria Bernardo's - Serviços Elétricos",
    "description": "Serviços elétricos em Lisboa. Trabalhos elétricos em remodelações, incluindo instalação, substituição e reparação.",
    "url": "https://serralheriabernardos.pt/eletricos",
    "telephone": "+351968747769",
    "email": "geral@serralheriabernardos.pt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "serviceType": "Serviços Elétricos"
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
              src="https://i.ibb.co/Ldj4qsfg/6-11zon-2.jpg"
              alt="Serviços Elétricos Profissionais"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Serviços Elétricos em Lisboa
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  Na Serralheria Bernardo's, também oferecemos serviços elétricos especializados, garantindo que todas as suas necessidades em eletricidade sejam atendidas de forma segura e eficiente.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Serviços%20Elétricos" 
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
                  Na <strong>Serralheria Bernardo's</strong>, também oferecemos serviços elétricos especializados, garantindo que todas as suas necessidades em eletricidade sejam atendidas de forma segura e eficiente. A nossa equipa de eletricistas qualificados está disponível para realizar instalações, reparações e manutenções de sistemas elétricos residenciais, comerciais e industriais em toda a região de Lisboa.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Executamos serviços como a instalação de quadros elétricos, fiação, iluminação, tomadas, interruptores, sistemas de segurança e automação residencial. Além disso, oferecemos soluções personalizadas para garantir a máxima eficiência energética e segurança no seu espaço.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A Serralheria Bernardo's utiliza equipamentos de última geração e cumpre rigorosamente todas as normas de segurança e regulamentações. Para serviços elétricos confiáveis e com garantia de qualidade, entre em contacto connosco. Estamos disponíveis para orçamentos gratuitos e sem compromisso.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  { 
                    icon: 'ri-lightbulb-line', 
                    title: 'Instalação de Iluminação', 
                    desc: 'Iluminação interior e exterior profissional para habitações, escritórios e espaços comerciais. Instalação de sistemas de iluminação modernos, eficientes e adequados a cada ambiente, garantindo conforto visual e economia energética.' 
                  },
                  { 
                    icon: 'ri-plug-line', 
                    title: 'Tomadas e Interruptores', 
                    desc: 'Instalação e substituição de tomadas e interruptores em toda a região de Lisboa. Trabalhos realizados com segurança, cumprindo todas as normas e regulamentações, garantindo funcionalidade e segurança elétrica.' 
                  },
                  { 
                    icon: 'ri-dashboard-line', 
                    title: 'Quadros Elétricos', 
                    desc: 'Instalação e manutenção de quadros elétricos residenciais, comerciais e industriais. Serviços especializados para garantir a distribuição segura e eficiente da energia elétrica, com equipamentos de qualidade e certificados.' 
                  },
                  { 
                    icon: 'ri-wire-line', 
                    title: 'Fiação Elétrica', 
                    desc: 'Instalação e reparação de fiação elétrica em remodelações e obras novas. Utilizamos materiais de qualidade e técnicas adequadas para garantir segurança, durabilidade e conformidade com as normas em vigor.' 
                  },
                  { 
                    icon: 'ri-shield-line', 
                    title: 'Sistemas de Segurança', 
                    desc: 'Instalação de sistemas de segurança elétrica, incluindo alarmes, videovigilância e sistemas de detecção. Soluções personalizadas para proteger o seu espaço com tecnologia moderna e fiável.' 
                  },
                  { 
                    icon: 'ri-home-smart-home-line', 
                    title: 'Automação Residencial', 
                    desc: 'Soluções de automação residencial para controlo de iluminação, climatização e outros sistemas elétricos. Tecnologia inteligente que aumenta o conforto e a eficiência energética do seu espaço.' 
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
              Entre em contacto connosco hoje e receba um orçamento personalizado para serviços elétricos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Serviços%20Elétricos" 
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
