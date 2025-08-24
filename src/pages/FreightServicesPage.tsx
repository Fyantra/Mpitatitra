import { Truck, ArrowRightLeft, Plane, Home, Building } from 'lucide-react';
import { Package, Settings } from 'lucide-react';

const FreightServicesPage = () => {
  const services = [
    {
      icon: Home,
      title: 'Déménagement Entrepôt / Particulier',
      description: 'Service complet de déménagement avec emballage, transport et déballage sécurisés.',
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: ArrowRightLeft,
      title: 'Déplacement',
      description: 'Solutions flexibles pour tous vos besoins de déplacement de marchandises.',
      image: 'https://images.pexels.com/photos/586020/pexels-photo-586020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Building,
      title: 'Animation',
      description: 'Transport spécialisé pour équipements d\'animation et événementiel.',
      image: 'https://images.pexels.com/photos/6169643/pexels-photo-6169643.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Plane,
      title: 'Expédition',
      description: 'Service d\'expédition rapide et sécurisé vers toutes destinations.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: ArrowRightLeft,
      title: 'Transbordement',
      description: 'Transfert efficace de marchandises entre différents moyens de transport.',
      image: 'https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      title: 'Montage et Démontage Meuble',
      description: 'Service professionnel de montage et démontage de mobilier.',
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Package,
      title: 'Service de Manutention et Emballage',
      description: 'Solutions complètes de manutention et emballage sécurisé.',
      image: 'https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transport de Marchandises - Nos Services</h1>
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
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6" style={{ color: 'rgb(223, 0, 28)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
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
    </div>
  );
};

export default FreightServicesPage;