import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">MPITATITRA</h1>
            <p className="text-sm text-gray-300">Transport & Logistique</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-red-600" style={{ color: 'rgb(223, 0, 28)' }} />
            <div>
              <p className="text-sm text-gray-300">Téléphone</p>
              <p className="font-medium">+261 20 XX XXX XX</p>
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