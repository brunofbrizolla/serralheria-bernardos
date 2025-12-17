import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://i.ibb.co/9HRRKhQf/Imagem-do-Whats-App-de-2025-11-13-s-10-48-58-4162b361.webp" 
                alt="Greenelite Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Greenelite</span>
                <span className="text-xs text-gray-400">Pladur, Barramento e Pinturas</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empresa de prestação de serviços focada na construção civil, trabalhamos com Pladur, barramentos gerais, tetos falsos, tetos amovíveis, pintura, remodelação geral com mais de 20 anos de experiência.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#D4AF37] transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#D4AF37] transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#D4AF37] transition-colors cursor-pointer">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Home</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Serviços</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Sobre nós</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/pladur" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Pladur</Link></li>
              <li><Link to="/barramento" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Barramento Geral</Link></li>
              <li><Link to="/pintura-industrial" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Pintura Industrial</Link></li>
              <li><Link to="/pinturas-geral" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Pinturas Geral</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Teto Falso</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Chão Flutuante</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">Remodelação Geral</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-phone-line text-[#D4AF37] mt-0.5"></i>
                <a href="tel:+351934459441" className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">+351 934 459 441</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-mail-line text-[#D4AF37] mt-0.5"></i>
                <a href="mailto:greenelite.flavio@outlook.pt" className="text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer">greenelite.flavio@outlook.pt</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-time-line text-[#D4AF37] mt-0.5"></i>
                <span className="text-gray-400">Seg–Sex, 9h–18h</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <i className="ri-map-pin-line text-[#D4AF37] mt-0.5"></i>
                <span className="text-gray-400">Vale Verde, 7540-230 Santiago do Cacém</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <Link to="/politica-privacidade" className="hover:text-[#D4AF37] transition-colors cursor-pointer whitespace-nowrap">Política de Privacidade</Link>
              <Link to="/politica-cookies" className="hover:text-[#D4AF37] transition-colors cursor-pointer whitespace-nowrap">Política de Cookies</Link>
              <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors cursor-pointer whitespace-nowrap">Livro de Reclamações</a>
              <Link to="/areas-atendimento" className="hover:text-[#D4AF37] transition-colors cursor-pointer whitespace-nowrap">Áreas de Atendimento</Link>
            </div>
            <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer whitespace-nowrap">
              Website Builder
            </a>
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-4 mb-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <i className="ri-information-line text-[#D4AF37] mr-1"></i>
              Empresa certificada com mais de 20 anos de experiência em construção civil, especializada em Pladur, barramento, pintura e remodelação geral.
            </p>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>Greenelite unipessoal Lda ® 2025. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}