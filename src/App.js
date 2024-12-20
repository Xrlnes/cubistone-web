import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingProvider } from './components/LoadingProvider';
import Titles from './components/Titles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import CreditShowcase from './components/CreditsShowcase';
import CreditPage from './components/CreditPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Titles />
                <CreditShowcase />
              </>
            } />
            <Route path="/credits" element={<CreditPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;