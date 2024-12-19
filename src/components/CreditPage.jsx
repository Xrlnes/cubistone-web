import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Shield } from 'lucide-react';
import axios from 'axios';

const BASE_URL = 'https://headless.tebex.io/api';
const API_KEY = 'e0D1Uph2SipunszEoMPtRUmFReZnqsQ1';
const WEBSTORE_TOKEN = 'wjgx-c3e5f86bc18304945901aaada4c75b0b8076a349';

const api = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: 1518225,
    password: 'e0D1Uph2SipunszEoMPtRUmFReZnqsQ1'
  },
  headers: {
    'Content-Type': 'application/json',
  }
});

const StoreAPI = {
  cart: [], 

  async addToCart(packageData, username) {
    if (!username) {
      throw new Error('Username is required for Minecraft store');
    }

    this.cart = this.getCart();
    
    this.cart.push({
      id: packageData.id,
      name: packageData.name,
      price: packageData.price,
      username: username
    });

    localStorage.setItem('cart', JSON.stringify(this.cart));

    return {
      success: true,
      message: `${packageData.name} sepete eklendi`
    };
  },

  removeFromCart(index) {
    // Load current cart from localStorage
    this.cart = this.getCart();
    // Remove item at specified index
    this.cart.splice(index, 1);
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
    return {
      success: true,
      message: "Item removed from cart"
    };
  },

  getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  },

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }
};

// LoginModal Component
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

// StoreBar Component
const StoreBar = ({ username, isLoggedIn, cartItems, onUpdateCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price || item.base_price || 0);
      return total + price;
    }, 0);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    StoreAPI.removeFromCart(indexToRemove);
    onUpdateCart();
  };

  const handleCheckout = async () => {
    if (!isLoggedIn || !username) {
      alert('Please login with your Minecraft username first');
      return;
    }

    setIsCheckingOut(true);
    try {
      console.log('Starting checkout process...');
      console.log('Cart items:', cartItems);

      // 1. Create basket without IP (let Tebex handle it)
      const checkoutResponse = await api.post(`/accounts/${WEBSTORE_TOKEN}/baskets`, {
        username: username,
        complete_url: window.location.origin,
        cancel_url: window.location.origin,
        complete_auto_redirect: true
      });

      console.log('Basket created:', checkoutResponse.data);

      if (!checkoutResponse.data?.data?.ident) {
        throw new Error('Invalid basket response');
      }

      const basketIdent = checkoutResponse.data.data.ident;

      // 2. Add items to basket
      for (const item of cartItems) {
        console.log('Adding item to basket:', item);
        
        await api.post(`/baskets/${basketIdent}/packages`, {
          package_id: item.id,
          quantity: 1
        });
      }

      // 3. Redirect to Tebex checkout
      const checkoutUrl = `https://checkout.tebex.io/checkout/${basketIdent}`;
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');

      // Clear cart after successful checkout initiation
      StoreAPI.clearCart();
      onUpdateCart();

    } catch (error) {
      console.error('Checkout error:', error);
      console.error('Error response:', error.response?.data);
      
      let errorMessage = 'An error occurred during checkout. Please try again.';
      
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.title) {
        errorMessage = error.response.data.title;
      }
      
      alert(errorMessage);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="bg-gray-950/50 backdrop-blur-md py-4 mt-20">
      <div className="container mx-auto px-4">
        <div className="mt-4 bg-gray-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Your Cart</h2>
          
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            <>
              <div className="overflow-y-auto max-h-60">
                {cartItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between mb-2 text-white items-center"
                  >
                    <div className="flex gap-2 items-center">
                      <span>{item.name}</span>
                      <span className="text-xs text-gray-400">({item.username})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>${item.price}</span>
                      <button 
                        onClick={() => handleRemoveFromCart(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-2 border-t border-gray-700">
                <div className="flex justify-between text-white font-bold">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Proceed to Checkout'
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// PackageCard Component
const getGradient = (packName) => {
  switch(packName.toLowerCase()) {
    case 'starter':
      return 'from-blue-600 to-blue-800';
    case 'basic':
      return 'from-green-500 to-green-700';
    case 'plus':
      return 'from-orange-500 to-orange-700';
    case 'premium':
      return 'from-pink-500 to-orange-500';
    case 'pro':
      return 'from-blue-600 to-purple-600';
    case 'elite':
      return 'from-pink-600 to-purple-600';
    case 'ultimate':
      return 'from-red-500 to-orange-500';
    default:
      return 'from-blue-600 to-blue-800';
  }
};

const PackageCard = ({ pack, onPurchase, loading }) => {
  const gradient = getGradient(pack.name);
  
  const cleanDescription = pack.description.replace(/<\/?p>/g, '');
  
  return (
    <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 card group transition-all duration-300 relative overflow-hidden border border-gray-800/50">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
      
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${gradient} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
        {pack.name.toUpperCase()}
      </div>

      <Shield className={`w-8 h-8 mb-4 text-white bg-gradient-to-br ${gradient} p-1.5 rounded-lg`} />

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
            <span>${Number(pack.price)}</span>
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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [pendingPackage, setPendingPackage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const storeBarRef = useRef(null);

  useEffect(() => {
    setCartItems(StoreAPI.getCart());
  }, []);

  const updateCart = () => {
    setCartItems(StoreAPI.getCart());
  };

  const addToCartWithUsername = async (packageData, username) => {
    setLoading(true);
    setError(null);
  
    try {
      const result = await StoreAPI.addToCart(packageData, username);
      
      if (result.success) {
        updateCart();
        const storeBarElement = document.getElementById('store-bar-section');
        if (storeBarElement) {
          storeBarElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        } else {
          window.scrollTo({
            top: document.documentElement.scrollHeight / 4,
            behavior: 'smooth'
          });
        }
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Cart error:', error);
      setError('An error occurred while adding to cart. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      setPendingPackage(packageData);
      return;
    }
  
    await addToCartWithUsername(packageData, username);
  };

  const handleLogin = async (enteredUsername) => {
    setUsername(enteredUsername);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);

    if (pendingPackage) {
      await addToCartWithUsername(pendingPackage, enteredUsername);
      setPendingPackage(null);
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
      <div 
        ref={storeBarRef}
        id="store-bar-section">
        <StoreBar 
          username={username} 
          isLoggedIn={isLoggedIn}
          cartItems={cartItems}
          onUpdateCart={updateCart}
        />
      </div>
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

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => {
          setIsLoginModalOpen(false);
          setPendingPackage(null);
        }}
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default CreditPage;