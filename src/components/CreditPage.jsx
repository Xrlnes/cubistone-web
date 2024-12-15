import React, { useState, useEffect } from 'react';
import { ShoppingCart, Sparkles, Crown, Star, Zap, Shield, Gem, Diamond, CreditCard } from 'lucide-react';
import StoreBar from './StoreBar';
import kredi1 from '../images/kredi1.png';
import kredi2 from '../images/kredi2.png';
import kredi3 from '../images/kredi3.png';
import kredi4 from '../images/kredi4.png';
import kredi5 from '../images/kredi5.png';

const CreditPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    { 
      id: 1,
      coins: 250, 
      price: 59.99, 
      image: kredi1, 
      icon: Shield, 
      color: 'from-blue-500 to-purple-500', 
      tag: 'STARTER' 
    },
    { 
      id: 2,
      coins: 600, 
      price: 129.99, 
      image: kredi2, 
      icon: Star, 
      color: 'from-green-500 to-teal-500', 
      tag: 'BASIC' 
    },
    { 
      id: 3,
      coins: 1200, 
      price: 224.99, 
      image: kredi2, 
      icon: Zap, 
      color: 'from-yellow-500 to-orange-500', 
      tag: 'PLUS' 
    },
    { 
      id: 4,
      coins: 5200, 
      price: 799.99, 
      image: kredi4, 
      icon: Crown, 
      color: 'from-indigo-500 to-blue-500', 
      tag: 'PRO',
      bonus: 8 
    },
    { 
      id: 5,
      coins: 11000, 
      price: 1459.99, 
      image: kredi5, 
      icon: Diamond, 
      color: 'from-purple-500 to-pink-500', 
      tag: 'ELITE',
      bonus: 18 
    }
  ];

  const PackageCard = ({ pack }) => {
    const Icon = pack.icon;
  
    return (
      <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 card group hover:scale-105 transition-all duration-300 relative overflow-hidden border border-gray-800/50">
        <div className={`absolute inset-0 bg-gradient-to-br ${pack.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
        
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${pack.color} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
          {pack.tag}
        </div>

        <Icon className={`w-8 h-8 mb-4 text-white bg-gradient-to-br ${pack.color} p-1.5 rounded-lg`} />
        
        <img 
          src={pack.image}
          alt={`${pack.coins} Credits`} 
          className="w-32 h-32 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500" 
        />
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
            {pack.coins.toLocaleString()} Credits
          </h3>
          {pack.bonus && (
            <p className="text-green-400 text-sm mb-2">+{pack.bonus}% Bonus Credits</p>
          )}
          
          <button className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] group overflow-hidden mt-4">
            <span className="relative z-10 font-bold flex items-center justify-between">
              <span>${pack.price.toFixed(2)}</span>
              <span className="flex items-center gap-2">
                Add to Cart
                <ShoppingCart className="w-4 h-4" />
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <StoreBar />

      {/* Store Info Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <CreditCard className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">CubiStone Credit Store</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Unlock Premium Features with 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Credits</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Choose from our selection of credit packages and enhance your gaming experience. 
              Unlock exclusive features, unique items, and special perks that elevate your journey in the CubiStone universe.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Credit Packages */}
        <div className="relative mb-40">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Credit Packages
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Select the perfect package that suits your needs
          </p>

          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            {/* Üst sıra - ilk 3 paket */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.slice(0, 3).map((pack) => (
                <PackageCard key={pack.id} pack={pack} />
              ))}
            </div>
            
            {/* Alt sıra - son 2 paket */}
            <div className="flex justify-center gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc((100%-24px)/3*2)]">
                {packages.slice(3, 5).map((pack) => (
                  <PackageCard key={pack.id} pack={pack} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditPage;