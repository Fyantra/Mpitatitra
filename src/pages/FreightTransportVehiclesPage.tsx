import React from 'react';
import { Truck } from 'lucide-react';

const FreightTransportVehiclesPage = () => {
  const vehicles = [
    { capacity: '2T', type: 'Camion 2T', description: 'Idéal pour livraisons urbaines et petits déménagements' },
    { capacity: '3.5T', type: 'Camion 3.5T', description: 'Transport de marchandises moyennes, déménagements particuliers' },
    { capacity: '5T', type: 'Camion 5T', description: 'Solutions polyvalentes pour transport régional' },
    { capacity: '8T', type: 'Camion 8T', description: 'Transport de volumes importants, équipements lourds' },
    { capacity: '10T', type: 'Camion 10T', description: 'Transport longue distance, marchandises volumineuses' },
    { capacity: '12T', type: 'Camion 12T', description: 'Solutions industrielles, transport de matériaux' },
    { capacity: '22T', type: 'Camion 22T', description: 'Transport lourd, équipements industriels' },
    { capacity: '32T', type: 'Camion 32T', description: 'Transport très lourd, projets industriels majeurs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Véhicules Disponibles</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Flotte diversifiée de 2 à 32 tonnes pour tous vos besoins de transport de marchandises
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Flotte</h2>
            <p className="text-lg text-gray-600">Des véhicules adaptés à chaque type de transport</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Truck className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{vehicle.type}</h3>
                  <div className="text-3xl font-bold mb-4" style={{ color: 'rgb(223, 0, 28)' }}>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Caractéristiques de Notre Flotte</h2>
            <p className="text-lg text-gray-600">Qualité et fiabilité garanties</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Entretien Régulier</h3>
              <p className="text-gray-600 text-sm">Maintenance préventive et contrôles techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🛡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">Équipements de sécurité et assurance complète</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Véhicules récents et performants</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🔧</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Adaptabilité</h3>
              <p className="text-gray-600 text-sm">Solutions sur mesure selon vos besoins</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreightTransportVehiclesPage;