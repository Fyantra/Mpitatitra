import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Users, Package } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
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

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Solutions complètes pour tous vos besoins de transport</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Transport Marchandises</h3>
              <p className="text-gray-600 text-center mb-6">
                Déménagement, expédition, transbordement avec une flotte adaptée de 2 à 32 tonnes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Déménagement entrepôt/particulier</li>
                <li>• Expédition sécurisée</li>
                <li>• Transbordement</li>
                <li>• Véhicules spécialisés disponibles</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Transport Public</h3>
              <p className="text-gray-600 text-center mb-6">
                Services VIP pour événements, excursions touristiques et déplacements officiels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Navettes VIP événements</li>
                <li>• Excursions touristiques premium</li>
                <li>• Transfert aéroport</li>
                <li>• Location avec chauffeur privé</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Package className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Manutention & Emballage</h3>
              <p className="text-gray-600 text-center mb-6">
                Services complets de manutention et d'emballage professionnel pour vos marchandises.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Manutention spécialisée</li>
                <li>• Emballage sécurisé</li>
                <li>• Équipement moderne</li>
                <li>• Personnel qualifié</li>
              </ul>
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
    </div>
  );
};

export default HomePage;