import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FreightTransportPage from './pages/FreightTransportPage';
import PublicTransportPage from './pages/PublicTransportPage';
import HandlingPackagingPage from './pages/HandlingPackagingPage';
import FreightServicesPage from './pages/FreightServicesPage';
import FreightVehiclesPage from './pages/FreightVehiclesPage';
import PublicServicesPage from './pages/PublicServicesPage';
import PublicVehiclesPage from './pages/PublicVehiclesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (page: string) => {
    if (page !== currentPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <HomePage />;
      case 'qui-sommes-nous':
        return <AboutPage onNavigate={handlePageChange} />;
      case 'transport-marchandises':
        return <FreightTransportPage />;
      case 'transport-marchandises-services':
        return <FreightServicesPage />;
      case 'transport-marchandises-vehicules':
        return <FreightVehiclesPage />;
      case 'transport-public':
        return <PublicTransportPage />;
      case 'transport-public-services':
        return <PublicServicesPage />;
      case 'transport-public-vehicules':
        return <PublicVehiclesPage />;
      case 'service-manutention':
        return <HandlingPackagingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
      }`}>
        <div className="animate-slide-in">
          {currentPage === 'accueil' ? (
            <HomePage onNavigate={handlePageChange} />
          ) : (
            renderPage()
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;