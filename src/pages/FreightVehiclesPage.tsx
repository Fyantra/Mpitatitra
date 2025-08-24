import { Truck } from 'lucide-react';

const FreightVehiclesPage = () => {
  const vehicles = [
    { capacity: '2T', type: 'Camionnette', usage: 'Livraisons urbaines, colis légers' },
    { capacity: '3.5T', type: 'Camionnette renforcée', usage: 'Transport régional, marchandises moyennes' },
    { capacity: '5T', type: 'Camion léger', usage: 'Déménagements particuliers, transport local' },
    { capacity: '8T', type: 'Camion moyen', usage: 'Transport régional, volumes importants' },
    { capacity: '10T', type: 'Camion moyen+', usage: 'Transport interrégional, marchandises diverses' },
    { capacity: '12T', type: 'Camion lourd', usage: 'Transport longue distance, gros volumes' },
    { capacity: '22T', type: 'Semi-remorque', usage: 'Transport industriel, marchandises lourdes' },
    { capacity: '32T', type: 'Ensemble routier', usage: 'Transport industriel, très gros volumes' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transport de Marchandises - Véhicules Disponibles</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Flotte diversifiée de 2 à 32 tonnes pour tous vos besoins de transport
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Flotte</h2>
            <p className="text-lg text-gray-600">Véhicules adaptés à chaque type de transport</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                    <div>
                      <h3 className="font-bold text-lg">Camion {vehicle.capacity}</h3>
                      <p className="text-sm text-gray-600">{vehicle.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>
                      {vehicle.capacity}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{vehicle.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default FreightVehiclesPage;