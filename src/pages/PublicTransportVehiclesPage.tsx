import React from 'react';
import { Users } from 'lucide-react';

const PublicTransportVehiclesPage = () => {
  const vehicles = [
    { capacity: '4 passagers', type: 'Berline VIP', description: 'Confort premium pour déplacements d\'affaires' },
    { capacity: '6 passagers', type: 'SUV Premium', description: 'Espace et élégance pour petits groupes' },
    { capacity: '10 passagers', type: 'Van VIP', description: 'Solution idéale pour équipes et familles' },
    { capacity: '15 passagers', type: 'Minibus Confort', description: 'Transport de groupe avec standing' },
    { capacity: '21 passagers', type: 'Minibus Premium', description: 'Capacité optimale pour événements' },
    { capacity: '31 passagers', type: 'Autocar VIP', description: 'Grand confort pour groupes importants' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Véhicules Disponibles</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Flotte premium de 4 à 31 passagers pour tous vos déplacements VIP
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Flotte VIP</h2>
            <p className="text-lg text-gray-600">Des véhicules haut de gamme pour chaque occasion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{vehicle.type}</h3>
                  <div className="text-2xl font-bold mb-4" style={{ color: 'rgb(223, 0, 28)' }}>
                    {vehicle.capacity}
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Équipements Standard</h2>
            <p className="text-lg text-gray-600">Confort et sécurité garantis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>❄️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Climatisation</h3>
              <p className="text-gray-600 text-sm">Confort thermique optimal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🛡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">Équipements de sécurité avancés</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>👨‍💼</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Chauffeur Pro</h3>
              <p className="text-gray-600 text-sm">Chauffeurs expérimentés et courtois</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>⭐</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Service Premium</h3>
              <p className="text-gray-600 text-sm">Attention aux détails et service personnalisé</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicTransportVehiclesPage;