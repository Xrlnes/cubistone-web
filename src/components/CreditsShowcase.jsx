import React from 'react';
import { ShoppingCart, Sparkles, Crown, Star, Zap, Shield, Gem, Diamond } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import kredi1 from '../images/kredi1.png';
import kredi2 from '../images/kredi2.png';
import kredi3 from '../images/kredi3.png';
import kredi4 from '../images/kredi4.png';
import kredi5 from '../images/kredi5.png';

const StoreShowcase = () => {
  const navigate = useNavigate();
  const packages = [
    { coins: 250, price: 59.99, icon: Shield, image: kredi1, color: 'from-blue-500 to-purple-500', tag: 'STARTER' },
    { coins: 600, price: 129.99, icon: Star, image: kredi2, color: 'from-green-500 to-teal-500', tag: 'BASIC' },
    { coins: 1200, price: 224.99, icon: Zap, image: kredi3, color: 'from-yellow-500 to-orange-500', tag: 'PLUS' },
    { coins: 2800, price: 499.99, icon: Gem, image: kredi3, color: 'from-pink-500 to-rose-500', tag: 'PREMIUM' },
    { coins: 5200, price: 799.99, icon: Crown, image: kredi4, color: 'from-indigo-500 to-blue-500', tag: 'PRO', bonus: 8 },
    { coins: 7000, price: 999.99, icon: Diamond, image: kredi4, color: 'from-purple-500 to-pink-500', tag: 'ELITE', bonus: 14 },
    { coins: 11000, price: 1459.99, icon: Sparkles, image: kredi5, color: 'from-red-500 to-orange-500', tag: 'ULTIMATE', bonus: 18 }
  ];

  const handleStoreClick = () => {
    navigate('/credits');
  };

  const MiniPackageCard = ({ pack }) => {
    const Icon = pack.icon;
    return (
      <div className="bg-gray-800/50 p-6 rounded-lg group hover:bg-gray-800 transition-all duration-300 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${pack.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 transform -skew-y-12" />
        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${pack.color} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
          {pack.tag}
        </div>
        
        <div className="text-center relative z-10">
          <img 
            src={pack.image}
            alt={`${pack.coins} Credits`}
            className="w-20 h-20 mx-auto mb-4 object-contain opacity-75 group-hover:opacity-100 transform group-hover:scale-110 transition-all"
          />
          <h3 className="text-lg font-bold mb-1 text-white">{pack.coins.toLocaleString()}</h3>
          {pack.bonus && (
            <p className="text-green-400 text-sm mb-1">+{pack.bonus}% Bonus</p>
          )}
          <p className="text-gray-400 text-base">{pack.price} TL</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-950 py-80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4 relative">
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          
          <span className="relative inline-block">
            <span className="text-blue-500 font-semibold tracking-wider relative z-10">CREDIT PACKAGES</span>
          </span>
          
          <h2 className="text-5xl font-bold text-white mt-4 leading-tight relative">
            <span className="relative inline-block">
              Premium Credits
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10" />
            </span>
          </h2>
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Unlock premium features and enhance your experience with our credit packages
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl animate-pulse" />
          
          <div className="bg-black/90 backdrop-blur-xl border border-gray-800/50 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="relative p-8">
              <div className="space-y-8">
                <div className="grid grid-cols-4 gap-6">
                  {packages.slice(0, 4).map((pack, index) => (
                    <MiniPackageCard key={index} pack={pack} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {packages.slice(4).map((pack, index) => (
                    <MiniPackageCard key={index + 4} pack={pack} />
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center space-y-8 relative">
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2">Why Choose Our Store?</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Experience seamless transactions, instant delivery, and premium support. Our store offers competitive prices and regular bonuses for our valued customers.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                  <div className="p-4">
                    <ShoppingCart className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white mb-1">Instant Delivery</h4>
                    <p className="text-sm text-gray-400">Credits are added to your account immediately after purchase</p>
                  </div>
                  <div className="p-4">
                    <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white mb-1">Secure Payments</h4>
                    <p className="text-sm text-gray-400">Your transactions are protected by industry-leading security</p>
                  </div>
                  <div className="p-4">
                    <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-400">Our dedicated team is here to help you anytime</p>
                  </div>
                </div>

                <button 
    onClick={handleStoreClick}
    className="group relative overflow-hidden mt-8"
  >
    <div className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
      <span className="relative z-10 flex items-center justify-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Visit Full Store
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-all duration-300" />
      <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[500%] transition-all duration-1000" />
    </div>
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-30 group-hover:opacity-50 blur transition-all duration-300 -z-10" />
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-40 blur-lg transition-all duration-300 -z-10" />
  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default StoreShowcase;