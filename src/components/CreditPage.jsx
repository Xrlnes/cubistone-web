// CreditPage.jsx
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Shield, LogIn } from 'lucide-react';
import axios from 'axios';

const BASE_URL = 'https://headless.tebex.io/api';
const API_KEY = 'e0D1Uph2SipunszEoMPtRUmFReZnqsQ1';
const WEBSTORE_TOKEN = 'wjgx-c3e5f86bc18304945901aaada4c75b0b8076a349';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Tebex-Secret': API_KEY,
  },
});

const StoreAPI = {
  async createPayment(packageId, username) {
    try {
      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          package_id: packageId,
          username: username,
        })
      });

      if (!response.ok) {
        throw new Error('Payment creation failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Payment creation error:', error);
      throw error;
    }
  }
};

// StoreBar Component remains the same
const StoreBar = ({ username, isLoggedIn, onLogin }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-950/50 backdrop-blur-md py-4 mt-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1a237e] to-blue-900 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-blue-300" />
                </div>
                <span className="font-extrabold text-2xl tracking-wide text-white">
                  CREDIT STORE
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {isLoggedIn ? (
                  <div className="text-white">
                    Welcome, <span className="font-semibold">{username}</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => setLoginOpen(true)}
                    className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-6 py-2.5 rounded-lg transition-all duration-300 group"
                  >
                    <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Login with Username</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={onLogin}
      />
    </>
  );
};

// LoginModal Component remains the same
const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    try {
      onLogin(username.trim());
      onClose();
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative border border-gray-800">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Enter Minecraft Username</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              disabled={loading}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Continue to Purchase'}
          </button>
        </form>
      </div>
    </div>
  );
};

// PackageCard Component
const getGradient = (packName) => {
  switch(packName.toLowerCase()) {
    case 'starter':
      return 'from-blue-600 to-blue-800'; // Mavi Gradyant
    case 'basic':
      return 'from-green-500 to-green-700'; // Yeşil Gradyant
    case 'plus':
      return 'from-orange-500 to-orange-700'; // Turuncu Gradyant
    case 'premium':
      return 'from-pink-500 to-orange-500'; // Pembe Turuncu Gradyant
    case 'pro':
      return 'from-blue-600 to-purple-600'; // Mavi Mor Gradyant
    case 'elite':
      return 'from-pink-600 to-purple-600'; // Pembe Mor Gradyant
    case 'ultimate':
      return 'from-red-500 to-orange-500'; // Kırmızı Turuncu Gradyant
    default:
      return 'from-blue-600 to-blue-800'; // Default to Starter theme
  }
};

const PackageCard = ({ pack, onPurchase, loading }) => {
  const gradient = getGradient(pack.name);
  
  // Description'dan <p> etiketlerini kaldır
  const cleanDescription = pack.description.replace(/<\/?p>/g, '');
  
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 card group transition-all duration-300 relative overflow-hidden border border-gray-800/50">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
      
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${gradient} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
        {pack.name.toUpperCase()}
      </div>

      <Shield className={`w-8 h-8 mb-4 text-white bg-gradient-to-br ${gradient} p-1.5 rounded-lg`} />

      {/* Add image section */}
      <div className="mb-6 flex justify-center">
        <img 
          src={pack.image} 
          alt={pack.name} 
          className="w-40 h-40 object-contain rounded-lg shadow-lg"
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
          {cleanDescription}
        </h3>

        <button 
          onClick={() => onPurchase(pack)}
          disabled={loading}
          className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg transition-all group overflow-hidden mt-4 disabled:opacity-50"
        >
          <span className="relative z-10 font-bold flex items-center justify-between">
            <span>${Number(pack.price).toFixed(2)}</span>
            <span className="flex items-center gap-2">
              {loading ? 'Processing...' : 'Purchase Now'}
              <ShoppingCart className="w-4 h-4" />
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>
    </div>
  );
};

// Main CreditPage Component
const CreditPage = () => {
  const [packages, setPackages] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}`;
      setScrollProgress(scroll);
    };

    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/accounts/${WEBSTORE_TOKEN}/packages`);
        if (response.data && response.data.data) {
          // Filter and transform packages as needed
          const transformedPackages = response.data.data.map(pack => ({
            ...pack,
            price: parseFloat(pack.total_price),
            image: pack.image,
          }));
          setPackages(transformedPackages);
        }
      } catch (error) {
        console.error("Failed to fetch packages:", error);
        setError("Failed to load store packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePurchase = async (packageData) => {
    if (!isLoggedIn || !username) {
      setError('You must be logged in with a username to make a purchase.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payment = await StoreAPI.createPayment(packageData.id, username);
      
      if (payment.url) {
        window.location.href = payment.url;
      } else {
        throw new Error('Payment URL not received');
      }
    } catch (error) {
      console.error('Purchase error:', error);
      setError('An error occurred while creating the payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <StoreBar 
        username={username} 
        isLoggedIn={isLoggedIn}
        onLogin={(name) => {
          setUsername(name);
          setIsLoggedIn(true);
        }}
      />

      {error && (
        <div className="container mx-auto px-4 mt-4">
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
            {error}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-20">
        <div className="relative mb-40">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Credit Packages
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Select a package to purchase through our secure payment system
          </p>

          {loading ? (
            <div className="text-center text-gray-400">Loading packages...</div>
          ) : (
            console.log(packages),
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pack) => ( 
                <PackageCard 
                  key={pack.id} 
                  pack={pack}
                  onPurchase={handlePurchase}
                  loading={loading}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditPage;