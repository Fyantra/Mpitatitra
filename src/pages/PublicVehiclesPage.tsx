import { Users } from 'lucide-react';

const PublicVehiclesPage = () => {
  const vehicles = [
    { capacity: '4 passagers', type: 'Berline Premium', usage: 'Transferts VIP, rendez-vous d\'affaires' },
    { capacity: '6 passagers', type: 'SUV Confort', usage: 'Familles, petits groupes' },
    { capacity: '10 passagers', type: 'Minibus Premium', usage: 'Groupes moyens, événements' },
    { capacity: '15 passagers', type: 'Minibus Grand Format', usage: 'Délégations, excursions' },
    { capacity: '21 passagers', type: 'Microbus Confort', usage: 'Groupes importants, événements' },
    { capacity: '31 passagers', type: 'Autocar Premium', usage: 'Grands groupes, voyages organisés' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transport Public - Véhicules Disponibles</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Flotte premium de 4 à 31 passagers pour tous vos besoins de transport
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Flotte VIP</h2>
            <p className="text-lg text-gray-600">Véhicules confortables et sécurisés pour tous vos déplacements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                    <div>
                      <h3 className="font-bold text-lg">{vehicle.capacity}</h3>
                      <p className="text-sm text-gray-600">{vehicle.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>
                      {vehicle.capacity.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{vehicle.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Équipements de Confort</h2>
            <p className="text-lg text-gray-600">Tous nos véhicules sont équipés pour votre confort</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>❄️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Climatisation</h3>
              <p className="text-gray-600 text-sm">Confort thermique garanti</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🛋️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sièges Confort</h3>
              <p className="text-gray-600 text-sm">Sièges ergonomiques et spacieux</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🔊</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Audio/Vidéo</h3>
              <p className="text-gray-600 text-sm">Système multimédia intégré</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">Équipements de sécurité complets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Types de Services</h2>
            <p className="text-lg text-gray-600">Adaptés à tous vos besoins de transport</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🏢</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Événements Professionnels</h3>
              <p className="text-gray-600 text-sm">Séminaires, conférences, réunions d'entreprise</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🏞️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Excursions Touristiques</h3>
              <p className="text-gray-600 text-sm">Circuits découverte, visites guidées</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✈️</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Transferts Aéroport</h3>
              <p className="text-gray-600 text-sm">Navettes personnalisées depuis/vers l'aéroport</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicVehiclesPage;