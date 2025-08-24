import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets de transport.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grille à 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Téléphones regroupés */}
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-4 border-red-600">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-8" style={{ color: 'rgb(223, 0, 28)' }}>
                Nos Numéros
              </h3>
              {/* Liste des numéros alignés verticalement */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-xl font-semibold tracking-wide text-gray-800">034&nbsp;12&nbsp;345&nbsp;67</p>
                <p className="text-xl font-semibold tracking-wide text-gray-800">032&nbsp;87&nbsp;654&nbsp;32</p>
                <p className="text-xl font-semibold tracking-wide text-gray-800">020&nbsp;22&nbsp;123&nbsp;45</p>
              </div>

              <p className="text-gray-600 mt-6 text-lg">Disponible 24h/7j</p>
            </div>

            {/* Email */}
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-4 border-red-600">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(223, 0, 28)' }}>Email</h3>
              <p className="text-xl font-semibold text-gray-800 mb-2">contact@mpitatitra.mg</p>
              <p className="text-gray-600">Réponse sous 24h</p>
            </div>

            {/* Horaires */}
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center border-t-4 border-red-600">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-10 h-10" style={{ color: 'rgb(223, 0, 28)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(223, 0, 28)' }}>Horaires d'ouverture</h3>
              <p className="text-gray-800 font-semibold mb-1">Lundi - Vendredi: 7h - 18h</p>
              <p className="text-gray-800 font-semibold mb-1">Samedi: 8h - 16h</p>
              <p className="text-gray-600">Dimanche: Fermé</p>
            </div>
          </div>
        </div>
      </section>


      {/* Map and Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Localisation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez-nous dans nos bureaux à Antananarivo pour tous vos besoins de transport et logistique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: 'rgb(223, 0, 28)' }} />
                    <p className="text-gray-600">Carte interactive - À implémenter</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Antananarivo, Madagascar<br />
                      Coordonnées: -18.8792, 47.5079
                    </p>
                  </div>
                </div>
                {/* Pattern overlay for visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Location details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" style={{ color: 'rgb(223, 0, 28)' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Adresse principale</h3>
                    <p className="text-gray-600">
                      Lot ABC 123, Quartier Central<br />
                      Antananarivo 101<br />
                      Madagascar
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6" style={{ color: 'rgb(223, 0, 28)' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Rendez-vous</h3>
                    <p className="text-gray-600">
                      Pour une consultation personnalisée, nous vous recommandons de prendre rendez-vous à l'avance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-4" style={{ color: 'rgb(223, 0, 28)' }}>Comment nous trouver</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Proche du centre-ville d'Antananarivo</li>
                  <li>• Accessible en taxi-be ou voiture particulière</li>
                  <li>• Parking disponible sur site</li>
                  <li>• Transport public: arrêt "Centre" à 200m</li>
                </ul>
              </div>
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

export default ContactPage;