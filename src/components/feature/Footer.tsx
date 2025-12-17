import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bernardos-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/logo-bernardos.png" 
                alt="Serralheria Bernardo's Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A Serralheria Bernardo's presta serviços profissionais de serralharia e remodelações, atendendo toda a região de Lisboa com qualidade, rigor e cumprimento de prazos.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-bernardos-red transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-bernardos-red transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-bernardos-red transition-colors cursor-pointer">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Home</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Serviços</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Sobre nós</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/pladur" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Pladur</Link></li>
              <li><Link to="/pintura" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Pintura</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Teto Falso</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Chão Flutuante</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-bernardos-red transition-colors text-sm cursor-pointer">Remodelação Geral</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-phone-line text-bernardos-red mt-0.5"></i>
                <a href="tel:+351968747769" className="text-gray-400 hover:text-bernardos-red transition-colors cursor-pointer">968 747 769</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-mail-line text-bernardos-red mt-0.5"></i>
                <a href="mailto:geral@serralheriabernardos.pt" className="text-gray-400 hover:text-bernardos-red transition-colors cursor-pointer">geral@serralheriabernardos.pt</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-time-line text-bernardos-red mt-0.5"></i>
                <span className="text-gray-400">Seg–Sex, 9h–18h</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-map-pin-line text-bernardos-red mt-0.5"></i>
                <span className="text-gray-400">Lisboa e Região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <Link to="/politica-privacidade" className="hover:text-bernardos-red transition-colors cursor-pointer whitespace-nowrap">Política de Privacidade</Link>
              <Link to="/politica-cookies" className="hover:text-bernardos-red transition-colors cursor-pointer whitespace-nowrap">Política de Cookies</Link>
              <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-bernardos-red transition-colors cursor-pointer whitespace-nowrap">Livro de Reclamações</a>
              <Link to="/areas-atendimento" className="hover:text-bernardos-red transition-colors cursor-pointer whitespace-nowrap">Áreas de Atendimento</Link>
            </div>
            <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-bernardos-red transition-colors cursor-pointer whitespace-nowrap">
              Website Builder
            </a>
          </div>

          <div className="bg-bernardos-red/10 border border-bernardos-red/20 rounded-lg p-4 mb-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <i className="ri-information-line text-bernardos-red mr-1"></i>
              Serralheria e Remodelações em Geral – Lisboa e Região. Serviços profissionais com qualidade, rigor e cumprimento de prazos.
            </p>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>Serralheria Bernardo's ® 2025. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}