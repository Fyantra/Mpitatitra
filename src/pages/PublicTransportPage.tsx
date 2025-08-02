import React from 'react';
import { Users, Star, MapPin, Clock, Shield, Car } from 'lucide-react';

const PublicTransportPage = () => {
  const services = [
    {
      icon: Users,
      title: 'Navettes VIP pour événements d\'entreprise',
      description: 'Transport haut de gamme pour vos événements professionnels et réceptions.',
      features: ['Véhicules de luxe', 'Chauffeurs professionnels', 'Service ponctuel', 'Confort premium']
    },
    {
      icon: Star,
      title: 'Congrès, séminaires, mariages haut de gamme',
      description: 'Solutions de transport élégantes pour vos événements les plus importants.',
      features: ['Flotte premium', 'Service personnalisé', 'Coordination événementielle', 'Discrétion assurée']
    },
    {
      icon: MapPin,
      title: 'Excursions touristiques premium',
      description: 'Découvrez Madagascar avec notre service d\'excursions de qualité supérieure.',
      features: ['Guides expérimentés', 'Itinéraires exclusifs', 'Véhicules climatisés', 'Expérience unique']
    },
    {
      icon: Shield,
      title: 'Déplacement de délégations officielles',
      description: 'Transport sécurisé et protocolaire pour délégations et personnalités.',
      features: ['Sécurité renforcée', 'Respect du protocole', 'Confidentialité', 'Ponctualité absolue']
    },
    {
      icon: Car,
      title: 'Transfert VIP aéroport ↔ hôtel / résidence',
      description: 'Service de transfert premium entre l\'aéroport et votre destination.',
      features: ['Accueil personnalisé', 'Suivi des vols', 'Véhicules haut de gamme', 'Service 24h/7j']
    },
    {
      icon: Clock,
      title: 'Location avec chauffeur privé',
      description: 'Mise à disposition d\'un véhicule avec chauffeur pour vos déplacements.',
      features: ['Disponibilité flexible', 'Chauffeur dédié', 'Tarifs préférentiels', 'Service personnalisé']
    }
  ];

  const additionalServices = [
    'Tours privés ou circuits sur demande',
    'Transport de stars ou VIP locaux (artistes, personnalités)',
    'Service de conciergerie transport',
    'Coordination multi-véhicules pour groupes'
  ];

  const vehicles = [
    { type: 'Berline de luxe', capacity: '3-4 passagers', features: ['Climatisation', 'Cuir', 'WiFi'] },
    { type: 'SUV Premium', capacity: '5-7 passagers', features: ['Tout-terrain', 'Confort', 'Sécurité'] },
    { type: 'Van VIP', capacity: '8-15 passagers', features: ['Espace généreux', 'Équipements premium'] },
    { type: 'Minibus de luxe', capacity: '16-25 passagers', features: ['Climatisation', 'Sièges ergonomiques'] },
    { type: 'Autocar VIP', capacity: '26-32 passagers', features: ['Grand confort', 'Équipements modernes'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transport Public VIP</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Services de transport premium pour particuliers, entreprises et événements à Madagascar
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services VIP</h2>
            <p className="text-lg text-gray-600">Excellence et raffinement pour tous vos déplacements</p>
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

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Services Complémentaires</h2>
            <p className="text-lg text-gray-600">Pour répondre à tous vos besoins spécifiques</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Véhicules Disponibles</h2>
            <p className="text-lg text-gray-600">Flotte premium de 5 à 32 places pour tous vos événements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Car className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                    <div>
                      <h3 className="font-bold text-lg">{vehicle.type}</h3>
                      <p className="text-sm text-gray-600">{vehicle.capacity}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3" style={{ backgroundColor: 'rgb(223, 0, 28)' }}></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VIP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi Choisir Notre Service VIP ?</h2>
            <p className="text-lg text-gray-600">L'excellence au service de vos déplacements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sécurité</h3>
              <p className="text-gray-600">Véhicules entretenus, chauffeurs expérimentés et assurance complète</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Luxe</h3>
              <p className="text-gray-600">Véhicules haut de gamme avec équipements premium</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Ponctualité</h3>
              <p className="text-gray-600">Respect strict des horaires et planification optimisée</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Service</h3>
              <p className="text-gray-600">Accompagnement personnalisé et service clientèle dédié</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez Votre Transport VIP</h2>
          <p className="text-xl mb-8">Un service d'exception pour vos déplacements les plus importants</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Réserver Maintenant
            </button>
            <button 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
              style={{ borderColor: 'rgb(223, 0, 28)', color: 'rgb(223, 0, 28)' }}
            >
              Demander un Devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicTransportPage;