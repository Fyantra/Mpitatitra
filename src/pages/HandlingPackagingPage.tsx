import React from 'react';
import { Package, Truck, Shield, Users, CheckCircle, Settings } from 'lucide-react';

const HandlingPackagingPage = () => {
  const handlingServices = [
    {
      title: 'Chargement et Déchargement',
      description: 'Manipulation sécurisée de vos marchandises avec équipement spécialisé',
      features: ['Équipement moderne', 'Personnel qualifié', 'Sécurité maximale', 'Rapidité d\'exécution']
    },
    {
      title: 'Stockage Temporaire',
      description: 'Solutions de stockage sécurisé pour vos marchandises en transit',
      features: ['Entrepôts sécurisés', 'Contrôle d\'accès', 'Surveillance 24h/24', 'Conditions optimales']
    },
    {
      title: 'Manutention Spécialisée',
      description: 'Transport d\'objets lourds, fragiles ou de dimensions particulières',
      features: ['Équipement adapté', 'Techniques spécialisées', 'Assurance dédiée', 'Expertise technique']
    }
  ];

  const packagingServices = [
    {
      title: 'Emballage Standard',
      description: 'Protection optimale pour tous types de marchandises courantes',
      features: ['Matériaux de qualité', 'Techniques éprouvées', 'Protection efficace', 'Coût optimisé']
    },
    {
      title: 'Emballage Renforcé',
      description: 'Solutions d\'emballage pour marchandises fragiles ou de valeur',
      features: ['Protection maximale', 'Matériaux premium', 'Techniques avancées', 'Garantie qualité']
    },
    {
      title: 'Emballage Sur Mesure',
      description: 'Conceptions personnalisées selon vos besoins spécifiques',
      features: ['Solution personnalisée', 'Étude préalable', 'Conception unique', 'Adaptabilité totale']
    }
  ];

  const equipment = [
    { name: 'Transpalettes électriques', capacity: 'Jusqu\'à 2T', usage: 'Manutention rapide' },
    { name: 'Chariots élévateurs', capacity: 'Jusqu\'à 5T', usage: 'Chargement hauteur' },
    { name: 'Grues mobiles', capacity: 'Jusqu\'à 10T', usage: 'Objets lourds' },
    { name: 'Sangles et protection', capacity: 'Variable', usage: 'Sécurisation' },
    { name: 'Matériel d\'emballage', capacity: 'Tous formats', usage: 'Protection marchandises' },
    { name: 'Équipement de levage', capacity: 'Selon besoin', usage: 'Manutention spécialisée' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Service de Manutention et d'Emballage</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Solutions professionnelles de manutention et d'emballage pour la protection optimale de vos marchandises
            </p>
          </div>
        </div>
      </section>

      {/* Manutention Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Services de Manutention</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              La manutention consiste en l'ensemble des opérations de chargement, déchargement, 
              transbordement et manipulation des marchandises. Notre équipe spécialisée utilise 
              des équipements modernes pour garantir la sécurité et l'intégrité de vos biens 
              lors de chaque manipulation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {handlingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3" style={{ color: 'rgb(223, 0, 28)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emballage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Services d'Emballage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              L'emballage professionnel est essentiel pour protéger vos marchandises pendant 
              le transport. Nous utilisons des matériaux adaptés et des techniques éprouvées 
              pour assurer une protection optimale contre les chocs, l'humidité et autres 
              risques liés au transport.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packagingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Package className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3" style={{ color: 'rgb(223, 0, 28)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Équipements Disponibles</h2>
            <p className="text-lg text-gray-600">Matériel moderne et spécialisé pour tous types de manutention</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.capacity}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Processus</h2>
            <p className="text-lg text-gray-600">Une approche méthodique pour votre satisfaction</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Évaluation</h3>
              <p className="text-gray-600 text-sm">Analyse des besoins et des contraintes spécifiques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Préparation</h3>
              <p className="text-gray-600 text-sm">Sélection du matériel et préparation de l'emballage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Exécution</h3>
              <p className="text-gray-600 text-sm">Manutention et emballage professionnel sécurisé</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Contrôle</h3>
              <p className="text-gray-600 text-sm">Vérification qualité et validation finale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Avantages</h2>
            <p className="text-lg text-gray-600">Pourquoi choisir nos services de manutention et emballage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Personnel Qualifié</h3>
              <p className="text-gray-600">Équipe formée aux techniques de manutention et emballage</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sécurité</h3>
              <p className="text-gray-600">Respect des normes de sécurité et assurance complète</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Settings className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Équipement Moderne</h3>
              <p className="text-gray-600">Matériel à la pointe de la technologie</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Qualité Garantie</h3>
              <p className="text-gray-600">Service de qualité avec garantie satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin de Nos Services ?</h2>
          <p className="text-xl mb-8">Contactez-nous pour vos besoins en manutention et emballage</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Demander un Devis
            </button>
            <button 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-800 transition-colors"
              style={{ borderColor: 'rgb(223, 0, 28)', color: 'rgb(223, 0, 28)' }}
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandlingPackagingPage;