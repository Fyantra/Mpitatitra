import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'qui-sommes-nous', label: 'QUI SOMMES-NOUS' },
    { 
      id: 'transport-marchandises', 
      label: 'TRANSPORT MARCHANDISES',
      hasDropdown: true,
      submenu: [
        { id: 'transport-marchandises-services', label: 'NOS SERVICES' },
        { id: 'transport-marchandises-vehicules', label: 'VEHICULES DISPONIBLES' }
      ]
    },
    { 
      id: 'transport-public', 
      label: 'TRANSPORT PUBLIC',
      hasDropdown: true,
      submenu: [
        { id: 'transport-public-services', label: 'NOS SERVICES' },
        { id: 'transport-public-vehicules', label: 'VEHICULES DISPONIBLES' }
      ]
    }
  ];

  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(item => item.id === currentPage);
    return currentItem ? currentItem.label : 'ACCUEIL';
  };

  const handleMenuClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between lg:justify-center items-center">
          {/* Titre de page mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <span className="font-bold text-lg text-gray-800">{getCurrentPageTitle()}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`py-4 px-6 text-sm font-medium transition-all duration-300 border-b-2 hover:text-red-600 flex items-center space-x-1 ${
                        currentPage.startsWith(item.id)
                          ? 'text-red-600 border-red-600'
                          : 'text-gray-700 border-transparent hover:border-red-600'
                      }`}
                      style={{ 
                        color: currentPage.startsWith(item.id) ? 'rgb(223, 0, 28)' : '',
                        borderColor: currentPage.startsWith(item.id) ? 'rgb(223, 0, 28)' : ''
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-max z-50">
                      {item.submenu?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleMenuClick(subItem.id)}
                          className={`block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-gray-50 ${
                            currentPage === subItem.id
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-700 hover:text-red-600'
                          }`}
                          style={{ 
                            color: currentPage === subItem.id ? 'rgb(223, 0, 28)' : '',
                            backgroundColor: currentPage === subItem.id ? 'rgba(223, 0, 28, 0.1)' : ''
                          }}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
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
                )}
              </div>
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
              <div key={item.id}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`flex items-center justify-between w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                        currentPage.startsWith(item.id)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                      style={{ 
                        color: currentPage.startsWith(item.id) ? 'rgb(223, 0, 28)' : '',
                        backgroundColor: currentPage.startsWith(item.id) ? 'rgba(223, 0, 28, 0.1)' : ''
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 space-y-1 transition-all duration-300 ${
                      activeDropdown === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.submenu?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleMenuClick(subItem.id)}
                          className={`block w-full text-left py-2 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                            currentPage === subItem.id
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                          }`}
                          style={{ 
                            color: currentPage === subItem.id ? 'rgb(223, 0, 28)' : '',
                            backgroundColor: currentPage === subItem.id ? 'rgba(223, 0, 28, 0.1)' : ''
                          }}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;