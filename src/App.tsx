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
        return <div className="animate-fade-in"><HomePage /></div>;
      case 'qui-sommes-nous':
        return <div className="animate-fade-in"><AboutPage /></div>;
      case 'transport-marchandises':
        return <div className="animate-fade-in"><FreightTransportPage /></div>;
      case 'transport-public':
        return <div className="animate-fade-in"><PublicTransportPage /></div>;
      case 'service-manutention':
        return <div className="animate-fade-in"><HandlingPackagingPage /></div>;
      default:
        return <div className="animate-fade-in"><HomePage /></div>;
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