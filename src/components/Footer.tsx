import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">MPITATITRA</h3>
                <p className="text-sm text-gray-300">Transport & Logistique</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Entreprise spécialisée dans le transport routier et la logistique à Madagascar. 
              Nous offrons des solutions complètes et professionnelles pour tous vos besoins de transport.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: 'rgb(223, 0, 28)' }}>Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Transport Marchandises</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Transport Public VIP</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manutention</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emballage</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Logistique</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: 'rgb(223, 0, 28)' }}>Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" style={{ color: 'rgb(223, 0, 28)' }} />
                <span className="text-gray-300">+261 20 XX XXX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" style={{ color: 'rgb(223, 0, 28)' }} />
                <span className="text-gray-300">contact@mpitatitra.mg</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" style={{ color: 'rgb(223, 0, 28)' }} />
                <span className="text-gray-300">Antananarivo, Madagascar</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: 'rgb(223, 0, 28)' }}>Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-bold mb-2">Horaires</h5>
              <p className="text-sm text-gray-300">
                Lun - Ven: 7h00 - 18h00<br />
                Sam: 8h00 - 12h00<br />
                Dim: Sur demande
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2025 MPITATITRA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;