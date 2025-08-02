import React from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous' },
    { id: 'transport-marchandises', label: 'Transport Marchandises' },
    { id: 'transport-public', label: 'Transport Public' },
    { id: 'service-manutention', label: 'Service de Manutention et d\'Emballage' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
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

          {/* Mobile Menu */}
          <div className="lg:hidden w-full">
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              className="w-full py-3 px-4 bg-white border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
            >
              {menuItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;