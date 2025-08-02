import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FreightTransportPage from './pages/FreightTransportPage';
import PublicTransportPage from './pages/PublicTransportPage';
import HandlingPackagingPage from './pages/HandlingPackagingPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <HomePage />;
      case 'qui-sommes-nous':
        return <AboutPage />;
      case 'transport-marchandises':
        return <FreightTransportPage />;
      case 'transport-public':
        return <PublicTransportPage />;
      case 'service-manutention':
        return <HandlingPackagingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;