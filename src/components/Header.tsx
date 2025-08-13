
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative group">
            {/* Effet de glow subtil en arrière-plan */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10 rounded-lg blur-sm group-hover:blur-md opacity-50 group-hover:opacity-75 transition-all duration-300" style={{ background: 'linear-gradient(45deg, rgba(223, 0, 28, 0.1), rgba(223, 0, 28, 0.15), rgba(223, 0, 28, 0.1))' }}></div>
            
            {/* Logo avec effet de contraste pour la visibilité */}
            <div className="relative">
              <img 
                src="/lovable-uploads/730b2c6e-ca3e-452f-923e-dacfb42650c5.png" 
                alt="MPITATITRA Logo" 
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-red-600" style={{ color: 'rgb(223, 0, 28)' }} />
            <div>
              <p className="text-sm text-gray-300">Téléphone</p>
              <p className="font-medium">0 34 XX XXX XX/032 XX XXX XX</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-red-600" style={{ color: 'rgb(223, 0, 28)' }} />
            <div>
              <p className="text-sm text-gray-300">Email</p>
              <p className="font-medium">contact@mpitatitra.mg</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-red-600" style={{ color: 'rgb(223, 0, 28)' }} />
            <div>
              <p className="text-sm text-gray-300">Localisation</p>
              <p className="font-medium">Antananarivo, Madagascar</p>
            </div>
          </div>
        </div>

        {/* Mobile Contact */}
        <div className="md:hidden flex flex-col items-end text-right">
          <p className="text-sm font-medium">+261 20 XX XXX XX</p>
          <p className="text-xs text-gray-300">contact@mpitatitra.mg</p>
        </div>
      </div>
    </header>
  );
};

export default Header;