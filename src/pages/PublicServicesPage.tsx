import { Users, Calendar, MapPin, Shield } from 'lucide-react';

const PublicServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: 'Transport VIP Événements',
      description: 'Service premium pour vos événements d\'entreprise et réceptions officielles.'
    },
    {
      icon: Calendar,
      title: 'Excursions Touristiques Premium',
      description: 'Découvrez Madagascar avec confort et style grâce à nos circuits sur mesure.'
    },
    {
      icon: MapPin,
      title: 'Transfert Aéroport',
      description: 'Service de navette premium entre l\'aéroport et votre destination.'
    },
    {
      icon: Shield,
      title: 'Location avec Chauffeur Privé',
      description: 'Mise à disposition de véhicule avec chauffeur pour vos déplacements.'
    },
    {
      icon: Users,
      title: 'Navettes VIP pour événements d\'entreprise',
      description: 'Transport haut de gamme pour vos événements professionnels et réceptions.'
    },
    {
      icon: Calendar,
      title: 'Congrès, séminaires, mariages haut de gamme',
      description: 'Solutions de transport élégantes pour vos événements les plus importants.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transport Public - Nos Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Services VIP pour événements, excursions touristiques et déplacements officiels
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Services VIP</h2>
            <p className="text-lg text-gray-600">Excellence et professionnalisme pour tous vos déplacements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Avantages de Notre Service VIP</h2>
            <p className="text-lg text-gray-600">Ce qui fait la différence dans notre approche</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ponctualité</h3>
              <p className="text-gray-600">Respect absolu des horaires convenus</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>★</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Confort</h3>
              <p className="text-gray-600">Véhicules premium et climatisés</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Flexibilité</h3>
              <p className="text-gray-600">Adaptation à vos besoins spécifiques</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sécurité</h3>
              <p className="text-gray-600">Chauffeurs expérimentés et assurance complète</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicServicesPage;