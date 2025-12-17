import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img 
              src="/assets/logo-bernardos.png" 
              alt="Serralheria Bernardo's Logo" 
              className="h-16 w-16 object-cover rounded-full border-2 border-bernardos-red"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/serralharia" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/serralharia') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Serralharia
            </Link>
            <Link 
              to="/remodelacoes" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/remodelacoes') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Remodelações
            </Link>
            <Link 
              to="/pintura" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/pintura') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Pintura
            </Link>
            <Link 
              to="/pladur" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/pladur') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Pladur
            </Link>
            <Link 
              to="/eletricos" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/eletricos') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Elétricos
            </Link>
            <Link 
              to="/sobre" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/sobre') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Sobre nós
            </Link>
            <Link 
              to="/contato" 
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive('/contato') ? 'text-bernardos-red' : 'text-gray-700 hover:text-bernardos-red'
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark text-white rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer whitespace-nowrap text-sm flex items-center gap-2"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Solicitar Orçamento
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/serralharia" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Serralharia</Link>
            <Link to="/remodelacoes" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Remodelações</Link>
            <Link to="/pintura" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Pintura</Link>
            <Link to="/pladur" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Pladur</Link>
            <Link to="/eletricos" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Elétricos</Link>
            <Link to="/manutencao" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Manutenção</Link>
            <Link to="/sobre" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Sobre nós</Link>
            <Link to="/contato" className="py-2 text-gray-700 hover:text-bernardos-red cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            <a 
              href="https://wa.me/351968747769?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 px-5 py-2.5 bg-gradient-to-r from-bernardos-red to-bernardos-red-dark text-white rounded-lg font-medium text-center cursor-pointer whitespace-nowrap"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}