import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Titles from './components/Titles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import CreditShowcase from './components/CreditsShowcase';
import CreditPage from './components/CreditPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Titles />
              <News />
              <CreditShowcase />
            </>
          } />
          <Route path="/credits" element={<CreditPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;