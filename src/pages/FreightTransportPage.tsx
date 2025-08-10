import { Truck, ArrowRightLeft, Plane, Home, Building } from 'lucide-react';

const FreightTransportPage = () => {
  const services = [
    {
      icon: Home,
      title: 'Déménagement Entrepôt / Particulier',
      description: 'Service complet de déménagement avec emballage, transport et déballage sécurisés.',
      features: ['Emballage professionnel', 'Transport sécurisé', 'Déballage et installation', 'Assurance complète']
    },
    {
      icon: ArrowRightLeft,
      title: 'Déplacement',
      description: 'Solutions flexibles pour tous vos besoins de déplacement de marchandises.',
      features: ['Planification optimisée', 'Suivi en temps réel', 'Équipe spécialisée', 'Délais respectés']
    },
    {
      icon: Building,
      title: 'Animation',
      description: 'Transport spécialisé pour équipements d\'animation et événementiel.',
      features: ['Matériel délicat', 'Installation sur site', 'Personnel qualifié', 'Support technique']
    },
    {
      icon: Plane,
      title: 'Expédition',
      description: 'Service d\'expédition rapide et sécurisé vers toutes destinations.',
      features: ['Livraison express', 'Suivi détaillé', 'Emballage adapté', 'Garantie de livraison']
    },
    {
      icon: ArrowRightLeft,
      title: 'Transbordement',
      description: 'Transfert efficace de marchandises entre différents moyens de transport.',
      features: ['Coordination optimale', 'Réduction des délais', 'Sécurité maximale', 'Coûts optimisés']
    }
  ];

  const vehicles = [
    { capacity: '2T', type: 'Camionnette', usage: 'Livraisons urbaines, colis' },
    { capacity: '5T', type: 'Camion léger', usage: 'Déménagements particuliers' },
    { capacity: '10T', type: 'Camion moyen', usage: 'Transport régional' },
    { capacity: '15T', type: 'Camion lourd', usage: 'Transport longue distance' },
    { capacity: '20T', type: 'Semi-remorque', usage: 'Gros volumes' },
    { capacity: '32T', type: 'Ensemble routier', usage: 'Transport industriel' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transport de Marchandises</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Solutions complètes et professionnelles pour tous vos besoins de transport de marchandises à Madagascar
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">Une gamme complète de services adaptés à vos besoins</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3" style={{ backgroundColor: 'rgb(223, 0, 28)' }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Processus</h2>
            <p className="text-lg text-gray-600">Un service structuré pour votre satisfaction</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Demande</h3>
              <p className="text-gray-600 text-sm">Évaluation de vos besoins et devis personnalisé</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Planification</h3>
              <p className="text-gray-600 text-sm">Organisation logistique et sélection du véhicule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Transport</h3>
              <p className="text-gray-600 text-sm">Enlèvement, transport sécurisé et suivi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Livraison</h3>
              <p className="text-gray-600 text-sm">Livraison à destination et confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default FreightTransportPage;