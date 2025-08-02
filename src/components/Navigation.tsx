import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'qui-sommes-nous', label: 'QUI SOMMES-NOUS' },
    { id: 'transport-marchandises', label: 'TRANSPORT MARCHANDISES' },
    { id: 'transport-public', label: 'TRANSPORT PUBLIC' },
    { id: 'service-manutention', label: 'SERVICE DE MANUTENTION ET D\'EMBALLAGE' },
  ];

  const handleMenuClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between lg:justify-center items-center">
          {/* Logo mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg">MPITATITRA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`py-4 px-6 text-sm font-medium transition-all duration-300 border-b-2 hover:text-red-600 ${
                  currentPage === item.id
                    ? 'text-red-600 border-red-600'
                    : 'text-gray-700 border-transparent hover:border-red-600'
                }`}
                style={{ 
                  color: currentPage === item.id ? 'rgb(223, 0, 28)' : '',
                  borderColor: currentPage === item.id ? 'rgb(223, 0, 28)' : ''
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-red-600 transition-colors"
              style={{ color: isMenuOpen ? 'rgb(223, 0, 28)' : '' }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`block w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                  currentPage === item.id
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
                style={{ 
                  color: currentPage === item.id ? 'rgb(223, 0, 28)' : '',
                  backgroundColor: currentPage === item.id ? 'rgba(223, 0, 28, 0.1)' : ''
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;