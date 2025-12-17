import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    tipoServico: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validação básica
    if (formData.mensagem.length > 500) {
      alert('A mensagem não pode ter mais de 500 caracteres.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3tbrih1o2e7sldi7sbg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          localizacao: '',
          tipoServico: '',
          mensagem: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      value: '968 747 769',
      link: 'https://wa.me/351968747769',
      color: 'text-green-600'
    },
    {
      icon: 'ri-phone-line',
      title: 'Telefone',
      value: '968 747 769',
      link: 'tel:+351968747769',
      color: 'text-bernardos-red'
    },
    {
      icon: 'ri-mail-line',
      title: 'E-mail',
      value: 'geral@serralheriabernardos.pt',
      link: 'mailto:geral@serralheriabernardos.pt',
      color: 'text-bernardos-red'
    },
    {
      icon: 'ri-time-line',
      title: 'Horário',
      value: 'Seg–Sex, 9h–18h',
      link: '',
      color: 'text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudá-lo com o seu projeto de serralharia, remodelações, pintura, pladur e serviços elétricos
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Solicite o seu Orçamento</h2>
              
              <form id="contato-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bernardos-red focus:border-transparent text-sm"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bernardos-red focus:border-transparent text-sm"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bernardos-red focus:border-transparent text-sm"
                      placeholder="+351 912 345 678"
                    />
                  </div>
                  <div>
                    <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700 mb-2">
                      Localização
                    </label>
                    <input
                      type="text"
                      id="localizacao"
                      name="localizacao"
                      value={formData.localizacao}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bernardos-red focus:border-transparent text-sm"
                      placeholder="Cidade, Lisboa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipoServico" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    id="tipoServico"
                    name="tipoServico"
                    value={formData.tipoServico}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bernardos-red focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="pladur">Pladur</option>
                    <option value="teto-falso">Teto Falso</option>
                    <option value="teto-amovivel">Teto Amovível</option>
                    <option value="chao-flutuante">Chão Flutuante</option>
                    <option value="remodelacao">Remodelação Geral</option>
                    <option value="drywall">Drywall</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A6DAF] focus:border-transparent text-sm resize-none"
                    placeholder="Descreva o seu projeto ou necessidade..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.mensagem.length}/500 caracteres
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? 'A enviar...' : 'Enviar Pedido de Orçamento'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <i className="ri-check-circle-line mr-2"></i>
                      Mensagem enviada com sucesso! Entraremos em contacto em breve.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">
                      <i className="ri-error-warning-line mr-2"></i>
                      Erro ao enviar mensagem. Tente novamente ou contacte-nos diretamente.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Informações de Contacto</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full ${info.color}`}>
                      <i className={`${info.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-[#B8860B] transition-colors cursor-pointer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bernardos-red/5 border border-bernardos-red/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-bernardos-red mb-2">Área de Atendimento</h3>
                <p className="text-gray-700">
                  <i className="ri-map-pin-line text-bernardos-red mr-2"></i>
                  Lisboa e Região
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  A Serralheria Bernardo's atende toda a região de Lisboa, com deslocação rápida e soluções ajustadas às necessidades de cada cliente.
                </p>
              </div>

              {/* Google Maps */}
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49768.9!2d-9.1393!3d38.7223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1643723400000!5m2!1spt-PT!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Serralheria Bernardo's - Lisboa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Prefere falar diretamente?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco via WhatsApp para uma resposta mais rápida
          </p>
          <a 
            href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-bernardos-red text-white rounded-lg font-bold hover:bg-bernardos-red-dark transition-all cursor-pointer whitespace-nowrap text-lg shadow-xl"
          >
            <i className="ri-whatsapp-line text-3xl"></i>
            Contactar via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
