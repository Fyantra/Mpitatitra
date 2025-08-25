import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Users, Phone, Mail, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps = {}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'accueil/la-mutualisation-transport-service-transporteurs-1.jpg',
      title: 'MPITATITRA',
      subtitle: 'Entreprise spécialisée dans le transport routier à Madagascar',
      slogan: 'Transport l\'essentiel, livrer l\'excellence',
      overlay: 'bg-black/50'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Nos Services',
      subtitle: 'Solutions complètes de transport et logistique',
      slogan: 'Fiabilité et professionnalisme garantis',
      overlay: 'bg-blue-900/50'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Véhicules Modernes',
      subtitle: 'Flotte diversifiée pour tous vos besoins',
      slogan: 'Sécurité et confort assurés',
      overlay: 'bg-green-900/50'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 ${slide.overlay}`} />
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl font-medium animate-fade-in-up animation-delay-400"
                   style={{ color: 'rgb(223, 0, 28)' }}>
                  {slide.slogan}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-3 md:h-3 w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Qui sommes-nous ?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                <strong style={{ color: 'rgb(223, 0, 28)' }}>MPITATITRA</strong> est une entreprise spécialisée dans le transport routier et la logistique à Madagascar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Depuis notre création, nous nous engageons à offrir des solutions de transport fiables, sécurisées et adaptées aux besoins spécifiques de nos clients. Notre expertise couvre l'ensemble du territoire malgache, des zones urbaines aux régions les plus reculées.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Que vous soyez une entreprise, un commerçant ou un particulier, nous mettons à votre disposition notre flotte moderne et notre équipe expérimentée pour garantir le transport de vos biens et personnes dans les meilleures conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre mission est de faciliter vos échanges commerciaux et personnels en vous offrant un service de qualité, ponctuel et professionnel, contribuant ainsi au développement économique de Madagascar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">
              Solutions complètes pour tous vos besoins de transport
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Transport Marchandises</h3>
              <p className="text-gray-600 text-center mb-6">
                Déménagement, expédition, transbordement avec une flotte adaptée de 2 à 32 tonnes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => onNavigate?.('transport-marchandises-services')}
                  className="px-6 py-2 bg-white border-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ borderColor: 'rgb(223, 0, 28)', color: 'rgb(223, 0, 28)' }}
                >
                  Nos Services
                </button>
                <button 
                  onClick={() => onNavigate?.('transport-marchandises-vehicules')}
                  className="px-6 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'rgb(223, 0, 28)' }}
                >
                  Véhicules Disponibles
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Transport Public</h3>
              <p className="text-gray-600 text-center mb-6">
                Services VIP pour événements, excursions touristiques et déplacements officiels.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => onNavigate?.('transport-public-services')}
                  className="px-6 py-2 bg-white border-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  style={{ borderColor: 'rgb(223, 0, 28)', color: 'rgb(223, 0, 28)' }}
                >
                  Nos Services
                </button>
                <button 
                  onClick={() => onNavigate?.('transport-public-vehicules')}
                  className="px-6 py-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'rgb(223, 0, 28)' }}
                >
                  Véhicules Disponibles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-xl text-gray-600">Les avantages qui font la différence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ponctualité</h3>
              <p className="text-gray-600">Respect des délais et des horaires convenus</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>★</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Professionnalisme</h3>
              <p className="text-gray-600">Équipe expérimentée et formation continue</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>🗺</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Connaissance Terrain</h3>
              <p className="text-gray-600">Expertise locale et routes optimisées</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold" style={{ color: 'rgb(223, 0, 28)' }}>👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Suivi Personnalisé</h3>
              <p className="text-gray-600">Service client dédié et suivi en temps réel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en transport et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+261341234567" 
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              style={{ backgroundColor: 'rgb(223, 0, 28)' }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler maintenant
            </a>
            <a 
              href="mailto:contact@mpitatitra.mg" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
              style={{ borderColor: 'rgb(223, 0, 28)', color: 'rgb(223, 0, 28)' }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;