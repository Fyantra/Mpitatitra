import { Target, MapPin, Award, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Qui sommes-nous ?</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              MPITATITRA, une entreprise spécialisée dans le transport routier et la logistique à Madagascar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Activity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Activité Principale</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
              Notre cœur de métier, c'est le transport public et le transport de marchandises par voie routière, 
              ainsi que la gestion logistique pour les entreprises et les particuliers.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <h3 className="font-bold">Transport Public</h3>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
                </div>
                <h3 className="font-bold">Transport Marchandises</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Objectifs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Notre mission est de développer et faciliter le transport à Madagascar en offrant des solutions innovantes et accessibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Développer le Transport</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Moderniser et étendre les services de transport routier à Madagascar pour répondre aux besoins croissants 
                des entreprises et des particuliers dans toutes les régions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-center">Faciliter les Échanges</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Simplifier et optimiser les déplacements et le transport de marchandises pour stimuler l'économie locale 
                et améliorer la qualité de vie des malgaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              Nous travaillons avec des entreprises locales, des commerçants, des agriculteurs, 
              mais aussi des particuliers qui ont besoin de transporter leurs biens en toute sécurité.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
                </div>
                <span className="font-medium">Entreprises locales</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
                </div>
                <span className="font-medium">Commerçants</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
                </div>
                <span className="font-medium">Agriculteurs</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold" style={{ color: 'rgb(223, 0, 28)' }}>✓</span>
                </div>
                <span className="font-medium">Particuliers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Atouts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ce qui nous distingue, c'est notre ponctualité, notre professionnalisme, 
              et surtout notre connaissance du terrain. Nous assurons des trajets réguliers 
              et sécurisés avec un suivi client personnalisé.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Ponctualité</h3>
              <p className="text-gray-600">Respect strict des horaires et des délais de livraison</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Professionnalisme</h3>
              <p className="text-gray-600">Équipe qualifiée and service de qualité supérieure</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-xl font-bold mb-4">Connaissance Terrain</h3>
              <p className="text-gray-600">Expertise locale et optimisation des itinéraires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Zone d'Intervention</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos services couvrent tout Madagascar, notamment les grands axes comme 
              Antananarivo – Toamasina – Fianarantsoa – Toliara – Majunga – Nosy Be Hell Ville.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(223, 0, 28)' }} />
              <h3 className="font-bold">Antananarivo</h3>
              <p className="text-sm text-gray-600">Capitale et région</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(223, 0, 28)' }} />
              <h3 className="font-bold">Toamasina</h3>
              <p className="text-sm text-gray-600">Port principal</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(223, 0, 28)' }} />
              <h3 className="font-bold">Fianarantsoa</h3>
              <p className="text-sm text-gray-600">Hautes terres</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(223, 0, 28)' }} />
              <h3 className="font-bold">Toliara</h3>
              <p className="text-sm text-gray-600">Sud-ouest</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(223, 0, 28)' }} />
              <h3 className="font-bold">Majunga</h3>
              <p className="text-sm text-gray-600">Côte ouest</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(223, 0, 28)' }} />
              <h3 className="font-bold">Nosy Be Hell Ville</h3>
              <p className="text-sm text-gray-600">Île touristique</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;