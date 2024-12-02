import React from 'react';
import Titles from './components/Titles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import CreditShowcase from './components/CreditsShowcase';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Titles />
      <News />
      <CreditShowcase />
      <Footer  />
    </div>
  );
}

export default App;