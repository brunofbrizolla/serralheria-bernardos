import { useEffect } from 'react';

export default function SerralhariaPage() {
  useEffect(() => {
    document.title = 'Serviços de Serralharia em Lisboa | Serralheria Bernardo\'s';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A Serralheria Bernardo\'s é especializada em serviços de serralharia em Lisboa, prestando soluções à medida para habitações, condomínios, empresas e espaços comerciais.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A Serralheria Bernardo\'s é especializada em serviços de serralharia em Lisboa, prestando soluções à medida para habitações, condomínios, empresas e espaços comerciais.';
      document.head.appendChild(meta);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Serralheria Bernardo's - Serviços de Serralharia",
    "description": "Serviços de serralharia em Lisboa. Fabrico, reparação e instalação de estruturas metálicas à medida.",
    "url": "https://serralheriabernardos.pt/serralharia",
    "telephone": "+351968747769",
    "email": "geral@serralheriabernardos.pt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisboa",
      "addressCountry": "PT"
    },
    "serviceType": "Serralharia, Estruturas Metálicas"
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://i.ibb.co/d0wz1hP8/PINTURA-INDUSTRIAL.webp"
              alt="Serviços de Serralharia Profissional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 5px rgba(0,0,0,0.3)' }}>
                  Serviços de Serralharia em Lisboa
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 font-semibold px-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                  A Serralheria Bernardo's é especializada em serviços de serralharia em Lisboa, prestando soluções à medida para habitações, condomínios, empresas e espaços comerciais.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20Serviços%20de%20Serralharia" 
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

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong>Serralheria Bernardo's</strong> é especializada em serviços de serralharia em Lisboa, prestando soluções à medida para habitações, condomínios, empresas e espaços comerciais. Trabalhamos com ferro, aço e outros metais, garantindo estruturas resistentes, funcionais e com acabamentos de qualidade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Executamos o fabrico, reparação e instalação de portões metálicos, grades de segurança, corrimões, escadas, vedações, portas metálicas e estruturas personalizadas, adaptadas às necessidades de cada cliente. Todos os trabalhos são realizados com rigor técnico, desde a medição até à montagem final.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Os nossos serviços de serralharia em Lisboa são indicados tanto para obras novas como para remodelações e reforço de segurança. Utilizamos materiais de qualidade e técnicas adequadas para garantir durabilidade e segurança em cada projeto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A Serralheria Bernardo's atua em toda a região de Lisboa, assegurando deslocação rápida, cumprimento de prazos e um serviço profissional. Se procura um serralheiro experiente, com soluções robustas e feitas à medida, conte com a Serralheria Bernardo's para um resultado fiável e duradouro.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: 'ri-gate-line', title: 'Portões Metálicos', desc: 'Fabrico e instalação de portões metálicos à medida' },
                  { icon: 'ri-shield-line', title: 'Grades de Segurança', desc: 'Grades de segurança robustas e duradouras' },
                  { icon: 'ri-handrail-line', title: 'Corrimões', desc: 'Corrimões em metal para escadas e varandas' },
                  { icon: 'ri-stairs-line', title: 'Escadas Metálicas', desc: 'Escadas metálicas personalizadas' },
                  { icon: 'ri-fence-line', title: 'Vedações', desc: 'Vedações metálicas para propriedades' },
                  { icon: 'ri-door-line', title: 'Portas Metálicas', desc: 'Portas metálicas de segurança' }
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">Solicite o Seu Orçamento Grátis</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Entre em contacto connosco hoje e receba um orçamento personalizado para serviços de serralharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito%20para%20Serviços%20de%20Serralharia" 
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
